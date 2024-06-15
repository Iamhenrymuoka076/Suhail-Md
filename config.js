const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongosh "mongodb+srv://cluster0.n2hlqlw.mongodb.net/" --apiVersion 1 --username henrymuoka03"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348149953788";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_56_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUxLFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgODMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxODgsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MixcbiAgICAgICAgMTE5LFxuICAgICAgICA5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhdDI3Q3RXbXZicVFDcWdvYU1VYlM5ekxLTUlnbjM1NWRaQXFhc1MzN3pjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrVTlWYTQyX1FKT1dOQXFONjFsVzdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdlY2YzNGJlLTk0MTYtNDU3MC1iNDYwLTc2MDNlZjNhNTk2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAxNzgsXG4gICAgICAxMzgsXG4gICAgICAxNTgsXG4gICAgICA4MSxcbiAgICAgIDkzLFxuICAgICAgMTg1LFxuICAgICAgMjgsXG4gICAgICA2NyxcbiAgICAgIDYzLFxuICAgICAgMjU1LFxuICAgICAgMTY3LFxuICAgICAgMTE3LFxuICAgICAgMTA5LFxuICAgICAgMTA4LFxuICAgICAgODEsXG4gICAgICAxMTcsXG4gICAgICAyNDQsXG4gICAgICAxMzMsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAxNDksXG4gICAgICAxNzgsXG4gICAgICA4OCxcbiAgICAgIDE1NCxcbiAgICAgIDk3LFxuICAgICAgMjUyLFxuICAgICAgMTI4LFxuICAgICAgMTE0LFxuICAgICAgMTUsXG4gICAgICAxNyxcbiAgICAgIDIwNSxcbiAgICAgIDEwMSxcbiAgICAgIDc2LFxuICAgICAgNzMsXG4gICAgICAyMjEsXG4gICAgICAxMDksXG4gICAgICAyMDAsXG4gICAgICAxNDMsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTVZSEM0VlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDk5NTM3ODg6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzU5NzY2MzY5NTA3NTo0MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQaUt3T0lFRUorU3RiTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpoVnhEak42S2dUdDZBZWkrbVBLaXdQS3ovb2hjM3YrQ3EwSEMxQzRvZ1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMCsxNkR6TCtJdnVEWkIwaENMNStrak9yT2FZOTRFdTFNRk42Z0IyZEw1L3grVFl6Z0NhZUI2ZVVPOVRndGlVQzhia3lqdk0zdVNEVmJEOFdFaVpTRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRWFKQkdDZ0ZOS1VsRzBLY25lRHUxUUdVSUhrbFBkMUdYMmpKTG5LaGc3dUgyK0QwRGhaa0syZlpHczlvUjJ4aG00eE1ObW1RanE3TUJ1MWpzWURNaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0OTk1Mzc4ODo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg0MzgxNzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEcThcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURxOC5qc29uIjogIntcImtleURhdGFcIjpcIk1KVmd0VE03ZWxiYW1Fd21NSm44WU05dDNiZUFlU1h1b3Y1RVEwRnZYWDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4MDMxMjY5NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = 

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Henry",
  ownername:process.env.OWNER_NAME|| "Henry


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
