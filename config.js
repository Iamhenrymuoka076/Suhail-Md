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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_10_05_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICA3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5LFxuICAgICAgICA2NixcbiAgICAgICAgMjM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk5LFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDUxLFxuICAgICAgICAyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDg5LFxuICAgICAgICA1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIyLFxuICAgICAgICA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM3LFxuICAgICAgICA4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTksXG4gICAgICAgIDUyLFxuICAgICAgICA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImt1OUtUZmNVYXVid3BlMjJUVlRERTlrN0FUeVBZZER1T2I5UXlaS3FYUlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlBRGpIYUtwU2JXRy00dC0tMVFWX2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDgxNzliMDktZmY2ZS00MGVlLWJiMzAtNDZlNWExNjIwOTE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgOTUsXG4gICAgICA0NyxcbiAgICAgIDIyMCxcbiAgICAgIDE4OCxcbiAgICAgIDExOCxcbiAgICAgIDEzMSxcbiAgICAgIDI1MyxcbiAgICAgIDEwMyxcbiAgICAgIDUsXG4gICAgICA2MyxcbiAgICAgIDE0NSxcbiAgICAgIDExMSxcbiAgICAgIDE2MSxcbiAgICAgIDE5NCxcbiAgICAgIDE0MyxcbiAgICAgIDI0MyxcbiAgICAgIDE2OCxcbiAgICAgIDgxLFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDMwLFxuICAgICAgMTk3LFxuICAgICAgMTU0LFxuICAgICAgMjQxLFxuICAgICAgMTAzLFxuICAgICAgMTMxLFxuICAgICAgMTE5LFxuICAgICAgMTc5LFxuICAgICAgMjEzLFxuICAgICAgMzksXG4gICAgICA3OCxcbiAgICAgIDM1LFxuICAgICAgMjE0LFxuICAgICAgMTIyLFxuICAgICAgMTgxLFxuICAgICAgNzAsXG4gICAgICAyMjEsXG4gICAgICAzMCxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTRUs4TUZUVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0OTk1Mzc4ODoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NTk3NjYzNjk1MDc1OjI5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkhlbnJ58J+luvCfq7bwn5Km8J+Omu+4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ082S3dPSUVFUERUdExJR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSmhWeERqTjZLZ1R0NkFlaSttUEtpd1BLei9vaGMzditDcTBIQzFDNG9nVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVbHhjcngyNDJpRzd2d3Z6UnF5OGpEcVQ1WFdacmdJcWFCREw0cUxnRkxyQ0F5cjRqMGZ1WVo5eTMybFdIbVIvVURoYU1YZnFLblZhYWZEa0IySlREQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNVTNWL1Z1Zyt3aUhtZ1lyQ01yUDZBNTgzWUxCTjA0UnkvT2pkMDRITTdDQy9sbGVFVmZwTUxKYzRYMVF5dlRvengwNzM2Y1VKdkJjbTFFc0F1Zzlodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ5OTUzNzg4OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjMzMzA0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNCSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0JJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMk1Tcm1IbTQzdHRxMjNlc1h0d2wxeDgrc2pWSExIaEpVSnEvOHlVZ0xSYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjgwMzEyNjg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
