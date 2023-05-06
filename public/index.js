const CLIENT_ID = 
'782340290651-dvh3coksj8oplephm4h6u4d8pdi7i4jv.apps.googleusercontent.com';

const API_KEY = 
'AIzaSyA3KY-zyck80RUM-8POgcTYiKEtGTmLE6Y';

const SCOPES = 
'https://www.googleapis.com/auth/spreadsheets.readonly';

const DISCOVERY_DOC = 
'https://sheets.googleapis.com/$discovery/rest?version=v4';




let tokenClient;
let gapiInited = false;
let gisInited = false;
      
document
.getElementById('authorize_button')
.style.visibility = 'hidden';

document
.getElementById('signout_button')
.style.visibility = 'hidden';

document
.querySelector("#authorize_button")
.addEventListener("click", handleAuthClick)

document
.getElementById("signout_button")
.addEventListener("click",handleSignoutClick)

function maybeEnableButtons() {
    if (gapiInited && gisInited) {
       document.getElementById('authorize_button')
       .style.visibility = 'visible';
    }
}

function gapiLoaded() {
        gapi.load('client', initializeGapiClient);
      }

function gisLoaded() {
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: '', // defined later
        });
        gisInited = true;
        maybeEnableButtons();
      }
      
 function maybeEnableButtons() {
  if (gapiInited && gisInited) {
   document.getElementById('authorize_button').style.visibility = 'visible';
  }
 }
 function handleAuthClick() {
        tokenClient.callback = async (resp) => {
          if (resp.error !== undefined) {
            throw (resp);
          }
          document.getElementById('signout_button').style.visibility = 'visible';
          document.getElementById('authorize_button').innerText = 'Refresh';
          await listMajors();
        };
 if (gapi.client.getToken() === null) {
  // Prompt the user to select a Google Account and ask for consent to share their data
  // when establishing a new session.
  tokenClient.requestAccessToken({ prompt: 'consent' });
 } else {
  // Skip display of account chooser and consent dialog for an existing session.
  tokenClient.requestAccessToken({ prompt: '' });
 }
 };
 
 function handleSignoutClick() {
        const token = gapi.client.getToken();
        if (token !== null) {
          google.accounts.oauth2.revoke(token.access_token);
          gapi.client.setToken('');
          document.getElementById('content').innerText = '';
          document.getElementById('authorize_button').innerText = 'Authorize';
          document.getElementById('signout_button').style.visibility = 'hidden';
        }
      };
const range = response.result;
        if (!range || !range.values || range.values.length == 0) {
          document.getElementById('content').innerText = 'No values found.';
          return;
        };