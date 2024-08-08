const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["katakuri"];
global.OwnerNumber = ["27747815326"];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"kMY4QMainvbMeNOqgIhu6WEASVPSuNzMmphuJ8B/JUc="},"public":{"type":"Buffer","data":"JCUASXpHRXpasm/xjmyF0lgiThJskYrvXUL2vqsbzEY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"4HsCiyOxSxlwG5d6BCLw3o7inD8giPAj1xgmWc4VNEA="},"public":{"type":"Buffer","data":"10FuwA3TDKundl499EYrh5g0Hzu8cJ/skB5yzXb7NU4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"oHRZ0io3hwW+/ldPoDhIDeE/Wc+gURgcvFGx23qSS1U="},"public":{"type":"Buffer","data":"gIc6DKlu+0YagckgqxMw9Mqtp3Xn3uoPzs4S5osONEs="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"0AHpEUHDR+KqV11BrqMEgB3kPnyWOC/LN+x18HJLzHw="},"public":{"type":"Buffer","data":"eAbOeggKShBPLqjGD1MygJ806AdFgvniEWIWIBpQdC0="}},"signature":{"type":"Buffer","data":"CB9La9zueoa/Tzr8w67i3sBcdjDkpWbSC6roY/+zbaKacQmFn6oS2zuZRL4NCrPhNTXtsuRUZlxIP72jYPIYgg=="},"keyId":1},"registrationId":8,"advSecretKey":"WenG+f8cVXAMJMrQ0Ce/8sTdoBVRItZsoMFrKMtfk9c=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"fq9ycDMeRdSjPhr90RQlBA","phoneId":"695fed25-be20-4459-abc0-7ac1c4e3610c","identityId":{"type":"Buffer","data":"E5W/1brmiaHWbOhhJy0KhvfmEGs="},"registered":true,"backupToken":{"type":"Buffer","data":"tfRo0LVmCn6ZvqRKI7zqUeEdk8s="},"registration":{},"pairingCode":"6WXLZJZE","me":{"id":"27747815326:61@s.whatsapp.net"},"account":{"details":"CO+655ACENn41LUGGAUgACgA","accountSignatureKey":"A2hRwO4B91gf53FTBDzCmUeSxtZffxQU9vWibC42XG0=","accountSignature":"CEEMR6oOCo8aFhmWAm4SZ9JrKmyHOveH5uRyaZx/JUnYHX06hWERb6+phQ669JzSpSdnRP8vkoB6SAbFMK6eAA==","deviceSignature":"fXvNPkE7pCMj+QBI/lOKv9EcHnRU5aoNnV4/DveGrZFeqSBgxcnuCLM6vZr+dB+TOPK3j1zlQZVmbPeDakPghA=="},"signalIdentities":[{"identifier":{"name":"27747815326:61@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQNoUcDuAfdYH+dxUwQ8wplHksbWX38UFPb1omwuNlxt"}}],"platform":"android","lastAccountSyncTimestamp":1723153510}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
