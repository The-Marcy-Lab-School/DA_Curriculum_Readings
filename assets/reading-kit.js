/* Marcy Lab School — Reading Kit shared engine.
   One file, no build step, no external deps except the optional YouTube
   IFrame API (loaded on demand only if a reading registers a video).
   Every reading loads this once and calls ReadingKit.init({...}) then wires
   its own quiz/activity/video/response items through the calls below. */
(function(global){
  "use strict";

  const SUBMISSIONS_REPO = "The-Marcy-Lab-School/DA-Reading_Submissions";
  const ALIAS_KEY = "mlrk:persona";
  const ADJECTIVES = ["Turbo","Quiet","Cosmic","Sunny","Rapid","Clever","Bold","Mellow","Electric","Curious","Steady","Bright","Nimble","Loyal","Vivid"];
  const ANIMALS = ["Otter","Falcon","Panda","Fox","Heron","Cricket","Dolphin","Badger","Sparrow","Lynx","Gecko","Raven","Hare","Marmot","Kestrel"];
  const EMOJI = ["🦦","🦅","🐼","🦊","🐦","🦗","🐬","🦡","🐦‍⬛","🐆","🦎","🐦‍⬛","🐇","🦫","🪶"];

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
      const persona={name:rand(ADJECTIVES)+" "+rand(ANIMALS),emoji:rand(EMOJI)};
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
          '<p class="mlrk-small">This name/emoji is just for fun and shows up on the public leaderboard instead of your real name. It resets if you switch devices — pick one you like and stick with it.</p>';
        $("[data-reroll]",el).addEventListener("click",()=>{Persona.reroll();draw()});
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
    // opts: {id, buttonSelector, feedbackSelector, correct, feedback:{value:text}, onDone}
    const buttons=$$(opts.buttonSelector);
    const fb=$(opts.feedbackSelector);
    let attempts=0,done=false;
    Scoring.register(opts.id,1,"quiz");
    buttons.forEach(btn=>btn.addEventListener("click",()=>{
      if(done) return;
      attempts++;
      const val=btn.dataset.a;
      const ok=val===opts.correct;
      btn.dataset.picked=ok?"correct":"wrong";
      if(ok){
        const pts=attempts===1?1:0.5;
        Scoring.award(opts.id,pts);
        fb.className="mlrk-feedback mlrk-show mlrk-good";
        fb.innerHTML="<strong>Correct"+(attempts>1?" (2nd try — 0.5 pt)":" (1st try — 1 pt)")+".</strong> "+(opts.feedback[val]||"");
        done=true;
        buttons.forEach(b=>b.disabled=true);
      } else if(attempts>=2){
        Scoring.award(opts.id,0);
        fb.className="mlrk-feedback mlrk-show mlrk-reveal";
        fb.innerHTML="<strong>Here's the answer — you'll get it next time.</strong> The correct choice was: "+
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

  /* select-all-that-apply: correct is an array of values that must all be
     selected (and no incorrect ones) for full credit, same 1 / 0.5 / reveal
     scale keyed off number of submit attempts */
  function selectAll(opts){
    // opts: {id, boxSelector, submitSelector, feedbackSelector, correct:[...], feedback:{value:text}}
    const boxes=$$(opts.boxSelector);
    const submitBtn=$(opts.submitSelector);
    const fb=$(opts.feedbackSelector);
    let attempts=0,done=false;
    Scoring.register(opts.id,1,"quiz");
    submitBtn.addEventListener("click",()=>{
      if(done) return;
      attempts++;
      const picked=boxes.filter(b=>b.checked).map(b=>b.value).sort();
      const correct=[...opts.correct].sort();
      const ok=JSON.stringify(picked)===JSON.stringify(correct);
      if(ok){
        Scoring.award(opts.id,attempts===1?1:0.5);
        fb.className="mlrk-feedback mlrk-show mlrk-good";
        fb.innerHTML="<strong>Correct"+(attempts>1?" (2nd try — 0.5 pt)":" (1st try — 1 pt)")+".</strong> "+(opts.explanation||"");
        done=true;boxes.forEach(b=>b.disabled=true);submitBtn.disabled=true;
      } else if(attempts>=2){
        Scoring.award(opts.id,0);
        fb.className="mlrk-feedback mlrk-show mlrk-reveal";
        fb.innerHTML="<strong>Here's the answer — you'll get it next time.</strong> The correct selections were: "+
          correct.join(", ")+". "+(opts.explanation||"");
        done=true;boxes.forEach(b=>b.disabled=true);submitBtn.disabled=true;
      } else {
        fb.className="mlrk-feedback mlrk-show mlrk-bad";
        fb.innerHTML="<strong>Not quite yet.</strong> Check your selections against the prompt and try once more.";
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

  /* order-the-steps: click items in the order you believe is correct;
     compares against the correct order once all items are picked */
  function orderSteps(container,opts){
    // opts:{id, correctOrder:[stepIds in right order], feedbackSelector}
    const el=typeof container==="string"?$(container):container;
    const items=$$(".mlrk-orderitem",el);
    const fb=$(opts.feedbackSelector);
    const picked=[];
    Scoring.register(opts.id,1,"activity");
    const mark=activity(opts.id,()=>picked.length===items.length);
    items.forEach(item=>item.addEventListener("click",()=>{
      if(item.dataset.picked) return;
      picked.push(item.dataset.step);
      item.dataset.picked="1";
      const num=$(".mlrk-order-num",item);
      if(num) num.textContent=picked.length+".";
      if(picked.length===items.length){
        const ok=JSON.stringify(picked)===JSON.stringify(opts.correctOrder);
        fb.className="mlrk-feedback mlrk-show "+(ok?"mlrk-good":"mlrk-reveal");
        fb.innerHTML=ok?"<strong>That's the right order.</strong>":
          "<strong>Not quite the order things actually happen in — here's the real order:</strong> "+opts.correctOrder.join(" → ");
        mark();
        persist();
      }
    }));
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

  /* ---------- submit-for-credit (GitHub Issue, no token) ---------- */
  function buildSubmitURL(readingId,title){
    const s=snapshot(readingId,title);
    const ghUser=(localStorage.getItem("mlrk:ghuser")||"").trim();
    const body=[
      "Reading: "+title,
      "Reading ID: "+readingId,
      "GitHub username: "+(ghUser||"(fill in your GitHub username here)"),
      "Score: "+s.score.earned+" / "+s.score.possible+" ("+s.score.pct+"%)",
      "",
      "```json",
      JSON.stringify(s,null,2),
      "```"
    ].join("\n");
    const params=new URLSearchParams({
      title:"Reading submission: "+title,
      body
    });
    return "https://github.com/"+SUBMISSIONS_REPO+"/issues/new?"+params.toString();
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
    activity, terminal, Scoring, Persona, Storage,
    snapshot, toMarkdown, toText, download, restore, wireImport, buildSubmitURL
  };
})(window);
