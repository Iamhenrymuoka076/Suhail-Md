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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348156046767";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_50_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxODIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICA1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQwLFxuICAgICAgICA2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDIxLFxuICAgICAgICA4MixcbiAgICAgICAgMjM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYxLFxuICAgICAgICA1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMyLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzksXG4gICAgICAgIDcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgMTE0LFxuICAgICAgICA5NixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICA0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNmJCbHpQQW1IWVJwenNaQ0lSeG9na093aDNJYTVYQm1YNVhTNzBSS1Q3cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMGY5WVhhcHVSakdtUzFmdl92WTEzZ1wiLFxuICBcInBob25lSWRcIjogXCIyYTZjYTI4Ni02OWYxLTQyYzQtOGYxYS1jMTg3ZDNkMTQyNDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAxNjYsXG4gICAgICA4OSxcbiAgICAgIDkyLFxuICAgICAgNzcsXG4gICAgICAxODEsXG4gICAgICAxNDksXG4gICAgICAxNDEsXG4gICAgICA2NSxcbiAgICAgIDI0MSxcbiAgICAgIDEyMCxcbiAgICAgIDEwMSxcbiAgICAgIDIxMCxcbiAgICAgIDQ0LFxuICAgICAgMjEwLFxuICAgICAgMjI5LFxuICAgICAgODQsXG4gICAgICA2NyxcbiAgICAgIDc1LFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDE0NixcbiAgICAgIDE1MSxcbiAgICAgIDIwOCxcbiAgICAgIDkwLFxuICAgICAgMTQ0LFxuICAgICAgMTYsXG4gICAgICA0LFxuICAgICAgMTM1LFxuICAgICAgMTc1LFxuICAgICAgMTQ1LFxuICAgICAgNDMsXG4gICAgICA0NyxcbiAgICAgIDUzLFxuICAgICAgMTc5LFxuICAgICAgMjAsXG4gICAgICAxMDcsXG4gICAgICAxNjEsXG4gICAgICAyNDcsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlEzNEZXS0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNTYwNDY3Njc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc5NDgyNTY0OTI3NTkzOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHJxeDVJREVLVCs4Yk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwQm0wQnkrdzhqaytzUUJNY2s5ODhTckt5K0w1U0hwcWt0WUI2Y1NBQ2xZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImR0cFhSWEpwREZ0RlJBOXVWaCs3WE1kYndOVXhNTTJXT2UzS0FFS2hLYUJXT1YrTWsyRnYyNFh2RnYvRmpveHVwd2hITHVjYnovODRMU0ptRHBrZUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRNUk9mSHNTRWhlSHp0a0RRTzdBRmFrV0s1WjhjdUdGeDJLQmZPNkFHdVpLc2xENDhBblhFeGlhTVVVeEFiMDNFcXplOTIwQ3dxYVEwWlBRNUpZRWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNTYwNDY3Njc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NDM1MDQ4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = 

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Edges",
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
