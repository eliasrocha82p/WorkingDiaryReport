import "https://apis.google.com/js/api.js"
import {CLIENT_ID,// '782340290651-dvh3coksj8oplephm4h6u4d8pdi7i4jv.apps.googleusercontent.com' 
 API_KEY,// 'AIzaSyA3KY-zyck80RUM-8POgcTYiKEtGTmLE6Y'
 DISCOVERY_DOCS,
 SCOPES
} from "./../modules/credentials.js"
    
      // TODO(developer): Set to client ID and API key from the Developer Console
     let tokenClient;
     let gapiInited = false;
     let gisInited = false;
      

      // Discovery doc URL for APIs used by the quickstart
     // const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
     // const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

     

      document.getElementById('authorize_button').style.visibility = 'hidden';
      document.getElementById('signout_button').style.visibility = 'hidden';
      gapi.load("client",initializeGapiClient)
      
      async function initializeGapiClient() {
         await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: DISCOVERY_DOCS,
         });
         gapiInited = true;
         maybeEnableButtons();
      }