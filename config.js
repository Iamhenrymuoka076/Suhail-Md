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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_10_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3LFxuICAgICAgICA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA1LFxuICAgICAgICA3MixcbiAgICAgICAgNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDI2LFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQwLFxuICAgICAgICA2NSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDczLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxmUFN3WWNMR0dreGdGSjlpYnJ2OTZHRXdEQTJBdVFxZnIxdXhZTnNEOVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkEtX2R1cDdjUW5PMGRYMlZFWnA5SGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzExYzRlZTMtMmY0Ni00Y2E1LTgxNDItZjU3OWVhNmUyNmFhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgOTEsXG4gICAgICA1MixcbiAgICAgIDUsXG4gICAgICAxNjUsXG4gICAgICA5MCxcbiAgICAgIDIzOSxcbiAgICAgIDEzOCxcbiAgICAgIDE1NyxcbiAgICAgIDIxMCxcbiAgICAgIDExNCxcbiAgICAgIDIyMixcbiAgICAgIDksXG4gICAgICAxNjYsXG4gICAgICAxMDEsXG4gICAgICA1MyxcbiAgICAgIDE4NixcbiAgICAgIDMwLFxuICAgICAgMjQyLFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAyMTgsXG4gICAgICAyMDcsXG4gICAgICA2OSxcbiAgICAgIDExLFxuICAgICAgMTUzLFxuICAgICAgMjYsXG4gICAgICAxNjYsXG4gICAgICAxNzIsXG4gICAgICAxLFxuICAgICAgMTE5LFxuICAgICAgMjE3LFxuICAgICAgMTQxLFxuICAgICAgMTM3LFxuICAgICAgMjAxLFxuICAgICAgODgsXG4gICAgICA3OSxcbiAgICAgIDIxNSxcbiAgICAgIDkzLFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1BEODJEWTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDk5NTM3ODg6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzU5NzY2MzY5NTA3NToyMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJIZW5yefCfpbrwn6u28J+SpvCfjprvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaTN4ZU1DRUxldjJMRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJsZ2hRT1ZjbVUwQ1dLUXlRZ2NTSk84K1AxRDhvM21PelAwcndwdjBnQlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUTcyekRDb25zd2IrWk85VFBnU1ZJbkVoK0xHMnlhR1RxaEtQYllxbEFrUnZPbEk0QlNua3VTdTNjcTZaT09IZzJtTTJJdkZ5bytUOGpVb2U1QTlNRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN3Azd2pYQTBMOGJGQkwvcHQ0aVdSNUN0aHJURnhjQ3QrZWcxT1pFVmthbGM4Z2NwOWdybTM0T0FBcHNadGRaOWptY0l4VWNkUlM1UnhXVnZXVlVzaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0OTk1Mzc4ODoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDgyMTA1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUl0NVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXQ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSkFhdFFkRXFxQ2NrZ0d4OGZCVytic1ZRQlc0eWNSWUpjd1VudE5nN2M4bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NDU2MjY1MTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = 

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Henrybot",
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
