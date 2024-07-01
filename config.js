const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongosh"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_38_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2LFxuICAgICAgICA2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA5NixcbiAgICAgICAgMTE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICA4LFxuICAgICAgICAxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQxLFxuICAgICAgICA5NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTExLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTU2VkZHFpOWNmZVVKa2xVMVRFeG9qN0ZpemtrSlR6bm9NZ1hPeTlrYzJjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJobHNTOTQ5WlFzaTVJVlE1VXJiRERRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk3NmM1YjhkLTQyMzMtNGFjZS04Nzk4LWI3ZTk3YjA5ZDBjYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAyMTgsXG4gICAgICAyMjAsXG4gICAgICAyMzAsXG4gICAgICAxOTEsXG4gICAgICA2OCxcbiAgICAgIDU5LFxuICAgICAgMTIxLFxuICAgICAgMTgwLFxuICAgICAgMTE4LFxuICAgICAgNDcsXG4gICAgICAyNDksXG4gICAgICAxNTQsXG4gICAgICA5LFxuICAgICAgMTg1LFxuICAgICAgMTIyLFxuICAgICAgMTcwLFxuICAgICAgMTk1LFxuICAgICAgMTE4LFxuICAgICAgMTk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDEyOSxcbiAgICAgIDI0NyxcbiAgICAgIDY4LFxuICAgICAgMTQsXG4gICAgICAxODAsXG4gICAgICAxMTMsXG4gICAgICA1MyxcbiAgICAgIDEyMSxcbiAgICAgIDE3NCxcbiAgICAgIDIyOCxcbiAgICAgIDEzOSxcbiAgICAgIDkzLFxuICAgICAgMjQwLFxuICAgICAgMjMwLFxuICAgICAgMTgzLFxuICAgICAgMTU0LFxuICAgICAgMTc3LFxuICAgICAgMTk1LFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkw0Q1A3Vko5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ5OTUzNzg4OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDc1OTc2NjM2OTUwNzU6NTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDZLd09JRUVPUERqTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKaFZ4RGpONktnVHQ2QWVpK21QS2l3UEt6L29oYzN2K0NxMEhDMUM0b2dVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9lei9ORlhlRnZKQ1E2ZjhqY2tobE5lcUMxL3Y4SWlJSmRKWFI2M3d5bHN4T1V1TThXTmU2a3pNTmQ0MlRYUDh1T3kzbTVScmQvdEtLMS9weXRuK0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIng4TWV2bDlQenZNd1crN0pHOWdRczNkVzRNdjFFeWlISFhreUVBTGJqenA4N3pCKzd5U0dYdkh3aWtmaFd6cHFKODVoejBvdDdjNFpQYUFQQ2V6UWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDk5NTM3ODg6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODY5OTI2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0ttXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLS20uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxZUlqb0JZQlVZc0wzS0EvTnJzZUZrWnJONUcrai9TWGVHbHhwMElNOStnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyODAzMTI3MDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = 

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©Henry²²Md" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
