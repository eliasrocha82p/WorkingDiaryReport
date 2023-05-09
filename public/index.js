import {getKey} from "./../modules/credentials.js"
import "./../modules/sheets.js"
const p=document.createElement("h1")
p.innerHTML=getKey()
document.body.appendChild(p)