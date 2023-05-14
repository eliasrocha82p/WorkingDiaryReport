import {
   initClient,
   LoadAPI,
   handleSignInClick,
   handleSignOutClick
} from "./../modules/sheets.js"
import {CLIENT_ID,
   API_KEY,
   SCOPES,
   DISCOVERY_DOCS
} from "./../modules/credentials.js"
document
.getElementById("authorize_button")
.addEventListener("click",handleSignInClick)
document
.getElementById("signout_button")
.addEventListener("click",handleSignOutClick)

LoadAPI()