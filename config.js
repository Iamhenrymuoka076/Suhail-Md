const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348071605639";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_16_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDUyLFxuICAgICAgICA5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMixcbiAgICAgICAgMTEyLFxuICAgICAgICA3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQyLFxuICAgICAgICA2MixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTksXG4gICAgICAgIDY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDYxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE2LFxuICAgICAgICA3OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4LFxuICAgICAgICA0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDY3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNixcbiAgICAgICAgNixcbiAgICAgICAgNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibGorNG5iOElRcXZnUDZ0YzUwUnNsMHFWM3hxcEtaNWlFdFl0VENIcXQzQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDcxNjA1NjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRTUzODE4NTdFM0MwOTZENzA2QzBBOEJGMTdCRTk4N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ4NDI5NjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUjlrZWlRaFdTdktUWFBSX2JpVjhNQVwiLFxuICBcInBob25lSWRcIjogXCI4OTkzZTg5My0zZmNlLTQxZjYtYTcxNC1mOTFkMWZmNmZmMDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgMTU4LFxuICAgICAgMTQzLFxuICAgICAgMjA3LFxuICAgICAgMjMyLFxuICAgICAgMTUsXG4gICAgICAxMDgsXG4gICAgICAxMDcsXG4gICAgICAyMCxcbiAgICAgIDIzMCxcbiAgICAgIDE2OSxcbiAgICAgIDExMixcbiAgICAgIDI2LFxuICAgICAgMTk0LFxuICAgICAgMTg1LFxuICAgICAgMjE5LFxuICAgICAgMjQ5LFxuICAgICAgMTAxLFxuICAgICAgMjIyLFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAxMSxcbiAgICAgIDIyMyxcbiAgICAgIDE3OCxcbiAgICAgIDMwLFxuICAgICAgODgsXG4gICAgICAxODYsXG4gICAgICA0OCxcbiAgICAgIDE5OSxcbiAgICAgIDE5LFxuICAgICAgMTgwLFxuICAgICAgMTAzLFxuICAgICAgMjM1LFxuICAgICAgMTAwLFxuICAgICAgMTg5LFxuICAgICAgMzIsXG4gICAgICAxMDEsXG4gICAgICA4MCxcbiAgICAgIDIwLFxuICAgICAgMTA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5WM0M2U1RCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDcxNjA1NjM5OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPTU9CQSBUVlwiLFxuICAgIFwibGlkXCI6IFwiMTE3NjM0OTI2Mzk1NjAxOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2lTaW8wQkVORGEyYkVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtZm1xeFc2QVhEOHNNVS9TWHB0cnE0VEI1cjNmWGNpODMyOHRIdVE5M2lZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9BUGlINjFZWng5c3QvSVU0M3o3cXErZjdxeFA0YTdLbWQrV1NOSzV6ZHhSSmJaTzJHRXRrUXVnQnBMOXNrNDV1Ung4bU1QRDM0RGJWZEE4bm5ybURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktheGVvRDBmK2lxeVN3NHJHdlcreUhPTlVCZmUvZlpKNktvTmtPaEtLdkNMSnZRVVR3Rk93a3Y2L3h1TEM1Mm45MmFsSkVSUC9RdEZ1VVJwVmtMbEJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzE2MDU2Mzk6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ4NDI5NjRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = 

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "OmobaTv",
  ownername:process.env.OWNER_NAME|| "Omoba Tv


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
