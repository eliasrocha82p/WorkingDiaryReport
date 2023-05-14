
import "https://apis.google.com/js/api.js"
//import "https://accounts.google.com/gsi/client"
import {
   CLIENT_ID,
   API_KEY,SCOPES,
   DISCOVERY_DOCS,
} from 
"./credentials.js"
import {
   SPREADSHEET_ID
}from "./sheetMaquinas.js"

function processData(response){
   console.log("data")
}
function processError(err){
   console.log("error")
}
function updateStatus(isSignedIn) {
      if (isSignedIn) {
        getData();
      }
    }
const sheet_params ={
   spreadsheetId:SPREADSHEET_ID,
   ranges:["maquinas!A1:C10"],
   includeGridData:true
}
async function initClient(){
   const params = {
      'apiKey':API_KEY,
      'clientId': CLIENT_ID,
      'scope': SCOPES,
      'discoveryDocs':DISCOVERY_DOCS
   }
   let req = await gapi.client.init(params)
   req.then(function(){
      alert("then")
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateStatus)
      updateStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
   })
}
function getData(){
   alert("getData")
   let request = 
   gapi.client.sheets.spreadsheets.get(sheet_params)
   
   request.then(processData,processError)
}
function LoadAPI(){
   gapi.load('client:auth2',initClient)
}

function handleSignInClick(event){
   gapi.auth2.getAuthInstance().signIn()
}
function handleSignOutClick(event){
   gapi.auth2.getAuthInstance().signOut()
}
export {initClient,LoadAPI,handleSignInClick,
   handleSignOutClick
}