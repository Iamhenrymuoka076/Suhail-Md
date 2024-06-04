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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_05_06_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5OCxcbiAgICAgICAgNzksXG4gICAgICAgIDkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMxLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgzLFxuICAgICAgICA2NCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDY0LFxuICAgICAgICA5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS25FTjlMZXF0Y2JlWmZOcWxwUE45YWZyT3Jwa1dGTlFvRVJlNVhNa0hBOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia1RiNUhlMXJTNjIycHNUQ2g1WDdQQVwiLFxuICBcInBob25lSWRcIjogXCI4YmE5MzllZi0zN2M0LTRjNDgtODFjYi1mNDY5YTBhMzI2NTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMTA3LFxuICAgICAgNzcsXG4gICAgICA2OCxcbiAgICAgIDYzLFxuICAgICAgMjE1LFxuICAgICAgMjQzLFxuICAgICAgMTI0LFxuICAgICAgMjUyLFxuICAgICAgMjI0LFxuICAgICAgOSxcbiAgICAgIDIzNyxcbiAgICAgIDIxNyxcbiAgICAgIDI3LFxuICAgICAgMjQ1LFxuICAgICAgMTU2LFxuICAgICAgMjA2LFxuICAgICAgMjMwLFxuICAgICAgMjAyLFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMjE0LFxuICAgICAgMTMsXG4gICAgICAyMTcsXG4gICAgICA3NCxcbiAgICAgIDE3MyxcbiAgICAgIDIxLFxuICAgICAgMTI1LFxuICAgICAgMTA4LFxuICAgICAgMzAsXG4gICAgICAxMjMsXG4gICAgICAxNjAsXG4gICAgICAxNjMsXG4gICAgICAxNTcsXG4gICAgICAxMDYsXG4gICAgICA2OCxcbiAgICAgIDE1MyxcbiAgICAgIDE1NCxcbiAgICAgIDE2OSxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWSzFFSlQzR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0OTk1Mzc4ODo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NTk3NjYzNjk1MDc1OjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BpS3dPSUVFSTduL2JJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSmhWeERqTjZLZ1R0NkFlaSttUEtpd1BLei9vaGMzditDcTBIQzFDNG9nVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEam02Si9ZNFdQMjVmOFNuODRLdWxRclR3dEc0d2FDaG1NMnkxam9xdllQblA3V2lSMlQ0MVoxMXRkb25JOFlZWDNZVVd5ekpqYkVTaVNGUk55SlZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHeDF3OXFzK25qOXBNNEJhZU5JeWxuMnZWckxVVjdrVWlZcVM1aFhldHBsbVhuWUpWSjQwQVVYajJ3QVdHeCttQlpuSnErRTBLL0FEZWVHZUJVVlpodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ5OTUzNzg4OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzUzMTUzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURxOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHE4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTUpWZ3RUTTdlbGJhbUV3bU1KbjhZTTl0M2JlQWVTWHVvdjVFUTBGdlhYMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjgwMzEyNjk1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
