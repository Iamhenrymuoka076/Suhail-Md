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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_47_05_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODAsXG4gICAgICAgIDY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MixcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3LFxuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDgyLFxuICAgICAgICA5MixcbiAgICAgICAgMTU5LFxuICAgICAgICA2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAzNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU5LFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDMxLFxuICAgICAgICA4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU25GZzd1aFp6a25ieUgwMmZ5T29mdFZ2cnA0dFhsM3lVaXN2MElMaWhrUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT0hWNmlIenlRNW1RUWlpRmRmc0xPQVwiLFxuICBcInBob25lSWRcIjogXCI3OWQ4Mzc0Yi0zNzgzLTRmZDUtOGM1MC0xMjIzN2I0NjI3MjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAxNDgsXG4gICAgICAyNDYsXG4gICAgICAxNzcsXG4gICAgICAxODUsXG4gICAgICAzLFxuICAgICAgMzQsXG4gICAgICAyMzAsXG4gICAgICA3NixcbiAgICAgIDc3LFxuICAgICAgMixcbiAgICAgIDE2NixcbiAgICAgIDE5MSxcbiAgICAgIDIzLFxuICAgICAgMjUsXG4gICAgICAyMDQsXG4gICAgICAyMTEsXG4gICAgICAxOTgsXG4gICAgICA0MCxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDI3LFxuICAgICAgOTEsXG4gICAgICA4NyxcbiAgICAgIDIwNixcbiAgICAgIDEyNSxcbiAgICAgIDgwLFxuICAgICAgMTAyLFxuICAgICAgNixcbiAgICAgIDM0LFxuICAgICAgMjAwLFxuICAgICAgMTM0LFxuICAgICAgMTgxLFxuICAgICAgMTU5LFxuICAgICAgNjMsXG4gICAgICAyMDUsXG4gICAgICAyMzYsXG4gICAgICAyNDEsXG4gICAgICAyOSxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkY1WTM1UkM5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ5OTUzNzg4OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDc1OTc2NjM2OTUwNzU6MjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSGVucnnwn6W68J+rtvCfkqbwn46a77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzZLd09JRUVKZThzN0lHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKaFZ4RGpONktnVHQ2QWVpK21QS2l3UEt6L29oYzN2K0NxMEhDMUM0b2dVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImF4TjB0T1F0ZG1CaTBvK2hscmZsOEhZd3Z4OEJscmJLbEFua3ZzZWRwOXBCMHB4aGJJclp0dmF6c0tGSzhvYXFObzFNaDBXTXVqVmxhdGY0OGlHOEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJkc0RqcmtJV0pmVERDdVp5UkZlL0VzdzYrWi9HZlg3bjE1dlFTLzFHc2ZrMDQ0Rm92ZWYzQmlOaUlUODB6T0dNRDVzbGJEeC9NQklWaHcwTFQyL0RnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDk5NTM3ODg6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MzEzNjI2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
