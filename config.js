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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_33_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NixcbiAgICAgICAgMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEzLFxuICAgICAgICAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTExLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAwLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMwLFxuICAgICAgICA3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzLFxuICAgICAgICAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTczLFxuICAgICAgICA2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCOVp5V01YU094d2tMbkVXQlZTaDhjeVdmV0VlRVZHUkRwSzc4eER0VHdnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiUW9EY0Y2dFNRcWw2MWh3UUNQUmp3XCIsXG4gIFwicGhvbmVJZFwiOiBcImUzYmU0YzcyLTg3YmYtNDVlNC1hODg0LWNmOGI3ZjE5NDAwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICA5MSxcbiAgICAgIDE1NSxcbiAgICAgIDE3NSxcbiAgICAgIDEyNixcbiAgICAgIDIzNixcbiAgICAgIDIxMyxcbiAgICAgIDEwMyxcbiAgICAgIDIxOCxcbiAgICAgIDIwLFxuICAgICAgMTE0LFxuICAgICAgNzEsXG4gICAgICAxMTAsXG4gICAgICAyMTcsXG4gICAgICAzMyxcbiAgICAgIDIyNSxcbiAgICAgIDEzMyxcbiAgICAgIDIwNCxcbiAgICAgIDg1LFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDEzMyxcbiAgICAgIDMyLFxuICAgICAgMzYsXG4gICAgICAxNjMsXG4gICAgICAyMCxcbiAgICAgIDc0LFxuICAgICAgMTIzLFxuICAgICAgMTQ0LFxuICAgICAgMTEzLFxuICAgICAgODYsXG4gICAgICA2LFxuICAgICAgMyxcbiAgICAgIDE3NyxcbiAgICAgIDIzOCxcbiAgICAgIDI0MixcbiAgICAgIDE1OSxcbiAgICAgIDEyNSxcbiAgICAgIDUwLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVkxUEZFMzdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExNDA5OTE3OTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjAyODk2MzU2NTU3MTI6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPVHg1WnNDRU0zb3RyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlF3bjVMQkM2REhLcUJVMS9iNk5XQlJQakNrYlcyVHI5WkRhaS9kdEJ0Vjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOWhsSFlaU3dPcFBPNW1QTXhBMER4WEVwdmZkYndzQWlBVk9NelVQS1dPVGUvZy9lVWx5R1h4ck11aFVzSDZEL2wvNERYcDNNOVhBYU1OTGRDZHBkQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieVA4NGN3dWtTdWYwQW9IVEREamxETkpsbDluaDNxYTFNeWE1ZmhNVXhZbjUvMXdvMkp1OVMvSzJoQ3hKWjdxNG1uSEh6SFJsVmhwOUdOM3l3bVBPQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTE0MDk5MTc5OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQ2NTYxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUl4VFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXhULmpzb24iOiAie1wia2V5RGF0YVwiOlwiSVBuUmpZUVYyODYyWlJGUERDS0t2eldTRnRTWWpvdFN2TmdEUVl4c2REbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTUxNjMzNjMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg0NjQ5MTU4MTNcIn0iCn0="  // PUT your SESSION_ID 


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
