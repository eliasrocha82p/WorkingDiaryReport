import {gapiLoaded,gisLoaded,handleAuthClick} from "./../modules/sheets1.js"
document.getElementById("authorize_button").onclick=handleAuthClick
gapiLoaded() 
gisLoaded()