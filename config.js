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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254114099179,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID "SUHAIL_13_41_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY2LFxuICAgICAgICA4MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk2LFxuICAgICAgICA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDk2LFxuICAgICAgICAzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNqVFhtZkdJTjNZZ09aZ2JyaHBVcHoweVovVEZtTU5XWFhCYThjNmRUZXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0MTE0MDk5MTc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NzUwN0M0RkIzQUM4NENGMzBGRUM2NEIzRjQwMEMwNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg1NDUyNjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQxMTQwOTkxNzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIzRTYwNDY2NUVBNEE4Qjg2NjA2RUI3NkFENzFCMEE2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODU0NTI2NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDExNDA5OTE3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDI0Q0UzNEFDMUQ5NThENDVDOTJBMDBERkJCMDk4MEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NTQ1MjY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0MTE0MDk5MTc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGQjc3MDQ3QjI3ODg2ODA2N0MyMTk4MDk5OEQ2QkU1MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg1NDUyNjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiME5rRVpkSElTQzI2SEFYc2ZaQVoyUVwiLFxuICBcInBob25lSWRcIjogXCI1Yzk1NjY1YS0xYzk0LTQ0OGItODU5MS00ZTg2NTU0ZTQwMDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTIxLFxuICAgICAgNDIsXG4gICAgICAxODksXG4gICAgICAxOTUsXG4gICAgICA4LFxuICAgICAgMjI2LFxuICAgICAgMTQ3LFxuICAgICAgMTU4LFxuICAgICAgMjQyLFxuICAgICAgMTIxLFxuICAgICAgMTYxLFxuICAgICAgMjM3LFxuICAgICAgMzYsXG4gICAgICAxODIsXG4gICAgICAyNDUsXG4gICAgICAxNDMsXG4gICAgICA2NCxcbiAgICAgIDQ0LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDE1MyxcbiAgICAgIDEwNyxcbiAgICAgIDIzNyxcbiAgICAgIDEwNCxcbiAgICAgIDEzMixcbiAgICAgIDY5LFxuICAgICAgMjEyLFxuICAgICAgNTAsXG4gICAgICAxNDYsXG4gICAgICAyMjgsXG4gICAgICAxMixcbiAgICAgIDE1MSxcbiAgICAgIDExLFxuICAgICAgMTUzLFxuICAgICAgMjU0LFxuICAgICAgMzMsXG4gICAgICA5MyxcbiAgICAgIDE5OCxcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyQldHWDUzR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTE0MDk5MTc5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJdHpfZWRkaSAxNlwiLFxuICAgIFwibGlkXCI6IFwiMTIwMjg5NjM1NjU1NzEyOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVA5MHFZR0VPbld1N01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5eWhKNE11Q0NtK1AxU2FQWDBOYWtiUHBmQUpCL2tvWldGQUNGVFhMQ0g4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjh0UkJoNWR6cWwxR3NOMktpdStrWXNZQ2VNNmN2c2wrRHVzdUk1ZlhDSlJFVXB0VnNvblVZMHZXL3BMZ1pLeVRqN0NNb21zdDNPWVB3Wk9RSzEybkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlovR1RybW14b0Q3bi9URmNjN3VKallFbkNjeE1QOEZwWUlFNXg2L0ErRGd1bmJuNi9GblF4UnpSVzBjODdSSnZNTEpnQUlza3dqaVF4Z21Ua2ptWmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExNDA5OTE3OTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODU0NTI2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9CZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0JnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYUdsTTFDOHdVNGdBWjBnU2luZ0lob1FwcnRGdDN0QTloRHlObHY5VmRDWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjkxNjY0MDAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1NDUyNjM5MTRcIn0iCn0=" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
