const CLIENT_ID = '782340290651-dvh3coksj8oplephm4h6u4d8pdi7i4jv.apps.googleusercontent.com';

const API_KEY = 'AIzaSyA3KY-zyck80RUM-8POgcTYiKEtGTmLE6Y';

const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
     
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