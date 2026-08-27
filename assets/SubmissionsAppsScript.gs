/**
 * Marcy Lab reading submissions — Google Apps Script Web App.
 *
 * What this does: receives one POST per "Submit for credit" click from a
 * reading, appends it as a row to this spreadsheet, and enforces a 2-attempt
 * cap per (student, reading) by scanning existing rows. Nothing here is
 * visible to students — only whoever this spreadsheet is shared with.
 *
 * SETUP (one time):
 * 1. Create a new Google Sheet (in your own Drive — this becomes the private
 *    gradebook only you can see).
 * 2. Extensions -> Apps Script. Delete the placeholder code and paste this
 *    whole file in.
 * 3. Change SHARED_SECRET below to a random string of your own — treat it
 *    like a password, don't post it publicly. It's a light filter against
 *    random/automated hits on the URL, not real security (any client-side
 *    JS is inherently readable by anyone who looks) — deliberate, same
 *    trade-off already accepted for scores in this system.
 * 4. Deploy -> New deployment -> type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    ("Anyone" here just means "anyone can send a POST to this URL" — it
 *    does NOT mean anyone can read your spreadsheet. Only people you share
 *    the Sheet with can ever see the data. This setting exists so a plain
 *    background fetch() from the reading page works reliably without a
 *    Google sign-in prompt getting in the way.)
 * 5. Deploy, authorize when prompted, copy the Web App URL it gives you
 *    (ends in /exec). Send that URL + your SHARED_SECRET to Claude so the
 *    reading kit can be wired up to it.
 * 6. To update this script later: paste the new version in, then
 *    Deploy -> Manage deployments -> edit (pencil) -> New version -> Deploy.
 *    Redeploying as a NEW deployment instead would change the URL.
 */

const SHARED_SECRET = "REPLACE_WITH_YOUR_OWN_RANDOM_STRING";
const MAX_ATTEMPTS_PER_READING = 2;
const SHEET_NAME = "Submissions";
const HEADERS = [
  "Timestamp", "Reading ID", "Reading Title", "GitHub Username", "Persona",
  "Earned", "Possible", "Pct", "Attempt #", "Status", "Full JSON",
];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
  }
  return sheet;
}

function priorAttempts_(sheet, githubUsername, readingId) {
  const rows = sheet.getDataRange().getValues();
  let count = 0;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][3] === githubUsername && rows[i][1] === readingId && rows[i][9] !== "rejected") {
      count++;
    }
  }
  return count;
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SHARED_SECRET) {
      return ContentService.createTextOutput("forbidden");
    }

    const sheet = getSheet_();
    const githubUsername = data.githubUsername || "(not provided)";
    const readingId = data.readingId || "(unknown reading)";
    const attemptNumber = priorAttempts_(sheet, githubUsername, readingId) + 1;
    const score = data.score || { earned: "", possible: "", pct: "" };
    const persona = data.persona ? `${data.persona.emoji} ${data.persona.name}` : "";

    const status = attemptNumber > MAX_ATTEMPTS_PER_READING ? "rejected" : "recorded";

    sheet.appendRow([
      new Date(), readingId, data.title || "", githubUsername, persona,
      score.earned, score.possible, score.pct, attemptNumber, status,
      JSON.stringify(data),
    ]);

    return ContentService.createTextOutput(status);
  } catch (err) {
    return ContentService.createTextOutput("error: " + err);
  }
}
