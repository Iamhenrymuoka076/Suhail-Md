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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_19_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDg3LFxuICAgICAgICA1MixcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDksXG4gICAgICAgIDg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDExNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDc5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc3LFxuICAgICAgICA3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5LFxuICAgICAgICA5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0dUhyNG9EUmNJa1ZoN0tIREVPK0pDS1NnZFEySXV2S2JlWUNoank0M09ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1VllqUWRFd1JjZTY4b0djcXF3RU5nXCIsXG4gIFwicGhvbmVJZFwiOiBcImVjNzIxNGQyLTAyZDctNDdiOC1hNTYwLTMzNTgxOTUwODBiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDM1LFxuICAgICAgMzcsXG4gICAgICA1NCxcbiAgICAgIDE4OCxcbiAgICAgIDcwLFxuICAgICAgMTA0LFxuICAgICAgMTYxLFxuICAgICAgMjMyLFxuICAgICAgMTE1LFxuICAgICAgMjM0LFxuICAgICAgMTIxLFxuICAgICAgMTkxLFxuICAgICAgMTgsXG4gICAgICAxMjAsXG4gICAgICAxNixcbiAgICAgIDQ0LFxuICAgICAgOTQsXG4gICAgICA4MixcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMTExLFxuICAgICAgOTgsXG4gICAgICA2MSxcbiAgICAgIDE5MixcbiAgICAgIDE3MCxcbiAgICAgIDk1LFxuICAgICAgOTcsXG4gICAgICAxNzgsXG4gICAgICA0MixcbiAgICAgIDUzLFxuICAgICAgMTg5LFxuICAgICAgMTc2LFxuICAgICAgMjA0LFxuICAgICAgMTA3LFxuICAgICAgMjEsXG4gICAgICA3LFxuICAgICAgMjE3LFxuICAgICAgMTY5LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5RzY1N1FTQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0OTk1Mzc4ODo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NTk3NjYzNjk1MDc1OjQ2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BxS3dPSUVFTTNCNExNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSmhWeERqTjZLZ1R0NkFlaSttUEtpd1BLei9vaGMzditDcTBIQzFDNG9nVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyWGt4MjRHR2RPSDNxcm14WVM5RUZza0hRZEdKUmNVMkNsd1pxRHVpdE56MGp4ZjlJMFVpMHBOZjBlVDJKb0JYYjZUY21zQldwSE5OYlgxMkw5aTFEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuR2Fjc2JJUUE1dXUzdSs2VE52OVBUYVY0TUx5VnFWYUlDTzhSQVBkYjRvUzNGVURRRGtYdHdGd2dCdUtUYm1Gb0V2MklBeG9WQzg0L3l4Z1d2dStpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ5OTUzNzg4OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTE0ODc1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUk1eFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTV4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieW5XNVA0OVlNc3FQNFlmdWJFeTlka2c2VTdIMmdoRkh4a3dNRS9mVERvST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjgwMzEyNjk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg5Nzc4NDQxMjVcIn0iCn0="  // PUT your SESSION_ID 


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
