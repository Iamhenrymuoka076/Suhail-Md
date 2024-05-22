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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_44_05_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYzLFxuICAgICAgICA3LFxuICAgICAgICA3NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjksXG4gICAgICAgIDE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTczLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDM5LFxuICAgICAgICA1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMixcbiAgICAgICAgODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYlRoZ0l5MWpIQTNaN1k5M3BCM3RrSVZJZk53bDB3L01XbitBekh0NHlEND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQ5OTUzNzg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RTVGMjM5Mzk1Q0U4MDRDMjRFODM3RjYzNzE5RTQzNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY0MTc4NjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWnJtUW9GTzlTTXVkRGRpZDJ5NUVIUVwiLFxuICBcInBob25lSWRcIjogXCI4YzNmMzUxYi04NzY5LTRhNGMtYTU5Mi03YWMxNGI4ZjJlNjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTk1LFxuICAgICAgMTkxLFxuICAgICAgMTAxLFxuICAgICAgMjAyLFxuICAgICAgMTQxLFxuICAgICAgMzIsXG4gICAgICAxNCxcbiAgICAgIDI1NSxcbiAgICAgIDgyLFxuICAgICAgNDEsXG4gICAgICAyOCxcbiAgICAgIDI1LFxuICAgICAgMTY1LFxuICAgICAgNjEsXG4gICAgICA4NCxcbiAgICAgIDEwOSxcbiAgICAgIDEyNCxcbiAgICAgIDI1MCxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDE1NSxcbiAgICAgIDMzLFxuICAgICAgMjQsXG4gICAgICA0OCxcbiAgICAgIDIyNSxcbiAgICAgIDIzOSxcbiAgICAgIDIxMixcbiAgICAgIDE4OCxcbiAgICAgIDgxLFxuICAgICAgMTM1LFxuICAgICAgNzMsXG4gICAgICAxMDUsXG4gICAgICA5MyxcbiAgICAgIDMsXG4gICAgICA2MixcbiAgICAgIDE4OCxcbiAgICAgIDE0NixcbiAgICAgIDI1MyxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZM0tTQjdUWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0OTk1Mzc4ODozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NTk3NjYzNjk1MDc1OjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BlS3dPSUVFTVRxdWJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSmhWeERqTjZLZ1R0NkFlaSttUEtpd1BLei9vaGMzditDcTBIQzFDNG9nVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpSDh0VUx4TUFoN1NZWWRKSzRlQnRzejhxQmlPT0hKSWxjVE5NZXNmakRkNWJEZ0RTdkFodHp3SjN1RlFORjRXTWJRNWp6dzRmcmliSlN4clBtazNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJab1ZXM2pybll1ejA3SUZXK2kyTVN6ZWVwVm0vZFNvbk1vRGhFSjEydzZBSHJtYXNaWkp4S09MNDJyc2lPMDhPNUlKQURON2NjRjd0RDJUdXd4Nk9Ddz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ5OTUzNzg4OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjQxNzg2M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
