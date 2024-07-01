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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348088965816";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_32_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMyLFxuICAgICAgICA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc3LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNixcbiAgICAgICAgMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxODksXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTczLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFDMUVCelJUMFU4UCtMSTJEK054R3d5a3dYeUhQTm5obmQyRlNzU3R3emc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhKaHBFSFlIUVJpbHQ5SzQ0TzJHdHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDUzMmRiNDktODJjOC00ZjM5LTgzMGEtZDUxYmE4YTBjMTJlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMCxcbiAgICAgIDE4LFxuICAgICAgMjA0LFxuICAgICAgMTc3LFxuICAgICAgMTE1LFxuICAgICAgMTM0LFxuICAgICAgMjA1LFxuICAgICAgMzcsXG4gICAgICA3NSxcbiAgICAgIDE3OSxcbiAgICAgIDc5LFxuICAgICAgMjAxLFxuICAgICAgOTksXG4gICAgICAzMixcbiAgICAgIDE4NSxcbiAgICAgIDU3LFxuICAgICAgMjAsXG4gICAgICA1NyxcbiAgICAgIDIzNyxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAxMjksXG4gICAgICAyMCxcbiAgICAgIDIzOSxcbiAgICAgIDc2LFxuICAgICAgMTkwLFxuICAgICAgNzgsXG4gICAgICAyMTcsXG4gICAgICAxNzYsXG4gICAgICA3MCxcbiAgICAgIDIyNSxcbiAgICAgIDQ2LFxuICAgICAgNjMsXG4gICAgICAyMzksXG4gICAgICAzOSxcbiAgICAgIDEzMCxcbiAgICAgIDE2NCxcbiAgICAgIDQ4LFxuICAgICAgMTQzLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFTV05HRkRWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDg4OTY1ODE2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MzU2ODM1MjYxNjU2Mjo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BPNytvOEZFTnJBakxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ0luY3A3dWJLZnhzOHMwWG9OTzQwN3IvU00wUlRQNmluQ0VKNFR2U09CND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCTStoTzdwYmRGZm52UWFkUWp5alNZV2d6M1BmWnQvK3MydFlmMDhVM1lzYUtZMkJ4NDN6djRmQzJvOFpoWEZIajQrT1RLOEFFZ3NTbHVlRVVaNjBpQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwc3RVeG4xWjhYbnhYTk9yZnpua25jNEJqR2JOSzhLS05hWWoyZEp2Ry94VWl5QTJIRmt6aVFiYXF3OXM1TVNiaXlVd0hRSllhbWc0NnV2QVo2WXBnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg4OTY1ODE2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4Njk1MzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = 

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©Henry²²Md" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "edges",
  ownername:process.env.OWNER_NAME|| "Edges


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
