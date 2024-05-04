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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349117572263";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_53_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOSxcbiAgICAgICAgODMsXG4gICAgICAgIDQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MyxcbiAgICAgICAgNSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY4LFxuICAgICAgICA1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDgwLFxuICAgICAgICA0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOCxcbiAgICAgICAgNixcbiAgICAgICAgMTAwLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTExLFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDk5LFxuICAgICAgICA3NixcbiAgICAgICAgNjYsXG4gICAgICAgIDMyLFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICA1NCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc2LFxuICAgICAgICA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzLFxuICAgICAgICA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA2LFxuICAgICAgICAzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ1LFxuICAgICAgICA1LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5jNTRzTEdlVllDaW93TXVCQUZSSmlKdGhkSGdiK1lRN1BQZEdJTTJzWDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTExNzU3MjI2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDJCRUQ1Q0ZDRTZGNDgwMzZERDJBRTY0RUQ3RUE0NUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE0NzY5NjA0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTExNzU3MjI2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODNCNDdGRkEwNEU1MEYxNkIzQkRDMDkzMDE3NjA4QzBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE0NzY5NjA0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIko4dlBxZTBfU1RhUmJLN0hoV2VoVWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjE0NWI2NGMtYzZiYy00ZGY5LThjNjktYzY3NjkyMjM3MjhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgOCxcbiAgICAgIDIxMSxcbiAgICAgIDE5LFxuICAgICAgMixcbiAgICAgIDYsXG4gICAgICAyMzYsXG4gICAgICAxNjAsXG4gICAgICA0NCxcbiAgICAgIDI1MSxcbiAgICAgIDI0NixcbiAgICAgIDI1MyxcbiAgICAgIDM0LFxuICAgICAgMzgsXG4gICAgICAyOSxcbiAgICAgIDIyLFxuICAgICAgOSxcbiAgICAgIDE5NyxcbiAgICAgIDIxOCxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDE1LFxuICAgICAgMTc2LFxuICAgICAgNjUsXG4gICAgICAyMDAsXG4gICAgICA0NSxcbiAgICAgIDIwLFxuICAgICAgMzgsXG4gICAgICA4MixcbiAgICAgIDE4OCxcbiAgICAgIDExNixcbiAgICAgIDE3OCxcbiAgICAgIDI5LFxuICAgICAgMjIxLFxuICAgICAgMTIzLFxuICAgICAgOTMsXG4gICAgICA2MCxcbiAgICAgIDg1LFxuICAgICAgMzEsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYWk5WMlI4VlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNzU3MjI2MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2ODUyMjIxMDI5MTk0OToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkxpbCBGcmFuayBYXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2VKZ3NVSEVMeWQxYkVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3YS8ySERQUDQrWVRKSitsV3dHazhzMnBKVy8yVmo2dEdZeDcvWlpFUmc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNzRDVqV1VWTUdub2RNa3NJaFlLRVhoY2xFVzRKSzNjR3lUYkZnNVR6M3dkcFhBRWZaZjFJRGxCT1JpaFQ0UEplUHY4ZGUySTliUTZ1YnViamVBakRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImt2M24rNjFCK3lOOThhamZCWWdZMlFLTll3S203b0lQRFN3dXdsSGhhWlU3YTJ3VFJvajM2QnU1OG03SkdyN05VY0pEVzRzTDMrNHVWdUlqditiYmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTc1NzIyNjM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ3Njk1OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJZzNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlnMy5qc29uIjogIntcImtleURhdGFcIjpcIjBOcjd0WldWbGlVSXlubWtCR1FWdWJEUXBkOEV6algreCtEdjNNeWxyM3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAyMzc4NTcwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE0NzY5NjAyNDUzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = 

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Franky",
  ownername:process.env.OWNER_NAME|| "Franky


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
