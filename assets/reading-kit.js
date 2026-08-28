/* Marcy Lab School — Reading Kit shared engine.
   One file, no build step, no external deps except the optional YouTube
   IFrame API (loaded on demand only if a reading registers a video).
   Every reading loads this once and calls ReadingKit.init({...}) then wires
   its own quiz/activity/video/response items through the calls below. */
(function(global){
  "use strict";

  const ALIAS_KEY = "mlrk:persona";
  const ADJECTIVES = ["Turbo","Quiet","Cosmic","Sunny","Rapid","Clever","Bold","Mellow","Electric","Curious","Steady","Bright","Nimble","Loyal","Vivid"];
  // name+emoji are paired together on purpose — picking them from two
  // independent lists is exactly what used to produce mismatches like a
  // lizard emoji next to the name "Dolphin". Every entry here uses a real,
  // single-codepoint emoji that unambiguously matches its own name.
  const ANIMALS = [
    {name:"Otter",emoji:"🦦"},{name:"Eagle",emoji:"🦅"},{name:"Panda",emoji:"🐼"},
    {name:"Fox",emoji:"🦊"},{name:"Dolphin",emoji:"🐬"},{name:"Badger",emoji:"🦡"},
    {name:"Owl",emoji:"🦉"},{name:"Turtle",emoji:"🐢"},{name:"Hedgehog",emoji:"🦔"},
    {name:"Octopus",emoji:"🐙"},{name:"Penguin",emoji:"🐧"},{name:"Koala",emoji:"🐨"},
    {name:"Kangaroo",emoji:"🦘"},{name:"Wolf",emoji:"🐺"},{name:"Tiger",emoji:"🐯"}
  ];

  function $(sel,root){return (root||document).querySelector(sel)}
  function $$(sel,root){return [...(root||document).querySelectorAll(sel)]}
  function rand(arr){return arr[Math.floor(Math.random()*arr.length)]}

  /* ---------- storage ---------- */
  const Storage = {
    key(readingId){return "mlrk:"+readingId},
    load(readingId){
      try{return JSON.parse(localStorage.getItem(this.key(readingId))||"null")}catch(e){return null}
    },
    save(readingId,data){
      try{localStorage.setItem(this.key(readingId),JSON.stringify(data))}catch(e){/* storage full/disabled — export/download still works */}
    }
  };

  /* ---------- persona (alias + avatar) ---------- */
  const Persona = {
    get(){
      try{
        const saved=JSON.parse(localStorage.getItem(ALIAS_KEY)||"null");
        if(saved && saved.name) return saved;
      }catch(e){}
      return this.reroll();
    },
    reroll(){
      const animal=rand(ANIMALS);
      const persona={name:rand(ADJECTIVES)+" "+animal.name,emoji:animal.emoji};
      try{localStorage.setItem(ALIAS_KEY,JSON.stringify(persona))}catch(e){}
      return persona;
    },
    /* Restore an exact persona typed in by hand — for a student switching
       devices/browsers who already has a locked leaderboard alias from a
       previous submission and wants this device to show the same one.
       The emoji is looked up from the animal word so it can't mismatch. */
    setFromText(text){
      const trimmed=(text||"").trim();
      if(!trimmed) return null;
      const words=trimmed.split(/\s+/);
      const animalWord=words[words.length-1].toLowerCase();
      const match=ANIMALS.find(a=>a.name.toLowerCase()===animalWord);
      const persona={name:trimmed,emoji:match?match.emoji:"🙂"};
      try{localStorage.setItem(ALIAS_KEY,JSON.stringify(persona))}catch(e){}
      return persona;
    },
    renderPicker(container){
      const el=typeof container==="string"?$(container):container;
      if(!el) return;
      function draw(){
        const p=Persona.get();
        el.innerHTML=
          '<div class="mlrk-persona">'+
          '<span class="mlrk-persona-badge" aria-hidden="true">'+p.emoji+'</span>'+
          '<span class="mlrk-persona-name">'+p.name+'</span>'+
          '<button type="button" class="mlrk-btn" data-reroll>Shuffle my reading persona</button>'+
          '</div>'+
          '<p class="mlrk-small">This name/emoji is just for fun and shows up on the leaderboard instead of your real name. It only locks in for real the first time you submit a reading for credit — after that it stays fixed no matter what you reroll to here.</p>'+
          '<details class="mlrk-hint"><summary>Already have a persona from a previous submission?</summary>'+
          '<div class="mlrk-fillblank"><label for="mlrk-persona-input">Type it in exactly</label>'+
          '<input type="text" id="mlrk-persona-input" autocomplete="off" placeholder="e.g. Turbo Otter">'+
          '<button type="button" class="mlrk-btn" data-usepersona>Use this persona</button></div>'+
          '<p class="mlrk-small">This won\'t change your locked leaderboard record either way — it just makes this device show the same persona you\'ve been using.</p>'+
          '</details>';
        $("[data-reroll]",el).addEventListener("click",()=>{Persona.reroll();draw()});
        $("[data-usepersona]",el).addEventListener("click",()=>{
          const val=$("#mlrk-persona-input",el).value;
          if(val.trim()){Persona.setFromText(val);draw()}
        });
      }
      draw();
    }
  };

  /* ---------- points engine ---------- */
  const Scoring = {
    items:{}, // id -> {earned, possible, kind}
    listeners:[],
    onChange(fn){this.listeners.push(fn)},
    register(id,possible,kind){
      if(!this.items[id]){
        this.items[id]={earned:0,possible,kind};
        this.listeners.forEach(fn=>{try{fn()}catch(e){}});
      }
    },
    award(id,earned){
      if(this.items[id]){
        this.items[id].earned=Math.max(this.items[id].earned,earned);
        this.listeners.forEach(fn=>{try{fn()}catch(e){}});
      }
    },
    total(){
      let earned=0,possible=0;
      for(const id in this.items){earned+=this.items[id].earned;possible+=this.items[id].possible}
      return {earned,possible,pct:possible?Math.round((earned/possible)*1000)/10:0};
    },
    renderChip(container){
      const el=typeof container==="string"?$(container):container;
      if(!el) return;
      const t=this.total();
      el.textContent=t.earned+" / "+t.possible+" points ("+t.pct+"%)";
    }
  };

  /* ---------- quiz (single-answer, radio-style) ---------- */
  function quiz(opts){
    // opts: {id, buttonSelector, feedbackSelector, correct, feedback:{value:text}, onDone,
    //        maxAttempts (default 2 — use 1 for true/false or A-or-B questions, where a
    //        "second try" is a guaranteed freebie with only two options)}
    const buttons=$$(opts.buttonSelector);
    const fb=$(opts.feedbackSelector);
    const maxAttempts=opts.maxAttempts||2;
    let attempts=0,done=false;
    Scoring.register(opts.id,1,"quiz");
    buttons.forEach(btn=>btn.addEventListener("click",()=>{
      if(done) return;
      attempts++;
      const val=btn.dataset.a;
      const ok=val===opts.correct;
      btn.dataset.picked=ok?"correct":"wrong";
      if(ok){
        const pts=maxAttempts===1?1:(attempts===1?1:0.5);
        Scoring.award(opts.id,pts);
        fb.className="mlrk-feedback mlrk-show mlrk-good";
        fb.innerHTML="<strong>Correct"+(attempts>1?" (2nd try — 0.5 pt)":maxAttempts===1?" (1 pt)":" (1st try — 1 pt)")+".</strong> "+(opts.feedback[val]||"");
        done=true;
        buttons.forEach(b=>b.disabled=true);
      } else if(attempts>=maxAttempts){
        Scoring.award(opts.id,0);
        fb.className="mlrk-feedback mlrk-show mlrk-reveal";
        fb.innerHTML="<strong>Here's the answer. You'll get it next time.</strong> The correct choice was: "+
          (opts.answerLabel||opts.correct)+". "+(opts.feedback[opts.correct]||"");
        done=true;
        buttons.forEach(b=>b.disabled=true);
      } else {
        fb.className="mlrk-feedback mlrk-show mlrk-bad";
        fb.innerHTML="<strong>Not quite.</strong> "+(opts.feedback[val]||"")+
          '<div class="mlrk-attempt-note">One more try before the answer is revealed.</div>';
      }
      fb.setAttribute("tabindex","-1");fb.focus();
      persist();
      if(done && opts.onDone) opts.onDone();
    }));
  }

  /* select-all-that-apply: opts.options is [{value,label,correct,hint,explain}].
     `hint` is shown on a wrong attempt (points at one specific mismatched
     statement without revealing whether it should be true or false). `explain`
     is shown for every option once the answer is revealed. Same 1 / 0.5 /
     reveal scale as quiz(), keyed off submit attempts. */
  function selectAll(opts){
    // opts: {id, boxSelector, submitSelector, feedbackSelector, options:[...], maxAttempts}
    const boxes=$$(opts.boxSelector);
    const submitBtn=$(opts.submitSelector);
    const fb=$(opts.feedbackSelector);
    const maxAttempts=opts.maxAttempts||2;
    const correct=opts.options.filter(o=>o.correct).map(o=>o.value).sort();
    let attempts=0,done=false;
    Scoring.register(opts.id,1,"quiz");
    submitBtn.addEventListener("click",()=>{
      if(done) return;
      attempts++;
      const picked=boxes.filter(b=>b.checked).map(b=>b.value).sort();
      const ok=JSON.stringify(picked)===JSON.stringify(correct);
      if(ok){
        Scoring.award(opts.id,maxAttempts===1?1:(attempts===1?1:0.5));
        fb.className="mlrk-feedback mlrk-show mlrk-good";
        fb.innerHTML="<strong>Correct"+(attempts>1?" (2nd try — 0.5 pt)":" (1st try — 1 pt)")+".</strong>";
        done=true;boxes.forEach(b=>b.disabled=true);submitBtn.disabled=true;
      } else if(attempts>=maxAttempts){
        Scoring.award(opts.id,0);
        fb.className="mlrk-feedback mlrk-show mlrk-reveal";
        fb.innerHTML="<strong>Here's the breakdown. You'll get it next time.</strong><ul>"+
          opts.options.map(o=>`<li>${o.correct?"True":"False"} — ${o.label} ${o.explain?": "+o.explain:""}</li>`).join("")+
          "</ul>";
        done=true;boxes.forEach(b=>b.disabled=true);submitBtn.disabled=true;
      } else {
        const mismatch=opts.options.find(o=>picked.includes(o.value)!==o.correct);
        fb.className="mlrk-feedback mlrk-show mlrk-bad";
        fb.innerHTML="<strong>Not quite yet.</strong> Re-check this one: \""+mismatch.label+"\" — "+
          (mismatch.hint||"think about why, then try again.");
      }
      fb.setAttribute("tabindex","-1");fb.focus();
      persist();
    });
  }

  /* ---------- generic "engagement" activity (flip-set, drag-drop, order-steps,
     simulator run) — flat 1 point once a completion condition is met ---------- */
  function activity(id,checkComplete){
    Scoring.register(id,1,"activity");
    let awarded=false;
    return function markIfComplete(){
      if(awarded) return;
      if(checkComplete()){Scoring.award(id,1);awarded=true;persist()}
    };
  }

  function flipCards(container,activityId){
    const el=typeof container==="string"?$(container):container;
    const cards=$$(".mlrk-term",el);
    const mark=activity(activityId,()=>cards.every(c=>c.classList.contains("mlrk-flipped")));
    cards.forEach(c=>c.addEventListener("click",()=>{c.classList.toggle("mlrk-flipped");mark()}));
  }

  /* order-the-steps: click an item to add it to your sequence, click it again
     to remove it (full undo before you commit) — ungraded participation
     activity, checked only when you press the "Check my order" self-check
     button, which reveals the correct order either way. */
  function orderSteps(container,opts){
    // opts:{id, correctOrder:[stepIds in right order], feedbackSelector, checkSelector}
    const el=typeof container==="string"?$(container):container;
    const items=$$(".mlrk-orderitem",el);
    const fb=$(opts.feedbackSelector);
    const checkBtn=$(opts.checkSelector);
    let picked=[];
    Scoring.register(opts.id,1,"activity");
    const mark=activity(opts.id,()=>picked.length===items.length);
    function renumber(){
      items.forEach(item=>{
        const num=$(".mlrk-order-num",item);
        const pos=picked.indexOf(item.dataset.step);
        if(pos===-1){delete item.dataset.picked;if(num)num.textContent="";}
        else{item.dataset.picked="1";if(num)num.textContent=(pos+1)+".";}
      });
    }
    items.forEach(item=>item.addEventListener("click",()=>{
      const step=item.dataset.step;
      const pos=picked.indexOf(step);
      if(pos===-1) picked.push(step);
      else picked.splice(pos,1);
      renumber();
      fb.className="mlrk-feedback";fb.innerHTML="";
    }));
    let checkAttempts=0;
    if(checkBtn) checkBtn.addEventListener("click",()=>{
      if(picked.length<items.length){
        fb.className="mlrk-feedback mlrk-show mlrk-bad";
        fb.innerHTML="Pick all "+items.length+" steps before checking.";
        fb.setAttribute("tabindex","-1");fb.focus();
        return;
      }
      checkAttempts++;
      const ok=JSON.stringify(picked)===JSON.stringify(opts.correctOrder);
      if(ok){
        fb.className="mlrk-feedback mlrk-show mlrk-good";
        fb.innerHTML="<strong>That's the right order.</strong>";
      } else if(checkAttempts>=2){
        const labels=opts.correctOrder.map(step=>items.find(i=>i.dataset.step===step).textContent.trim());
        fb.className="mlrk-feedback mlrk-show mlrk-reveal";
        fb.innerHTML="<strong>Here's the order it actually happens in.</strong>"+
          "<ol>"+labels.map(l=>"<li>"+l+"</li>").join("")+"</ol>"+
          '<button type="button" class="mlrk-btn" data-reset-order>Reset and try again</button>';
        $("[data-reset-order]",fb).addEventListener("click",()=>{picked=[];checkAttempts=0;renumber();fb.className="mlrk-feedback";fb.innerHTML="";});
      } else {
        fb.className="mlrk-feedback mlrk-show mlrk-bad";
        fb.innerHTML="Not quite the order things actually happen in. Adjust and check once more before the answer is shown.";
      }
      fb.setAttribute("tabindex","-1");fb.focus();
      mark();
      persist();
    });
  }

  /* generic ungraded self-check: compares each id in opts.mapping (element id
     -> expected container id, e.g. a dropped chip -> the dropzone it should
     end up in) and reveals the correct pairing either way. No points attached
     — pair with the activity()'s flat participation point instead. */
  function selfCheck(opts){
    // opts:{buttonSelector, feedbackSelector, mapping:{elId:{expectedId,label,expectedLabel}}}
    const btn=$(opts.buttonSelector);
    const fb=$(opts.feedbackSelector);
    let attempts=0;
    btn.addEventListener("click",()=>{
      attempts++;
      const rows=Object.entries(opts.mapping).map(([elId,spec])=>{
        const el=document.getElementById(elId);
        const ok=el&&el.closest("#"+spec.expectedId);
        return {ok,label:spec.label,expectedLabel:spec.expectedLabel};
      });
      const allOk=rows.every(r=>r.ok);
      const numRight=rows.filter(r=>r.ok).length;
      if(allOk){
        fb.className="mlrk-feedback mlrk-show mlrk-good";
        fb.innerHTML="<strong>All correctly matched.</strong>";
      } else if(attempts>=2){
        fb.className="mlrk-feedback mlrk-show mlrk-reveal";
        fb.innerHTML="<strong>Correct matches:</strong><ul>"+
          rows.map(r=>"<li>"+r.label+" belongs in: "+r.expectedLabel+"</li>").join("")+"</ul>";
      } else {
        fb.className="mlrk-feedback mlrk-show mlrk-bad";
        fb.innerHTML=numRight+" of "+rows.length+" matched so far. Adjust and check once more before the answer is shown.";
      }
      fb.setAttribute("tabindex","-1");fb.focus();
    });
  }

  /* click-through trace visualizer for a hard-to-hold-in-your-head execution
     order (nested loops especially) — the student advances one line at a
     time instead of getting the whole trace dumped at once. */
  function traceStepper(container,opts){
    // opts:{steps:[{cell, line}]}  — cell is the short grid-box label, line is
    // the full output line appended to the running log as that step reveals.
    const el=typeof container==="string"?$(container):container;
    const grid=document.createElement("div");
    grid.className="mlrk-trace-grid";
    opts.steps.forEach((s,i)=>{
      const cell=document.createElement("div");
      cell.className="mlrk-trace-cell";
      cell.textContent=s.cell;
      grid.appendChild(cell);
    });
    const log=document.createElement("pre");
    log.className="mlrk-trace-log";
    log.setAttribute("aria-live","polite");
    const controls=document.createElement("div");
    controls.className="mlrk-actions";
    const nextBtn=document.createElement("button");
    nextBtn.type="button";nextBtn.className="mlrk-btn";nextBtn.textContent="Show next line";
    const resetBtn=document.createElement("button");
    resetBtn.type="button";resetBtn.className="mlrk-btn";resetBtn.textContent="Start over";
    controls.append(nextBtn,resetBtn);
    el.append(grid,controls,log);
    let idx=-1;
    function render(){
      [...grid.children].forEach((c,i)=>c.classList.toggle("mlrk-trace-current",i===idx));
      log.textContent=opts.steps.slice(0,idx+1).map(s=>s.line).join("\n")||"(nothing shown yet)";
      nextBtn.disabled=idx>=opts.steps.length-1;
    }
    nextBtn.addEventListener("click",()=>{idx=Math.min(idx+1,opts.steps.length-1);render()});
    resetBtn.addEventListener("click",()=>{idx=-1;render()});
    render();
  }

  /* drag-and-drop matching: draggable chips into labeled dropzones */
  function dragDrop(container,activityId){
    const el=typeof container==="string"?$(container):container;
    const draggables=$$(".mlrk-draggable",el);
    const zones=$$(".mlrk-dropzone",el);
    const mark=activity(activityId,()=>draggables.every(d=>d.closest(".mlrk-dropzone")));
    draggables.forEach(d=>{
      d.setAttribute("draggable","true");
      d.addEventListener("dragstart",e=>{e.dataTransfer.setData("text/plain",d.id);d.setAttribute("aria-grabbed","true")});
      d.addEventListener("dragend",()=>d.setAttribute("aria-grabbed","false"));
    });
    zones.forEach(z=>{
      z.addEventListener("dragover",e=>{e.preventDefault();z.classList.add("mlrk-over")});
      z.addEventListener("dragleave",()=>z.classList.remove("mlrk-over"));
      z.addEventListener("drop",e=>{
        e.preventDefault();z.classList.remove("mlrk-over");
        const id=e.dataTransfer.getData("text/plain");
        const chip=document.getElementById(id);
        if(chip){z.appendChild(chip);mark();persist()}
      });
    });
  }

  /* ---------- video completion via YouTube IFrame API ---------- */
  let ytApiPromise=null;
  function loadYouTubeAPI(){
    if(ytApiPromise) return ytApiPromise;
    ytApiPromise=new Promise(resolve=>{
      if(global.YT && global.YT.Player) return resolve(global.YT);
      const prev=global.onYouTubeIframeAPIReady;
      global.onYouTubeIframeAPIReady=function(){if(prev)prev();resolve(global.YT)};
      const tag=document.createElement("script");
      tag.src="https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    });
    return ytApiPromise;
  }
  function video(opts){
    // opts:{id, elementId, videoId}
    Scoring.register(opts.id,1,"video");
    loadYouTubeAPI().then(YT=>{
      new YT.Player(opts.elementId,{
        videoId:opts.videoId,
        events:{
          onStateChange(e){
            if(e.data===YT.PlayerState.ENDED){Scoring.award(opts.id,1);persist()}
          }
        }
      });
    }).catch(()=>{/* API blocked/offline — the "watch on YouTube" link still works */});
  }

  /* ---------- free response ---------- */
  function freeResponse(opts){
    // opts:{id, selector, minWords}
    const el=$(opts.selector);
    Scoring.register(opts.id,1,"response");
    let awarded=false;
    el.addEventListener("input",()=>{
      const words=el.value.trim().split(/\s+/).filter(Boolean).length;
      if(!awarded && words>=(opts.minWords||8)){Scoring.award(opts.id,1);awarded=true}
      persist();
    });
  }

  /* ---------- terminal simulator ----------
     A small virtual filesystem + command table, not a real shell — good
     enough to teach navigation/chaining without a backend. Always includes
     pwd/cd/ls/cat/echo/clear so a topic-specific reading can layer its own
     commands on top without re-implementing the basics every time. */
  function terminal(container,opts){
    // opts:{id, filesystem:{"/path":{type:"dir"|"file", contents:"...", children:[...]}, startPath, commands:{name:(args,state)=>outputString}}
    const el=typeof container==="string"?$(container):container;
    const state={cwd:opts.startPath||"/", fs:opts.filesystem};
    const log=$(".mlrk-terminal-log",el);
    const input=$(".mlrk-terminal-input",el);
    const promptEl=$(".mlrk-terminal-prompt",el);
    Scoring.register(opts.id,1,"activity");
    const mark=activity(opts.id,()=>state.ranCount>=(opts.minCommands||3));
    state.ranCount=0;

    function node(path){return state.fs[path]}
    function resolve(path){
      if(path==="~"||!path) return opts.startPath||"/";
      if(path.startsWith("/")) return path.replace(/\/+$/,"")||"/";
      const base=state.cwd==="/"?"":state.cwd;
      if(path==="..") {
        const parts=base.split("/").filter(Boolean);parts.pop();
        return "/"+parts.join("/")||"/";
      }
      return (base+"/"+path).replace(/\/+/g,"/");
    }
    const builtins={
      pwd(){return state.cwd},
      ls(args){
        const target=args[0]?resolve(args[0]):state.cwd;
        const n=node(target);
        if(!n||n.type!=="dir") return target+": no such directory";
        return (n.children||[]).join("\n");
      },
      cd(args){
        const target=resolve(args[0]);
        const n=node(target);
        if(!n||n.type!=="dir") return target+": no such directory";
        state.cwd=target;return "";
      },
      cat(args){
        const target=resolve(args[0]);
        const n=node(target);
        if(!n||n.type!=="file") return target+": no such file";
        return n.contents||"";
      },
      echo(args){return args.join(" ")},
      clear(){log.textContent="";return null}
    };
    function prompt(){promptEl.textContent=(state.cwd)+" $"}
    prompt();
    input.addEventListener("keydown",e=>{
      if(e.key!=="Enter") return;
      const raw=input.value;input.value="";
      const [cmd,...args]=raw.trim().split(/\s+/).filter(Boolean);
      if(!cmd) return;
      let out;
      const custom=(opts.commands||{})[cmd];
      out = custom ? custom(args,state) : (builtins[cmd] ? builtins[cmd](args) : cmd+": command not found");
      const line=(state.cwd+" $ "+raw+"\n"+(out==null?"":out+"\n"));
      log.textContent += (log.textContent?"\n":"") + line;
      log.scrollTop=log.scrollHeight;
      state.ranCount++;
      prompt();
      mark();
      persist();
    });
  }

  /* ---------- export / import ---------- */
  function snapshot(readingId,title){
    const responses={};
    $$("[data-save]").forEach(x=>responses[x.id]=x.value);
    return {
      readingId,title,timestamp:new Date().toISOString(),
      persona:Persona.get(),
      responses,
      score:Scoring.total(),
      scoreDetail:Scoring.items
    };
  }
  function toMarkdown(s){
    let r="# "+s.title+"\n\n**Timestamp:** "+s.timestamp+"\n\n**Score:** "+s.score.earned+" / "+s.score.possible+" ("+s.score.pct+"%)\n\n## Responses\n";
    for(const [k,v] of Object.entries(s.responses)) r+="\n### "+k+"\n"+(v||"_Not answered_")+"\n";
    return r;
  }
  function toText(s){
    let r=s.title+"\nTimestamp: "+s.timestamp+"\nScore: "+s.score.earned+" / "+s.score.possible+" ("+s.score.pct+"%)\n\nRESPONSES\n";
    for(const [k,v] of Object.entries(s.responses)) r+="\n"+k+"\n"+(v||"(not answered)")+"\n";
    return r;
  }
  function download(name,type,content){
    try{
      const blob=new Blob([content],{type:type+";charset=utf-8"});
      const url=URL.createObjectURL(blob);
      const a=document.createElement("a");
      a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();
      setTimeout(()=>URL.revokeObjectURL(url),500);
      return true;
    }catch(e){return false}
  }
  function restore(data){
    if(!data||!data.responses) return;
    for(const [k,v] of Object.entries(data.responses)){
      const el=document.getElementById(k);
      if(el) el.value=v;
    }
    if(data.scoreDetail) Object.assign(Scoring.items,data.scoreDetail);
  }
  function wireImport(fileInputSelector,onLoaded){
    const input=$(fileInputSelector);
    if(!input) return;
    input.addEventListener("change",()=>{
      const file=input.files[0];if(!file) return;
      const reader=new FileReader();
      reader.onload=()=>{
        try{
          const data=JSON.parse(reader.result);
          restore(data);
          if(onLoaded) onLoaded(true);
        }catch(e){if(onLoaded) onLoaded(false)}
      };
      reader.readAsText(file);
    });
  }

  /* ---------- submit-for-credit (Google Form -> private Sheet) ----------
     Grades go to a Google Sheet only the instructor can see. Tried a custom
     Apps Script Web App first (a real backend, real per-field validation,
     a shared secret) — that hit a Google Workspace admin policy on the
     school domain blocking anonymous access to Apps Script web apps
     specifically, with no workaround available to an individual account.
     A public Google Form's response endpoint is a different Google feature
     with different (more permissive) access rules, since accepting outside
     responses is what a form is for — so this sidesteps that wall entirely,
     at the cost of losing server-side validation (no shared-secret gate, no
     server-enforced attempt cap — both are client-side-only now). Accepted
     trade-off for an internal, low-stakes formative-practice tool.
     A student's own git-push-to-your-portfolio streak (see the export
     section) is separate and doesn't touch this at all. */
  const SUBMISSIONS_FORM_ID = "REPLACE_WITH_YOUR_FORM_ID"; // the id in .../forms/d/e/<THIS>/viewform
  const SUBMISSIONS_FORM_ENTRIES = {
    readingId: "entry.REPLACE1",
    title: "entry.REPLACE2",
    githubUsername: "entry.REPLACE3",
    personaName: "entry.REPLACE4",
    personaEmoji: "entry.REPLACE5",
    skillTags: "entry.REPLACE6",
    earned: "entry.REPLACE7",
    possible: "entry.REPLACE8",
    pct: "entry.REPLACE9"
  };
  function submitForCredit(opts){
    // opts: {readingId, title, tags:[taxonomy.json ids], onDone(status)} —
    // status is "sent" (best-effort, no-cors can't confirm the Form actually
    // accepted it), "attempt-limit" (client already used both local attempts
    // for this reading), or "network-error" (request never left the browser).
    const attemptsKey="mlrk:attempts:"+opts.readingId;
    const attempts=parseInt(localStorage.getItem(attemptsKey)||"0",10);
    if(attempts>=2){
      if(opts.onDone) opts.onDone("attempt-limit");
      return;
    }
    const s=snapshot(opts.readingId,opts.title);
    const E=SUBMISSIONS_FORM_ENTRIES;
    const form=new URLSearchParams();
    form.set(E.readingId,opts.readingId);
    form.set(E.title,opts.title);
    form.set(E.githubUsername,(localStorage.getItem("mlrk:ghuser")||"").trim());
    form.set(E.personaName,s.persona.name);
    form.set(E.personaEmoji,s.persona.emoji);
    form.set(E.skillTags,(opts.tags||[]).join(", "));
    form.set(E.earned,s.score.earned);
    form.set(E.possible,s.score.possible);
    form.set(E.pct,s.score.pct);
    localStorage.setItem(attemptsKey,String(attempts+1));
    fetch("https://docs.google.com/forms/d/e/"+SUBMISSIONS_FORM_ID+"/formResponse",{
      method:"POST", mode:"no-cors",
      headers:{"Content-Type":"application/x-www-form-urlencoded"},
      body:form.toString()
    }).then(()=>{if(opts.onDone) opts.onDone("sent")})
      .catch(()=>{if(opts.onDone) opts.onDone("network-error")});
  }

  /* ---------- persistence tick ---------- */
  let currentReadingId=null,currentTitle=null;
  function persist(){
    if(!currentReadingId) return;
    Storage.save(currentReadingId,snapshot(currentReadingId,currentTitle));
  }

  /* ---------- init ---------- */
  function init(opts){
    // opts:{readingId, title, progressBarSelector, bannerSelector}
    currentReadingId=opts.readingId;currentTitle=opts.title;
    const saved=Storage.load(opts.readingId);
    if(saved){
      restore(saved);
      const banner=opts.bannerSelector&&$(opts.bannerSelector);
      if(banner){banner.hidden=false;banner.textContent="We restored your previous progress on this reading."}
    }
    $$("[data-save]").forEach(x=>x.addEventListener("input",persist));
    if(opts.progressBarSelector){
      const bar=$(opts.progressBarSelector);
      window.addEventListener("scroll",()=>{
        const d=document.documentElement,m=d.scrollHeight-d.clientHeight;
        bar.style.width=(m?Math.min(100,d.scrollTop/m*100):0)+"%";
      });
    }
  }

  global.ReadingKit={
    init, quiz, selectAll, flipCards, orderSteps, dragDrop, video, freeResponse,
    activity, terminal, selfCheck, traceStepper, Scoring, Persona, Storage,
    snapshot, toMarkdown, toText, download, restore, wireImport, submitForCredit
  };
})(window);
