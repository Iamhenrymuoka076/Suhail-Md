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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_51_05_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgxLFxuICAgICAgICA4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAzLFxuICAgICAgICAzNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzLFxuICAgICAgICA4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAzLFxuICAgICAgICAyMSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMixcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMCxcbiAgICAgICAgODIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoOFkvNndPbXJBVlluQmlhT1F4SHA1VElPQnZDWDJTQ1hTQ3lPZ2p3U2lVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0Y2RPZkNsQVF2V0Flek00RDRLWThRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg0ODMzYjdjLWVkODItNDUxNS05MjBjLTYyMGU4OWRiMDRlY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAxMzQsXG4gICAgICA3NSxcbiAgICAgIDE4NCxcbiAgICAgIDIxMCxcbiAgICAgIDIyOCxcbiAgICAgIDU4LFxuICAgICAgMTA1LFxuICAgICAgODEsXG4gICAgICA3NyxcbiAgICAgIDUwLFxuICAgICAgMTk1LFxuICAgICAgMTYwLFxuICAgICAgNTYsXG4gICAgICAzMSxcbiAgICAgIDY5LFxuICAgICAgMjUwLFxuICAgICAgMjE0LFxuICAgICAgMjM1LFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgNjAsXG4gICAgICA4LFxuICAgICAgMzAsXG4gICAgICAyMTIsXG4gICAgICA0LFxuICAgICAgMjA0LFxuICAgICAgNjgsXG4gICAgICAwLFxuICAgICAgODcsXG4gICAgICAxMTIsXG4gICAgICAxMTQsXG4gICAgICAzLFxuICAgICAgMTU5LFxuICAgICAgNjUsXG4gICAgICA0NixcbiAgICAgIDYwLFxuICAgICAgMjQsXG4gICAgICA3OCxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhaQzE3NkJNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ5OTUzNzg4OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDc1OTc2NjM2OTUwNzU6MjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRGJhZ2d58J+luvCfq7bwn5Km8J+Omu+4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ082S3dPSUVFTkdibXJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSmhWeERqTjZLZ1R0NkFlaSttUEtpd1BLei9vaGMzditDcTBIQzFDNG9nVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCWUJUNndOb0R2MDM5LzhMOWRQWTVPMStLdm5HVG4rUUEvdzBUWGZoUHU4U3ZoNzh6Vi92REJ6SDdiblBNV2VxT3NFcURUNnBOdWxLTStyVlZrQzVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLdThJME92ZndqTjVGQ1JiQWJkRlBEaG90THZtWmNldU0vSGJibEhHQ1huK1J3Mm00cGhFWDBwcktWQUpKV3ZFc2RNWTFSeDhSR3k3SzRQL1ZUR0RBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ5OTUzNzg4OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTg5OTg2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNCSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0JILmpzb24iOiAie1wia2V5RGF0YVwiOlwidld5MTkweWlZL2R3TS9HZ1FoN0h1cVl2dTBpK3Q4elZ0ek40YmFpSXFIYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjgwMzEyNjg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
