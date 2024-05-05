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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_47_05_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDUzLFxuICAgICAgICA2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDc1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDkwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgMTM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDExLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkwrdnlpNjhxZXZJWUJBSE5TSHQvZDlzS0Z4L1hQQ2hZdDJhVGx4T3JLUXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRacktoeVFvUjZHc21zeWh3b1h2MXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGQ0M2JkZTEtNmU5My00YjcxLTg1YWEtZmY0MGRiMWNiMmFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDg0LFxuICAgICAgMyxcbiAgICAgIDE3NCxcbiAgICAgIDE5NSxcbiAgICAgIDI4LFxuICAgICAgMjI1LFxuICAgICAgMjE0LFxuICAgICAgMjMwLFxuICAgICAgMjI4LFxuICAgICAgMTU1LFxuICAgICAgMzIsXG4gICAgICAzMyxcbiAgICAgIDU1LFxuICAgICAgMjQ0LFxuICAgICAgMzIsXG4gICAgICAyNDgsXG4gICAgICA5MCxcbiAgICAgIDMwLFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDQsXG4gICAgICAxNzMsXG4gICAgICAyMDcsXG4gICAgICAxNzQsXG4gICAgICAyMjYsXG4gICAgICAxMzQsXG4gICAgICAxNTcsXG4gICAgICAyNCxcbiAgICAgIDE0LFxuICAgICAgMjI3LFxuICAgICAgMTcsXG4gICAgICAxNTUsXG4gICAgICAyNTEsXG4gICAgICAxOSxcbiAgICAgIDIxMyxcbiAgICAgIDEsXG4gICAgICA2MSxcbiAgICAgIDI0OCxcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGTkM4SEhOR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0OTk1Mzc4ODoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NTk3NjYzNjk1MDc1OjI0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkhlbnJ58J+luvCfq7bwn5Km8J+Omu+4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pxM3hlTUNFS3lvMzdFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQmxnaFFPVmNtVTBDV0tReVFnY1NKTzgrUDFEOG8zbU96UDByd3B2MGdCUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXS1BGU05JUTJ2eGNhcTNqQVU2aWcxbjU1WURhT0t0Q1dLTWJNVzJ6ZWlKdVU4NXpKVWR3UmtwUlkvMmRydCttUnhqY1B2eVozMExjWTJpdUFYOTNBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLdjE0Q0xJYmtjYUtzTWZnSGNmd3p0anVjQWFsUmgrUzF6WDFXS3AzdHhvb0dCUnZMRDAvbnZLTUVLb0tLS0ZoalQwdjNpVTEvVzE3eE9MeWF3dzFEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ5OTUzNzg4OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0OTM0ODMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXQ1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJdDUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKQWF0UWRFcXFDY2tnR3g4ZkJXK2JzVlFCVzR5Y1JZSmN3VW50Tmc3YzhvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc0NTYyNjUxNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
