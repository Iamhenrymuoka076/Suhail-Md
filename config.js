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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_29_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NixcbiAgICAgICAgMTEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODcsXG4gICAgICAgIDM2LFxuICAgICAgICAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjksXG4gICAgICAgIDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYzLFxuICAgICAgICA2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDk0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtTC9kQjNvbUE0aXNGOVFOaDhyUlN0S1BrVFZkWjNDdXRuTmQ3ZFBhSUQ0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaRlVUdGFndlNjcVV1M3loTmVHcm5nXCIsXG4gIFwicGhvbmVJZFwiOiBcImI2MzA3M2Q2LWY1ZDQtNDdhNi1iYjMzLWIxMmMzMDgwOGM4Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICA4NyxcbiAgICAgIDkzLFxuICAgICAgMTMwLFxuICAgICAgODYsXG4gICAgICAyMDUsXG4gICAgICAyMzQsXG4gICAgICAxNDgsXG4gICAgICA5OSxcbiAgICAgIDQ2LFxuICAgICAgMjYsXG4gICAgICA0NSxcbiAgICAgIDUxLFxuICAgICAgMjA0LFxuICAgICAgMTU0LFxuICAgICAgMjAyLFxuICAgICAgMjYsXG4gICAgICAxMzcsXG4gICAgICAyMjAsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICA3NCxcbiAgICAgIDIyNCxcbiAgICAgIDQ2LFxuICAgICAgMTk4LFxuICAgICAgMTE5LFxuICAgICAgMjgsXG4gICAgICA1OCxcbiAgICAgIDI0LFxuICAgICAgMTQ5LFxuICAgICAgMTcyLFxuICAgICAgMTcsXG4gICAgICA0NixcbiAgICAgIDIxMixcbiAgICAgIDI0OSxcbiAgICAgIDQ5LFxuICAgICAgMjM2LFxuICAgICAgMTI3LFxuICAgICAgMTA4LFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpGODdRQTM2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ5OTUzNzg4OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDc1OTc2NjM2OTUwNzU6MjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSGVucnnwn6W68J+rtvCfkqbwn46a77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmUzeGVNQ0VPcWF6N0VHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCbGdoUU9WY21VMENXS1F5UWdjU0pPOCtQMUQ4bzNtT3pQMHJ3cHYwZ0JRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVKbWhjcUtkYmdjNDJHUlQzbEo4dFc1S2lFemloU0tGdk1uRUJzSzZyeDlnZTVnOFVjbU1nNkJ4T05EdXpMQjZRUTlCM1hPdGhUWGo0aFJiamdKdURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRiQmdIVjQvUmo0bStxOFNia0djaS9DNFM5K2ticXBPeDQ4dDVTa25TMEJRVVFpREtEUDJxcFRXK0NqTjd5cU12QTRXdlQyT1p3QmxML0ZaYXRhbEJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDk5NTM3ODg6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ2NzA5NTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJdDVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl0NS5qc29uIjogIntcImtleURhdGFcIjpcIkpBYXRRZEVxcUNja2dHeDhmQlcrYnNWUUJXNHljUllKY3dVbnROZzdjOG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzQ1NjI2NTE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Henry,


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
