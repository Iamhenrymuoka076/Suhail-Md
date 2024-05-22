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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_14_05_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwLFxuICAgICAgICA2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDk0LFxuICAgICAgICA2MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI5LFxuICAgICAgICA1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgzLFxuICAgICAgICA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNixcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNixcbiAgICAgICAgMTkzLFxuICAgICAgICA2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE1LFxuICAgICAgICA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MixcbiAgICAgICAgMzksXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTAxLFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieVlPTm9Lb0xoTjE5WU9Ubm1OWGtZUG84RlhLdFI3QnRtZ2phWXhVc3Nubz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLUU4MnJ2OS1UYWE3QlRFazNaOG5jd1wiLFxuICBcInBob25lSWRcIjogXCIzYzhlMDUwZC1jOWI5LTRkYTYtOGVlNC05NjhjMDBlODE4ODlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxMixcbiAgICAgIDIzOCxcbiAgICAgIDIyMyxcbiAgICAgIDI2LFxuICAgICAgNjIsXG4gICAgICAxNzMsXG4gICAgICAxNDMsXG4gICAgICAzOSxcbiAgICAgIDEwOCxcbiAgICAgIDIzMyxcbiAgICAgIDIyMCxcbiAgICAgIDI0LFxuICAgICAgMTI5LFxuICAgICAgMTY3LFxuICAgICAgMjE1LFxuICAgICAgMTEyLFxuICAgICAgMTg3LFxuICAgICAgMTkxLFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDEyOSxcbiAgICAgIDIwMyxcbiAgICAgIDI0LFxuICAgICAgMyxcbiAgICAgIDE0NixcbiAgICAgIDE3MixcbiAgICAgIDQ5LFxuICAgICAgMTM3LFxuICAgICAgMTY4LFxuICAgICAgMTYwLFxuICAgICAgMjUxLFxuICAgICAgNDIsXG4gICAgICAyMzMsXG4gICAgICAxNDIsXG4gICAgICAxODAsXG4gICAgICAyNTUsXG4gICAgICA3MixcbiAgICAgIDE5NyxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZQUU4RUtRRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0OTk1Mzc4ODozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NTk3NjYzNjk1MDc1OjM0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkhlbnJ58J+luvCfq7bwn5Km8J+Omu+4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BPS3dPSUVFTWUydHJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSmhWeERqTjZLZ1R0NkFlaSttUEtpd1BLei9vaGMzditDcTBIQzFDNG9nVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzSTQ3Ty9vS3cwaGF1b2NLTVZYNGIxdm9kWG5XdUhhN2drRm8vNkt6bUQrRGZoamh1M1NoV2VEUURQbUVZRXpjZm9KeCtyN3c2NG15SlFnT0Vkem1EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1bG02VXNVZ09xSnVzZGRaNEs2V25IYzE2STlvMnZ0Z0k4aCtoWUNqRUNSYXdvNXJ6TTFWY3l6a1d0OEdPQW1iMndUTzM2Y056a3BFNzk1NVdCbTlnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ5OTUzNzg4OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjM2MjA1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUF4dVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXh1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwib0dhVmlmaGVlZlFtM05JK1JzdGxjeko5VWRkT1dFcGJZWVRKQzY5OVFJQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjgwMzEyNjg5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
