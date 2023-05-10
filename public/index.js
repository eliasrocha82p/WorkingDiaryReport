import {
   gapiLoaded,
   gisLoaded,
   handleAuthClick,
   handleSignoutClick
} from "./../modules/sheets.js"

document
.getElementById("authorize_button")
.addEventListener("click",handleAuthClick)

document.getElementById("signout_button")
.addEventListener("click",handleSignoutClick)

gapiLoaded()

gisLoaded()