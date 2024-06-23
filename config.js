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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_42_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTY5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU5LFxuICAgICAgICA4OCxcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDczLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICA5MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyLFxuICAgICAgICA0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDYyLFxuICAgICAgICA0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzLFxuICAgICAgICA1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODksXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDU1LFxuICAgICAgICA2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDcwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDc0LFxuICAgICAgICA5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgMjMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM2LFxuICAgICAgICA2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK0kvRHdzVG5PMjJiOUdocE4vMkpsdDRjU0tyOFczcEZLNm1ZZFRidnRPND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicjZyMTRxRnRSeG1HY1d1WHl2Q3BoQVwiLFxuICBcInBob25lSWRcIjogXCIyZjYwZTRjYy0wZDhmLTRhZDgtODkyMS0wMmE5ZmQzOGI1MmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk4LFxuICAgICAgMTUsXG4gICAgICAxNTQsXG4gICAgICAxMTIsXG4gICAgICAyMjMsXG4gICAgICA3NixcbiAgICAgIDE5OSxcbiAgICAgIDY4LFxuICAgICAgMTA1LFxuICAgICAgNzQsXG4gICAgICAyNTIsXG4gICAgICAxOTgsXG4gICAgICA2OCxcbiAgICAgIDIwOCxcbiAgICAgIDEyNSxcbiAgICAgIDQ0LFxuICAgICAgODMsXG4gICAgICAxNTAsXG4gICAgICAxNjgsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMTEyLFxuICAgICAgMyxcbiAgICAgIDE5NixcbiAgICAgIDE2MyxcbiAgICAgIDI0NSxcbiAgICAgIDYsXG4gICAgICAxNjQsXG4gICAgICAxMzQsXG4gICAgICAxOTYsXG4gICAgICA5MyxcbiAgICAgIDE3MCxcbiAgICAgIDIsXG4gICAgICA5MSxcbiAgICAgIDIyMixcbiAgICAgIDk4LFxuICAgICAgMjE5LFxuICAgICAgMjAzLFxuICAgICAgMjUyLFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJIUlpRRFdLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ5OTUzNzg4OjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDc1OTc2NjM2OTUwNzU6NDdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHVLd09JRUVLdk00TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKaFZ4RGpONktnVHQ2QWVpK21QS2l3UEt6L29oYzN2K0NxMEhDMUM0b2dVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInp2ZFVLdExXZmlnMWFwd2ZaeEdXb1h6TThvOGhMM05KcnhJOURhYW9kWHgwejg5ektYSkEwRHhBTmwwZGZnYzFMZDJRdkVhSjVyS0g0NDk1Sm91Q0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFGZWozOFJGUVZXbks4STJWVllhZHdBaVlLam9mYTFJcXdTODZoK2J5b3hpZmtLRmtRYldZQnFBYWpWS2hzVVpaRkphM0d0TTVyeFh5Qi9FU2Z3QkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDk5NTM3ODg6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTUwMTI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTV5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJNXkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2Mk4xdkowZXE0bG1zV0Z2NHFwSlV1NDBuSVJxQWxNOFdFOEVWK0srNTQ4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyODAzMTI2OTgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTE0OTk3MzYzN1wifSIKfQ=="  // PUT your SESSION_ID 


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
