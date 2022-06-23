/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
   * Recode By Faiz.
*/

require('./config')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessage, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime } = require('./lib/scraper')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const fake = '@𝙕𝙚𝙧𝙤𝙉𝙤𝘾𝙤𝙪𝙣𝙩𝙚𝙧'

// Quick Setting, untuk lengkap cek di config.js
ownerNumber = ["6285387059588@s.whatsapp.net"] // ganti ke no lu, jan apus @s.whatsapp.net nya?
modelmenu = 'gif' // model menu
apikeyy = 'sQMpXbHimbTkxGC' // free apikey dapuhy
testBanh = true // antilink gc setting

module.exports = hisoka = async (hisoka, m, chatUpdate) => {
    try {
  
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
		const type = Object.keys(m.message)[0] 
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const isCreator = [hisoka.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == hisoka.user.id ? true : false
        const text = args.join(" ")
        const q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    
	     
	    // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	    const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const groupMembers = m.isGroup ? groupMetadata.participants : ''
        // Bot Status
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
        
       hisoka.createMessage = async (jidnya, kontennya, optionnya) => {
            return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: hisoka.authState.creds.me.id,upload: hisoka.waUploadToServer})
            }
			
			
	
			
            
        const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return hisoka.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return hisoka.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "video"){
                return hisoka.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "audio"){
                return hisoka.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            } else {
                return hisoka.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }
        const reply = (teks) => {
            hisoka.sendMessage(from, teks, text, {quoted:m})
        }
// troli arsky
		const troli = {
                         "key": {
                         "remoteJid": "status@broadcast", 
                         "participant": '0@s.whatsapp.net'
                    }, 
                         "message": {
                         "orderMessage": {
                         "itemCount": 99999, 
                         "status": 200, 
                         
                         "surface": 200, 
                         "message": `${botName} - NC`, 
                         "orderTitle": 'ZeroNC', 
                         "sellerJid": '0@s.whatsapp.net'
                    } 
                          } 
                              } 
							  
							  
							  const peksaya = {
                         "key": {
                         "remoteJid": "6288222079999-1633244783@g.us", 
                         "participant": '6285793887010@s.whatsapp.net'
                    }, 
                         "message": {
                         "orderMessage": {
                         "itemCount": 2021, 
                         "status": 200, 
                         
                         "surface": 200, 
                         "message": `${botName} - NC`, 
                         "orderTitle": 'ZeroNC', 
                         "sellerJid": '6285793887010@s.whatsapp.net'
                    } 
                          } 
                              } 
							  
		    hisoka.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
            let mime = (message).mimetype || ''
            let messageType = mime.split('/')[0]
            let extension = mime.split('/')[1]
            trueFileName = attachExtension ? (filename + '.' + extension) : filename
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
            }
            // save to file
            await fs.writeFileSync(trueFileName, buffer)
            return trueFileName
           }
		
        //SendButton5
        const sendButton5 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "Youtube Owner",
              "url": "https://youtube.com/channel/UCv8uiDsExEyVqdurq30gXmg"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
              "id": `${prefix}owner`
            }
          }
        ]
      }
    }
  }, {})
hisoka.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}
// menu
// textMenu
// anuny

anuy = `❏「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」❏

╾ _Name Bot : Zero bot_
╾ _Name Owner : ZeroNC_
╾ _Name Author : ZeroNC_
╾ _Contact Owner : wa.me/6285387059588_
╾ _Reggion Owner : Indonesian_


╔══❒𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐❒═╗
╠❐  ${prefix}linkgroup
╠❐  ${prefix}hidetag [teks]
╠❐  ${prefix}add [tag]
╠❐  ${prefix}kick [tag]
╠❐  ${prefix}promote [tag]
╠❐  ${prefix}demote [tag]
╚═══════════════╝

╔══❒𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙈𝙀𝙉𝙐❒═╗
╠❐ ${prefix}ytmp3 [link]
╠❐ ${prefix}ytmp4 [link]
╠❐ ${prefix}play [query]
╚════════════════╝

╔══❒𝙎𝙀𝘼𝙍𝘾𝙃 𝙈𝙀𝙉𝙐❒═╗
╠❐ ${prefix}pinterest
╠❐ ${prefix}wallpaper
╠❐ ${prefix}wikimedia
╠❐ ${prefix}lirik [query]
╠❐ ${prefix}tr [query]
╠❐ ${prefix}gimg [query]
╚═══════════════╝

╔══❒𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐❒═╗
╠❐ ${prefix}quotesanime
╠❐ ${prefix}loli
╠❐ ${prefix}neko
╠❐ ${prefix}waifu
╠❐ ${prefix}shinobu
╠❐ ${prefix}megumin
╠❐ ${prefix}bully
╠❐ ${prefix}cuddle
╠❐ ${prefix}cry
╠❐ ${prefix}hug
╠❐ ${prefix}awoo
╠❐ ${prefix}kiss
╠❐ ${prefix}lick
╠❐ ${prefix}pat
╠❐ ${prefix}bonk
╠❐ ${prefix}smug
╠❐ ${prefix}blush
╠❐ ${prefix}yeet
╠❐ ${prefix}smile
╠❐ ${prefix}wave
╠❐ ${prefix}highfive
╠❐ ${prefix}handhold
╠❐ ${prefix}nom
╠❐ ${prefix}bite
╠❐ ${prefix}glomp
╠❐ ${prefix}slap
╠❐ ${prefix}kill
╠❐ ${prefix}happy
╠❐ ${prefix}wink
╠❐ ${prefix}poke
╠❐ ${prefix}dance
╠❐ ${prefix}cringe
╠❐ ${prefix}hilih [query]
╚═══════════════╝

╔══❒𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐❒═╗
╠❐ ${prefix}ping
╠❐ ${prefix}owner
╠❐ ${prefix}menu
╠❐ ${prefix}delete
╠❐ ${prefix}sticker
╠❐ ${prefix}sgif
╠❐ ${prefix}tomp4
╠❐ ${prefix}tourl
╚═══════════════╝

╔══❒𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐❒═╗
╠❐ ${prefix}chat [option]
╠❐ ${prefix}public
╠❐ ${prefix}self
╠❐ ${prefix}setmenu
╠❐ ${prefix}setppbot
╚═══════════════╝
`

        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        switch(command) {
       case 'menu':
       case 'help':

       if (modelmenu == 'gif') {
       await sendButton5(from, anuy, fake, await hisoka.createMessage(from, {video: {url: "./lib/hisokam.mp4", caption: anuy}, gifPlayback: true, gifAttribution: "GIPHY"}))
       } 

       else if (modelmenu == 'image') 

       {
       await sendButton5(from, anuy, fake, await hisoka.createMessage(from, {image: {url: "./lib/hisoka.jpg", caption: anuy}}))
       }
       break
	   
	   case 'tr': {
		   if (!q) return m.reply('Masukan QUERY!!')
			   Tr = await fetchJson(`https://wanz-apik.herokuapp.com/api/other/translate?kata=${q}&apikey=WanzBotz`)
		   dijasjusin = `TRANSLATE Dari ${Tr.result.from} ke ${Tr.result.to}
		   Hasil : ${Tr.result.text}
		   Typo : ${Tr.result.typo}`
		   
		   hisoka.sendMessage(m.chat, {text: dijasjusin}, {quoted: troli})
		   break
	   }
	   
	case 'setantilink':{
		if (!q) return m.reply('masukan pilihan! on/off')
		    	if (!isGroup) return
if (!isGroupAdmins) return m.reply(mess.admin)

if (q == 'on') tesBanh = true
if (q == 'off') testBanh = false
m.reply('sukses ganti antilink ke ${q}!')
else {
                            m.reply(`Masukan opts :\n⭔on\n⭔ioff`)
                            }
break
}
	
	   case 'ytmp3':{
		   if (!q) return m.reply('Masukan Link Yt')
			   if (!isUrl) return
		  yt = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytmp3?url=${q}&apikey=sQMpXbHimbTkxGC`)
		  jasjus = `YTMP3 DOWNLOADER\nTitle : ${yt.result.title}\nSize : ${yt.result.size}\nDesc : ${yt.result.desc}\nQuality : ${yt.result.quality}\n\n*Mohon tunggu.. kurang lebih 1 menit*`
		  hisoka.sendMessage(m.chat, {text: jasjus}, {quoted: m})
		  sendFileFromUrl(m.chat, yt.result.url, m)
		  break
	   }
	   
	   case 'ytmp4':{
		   if (!q) return m.reply('Masukan Link Yt')
			   if (!isUrl) return
		  yt = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytmp4?url=${q}&apikey=${apikeyy}`)
		  		  jasjus = `YTMP4 DOWNLOADER\nTitle : ${yt.result.title}\nSize : ${yt.result.size}\nDesc : ${yt.result.desc}\nQuality : ${yt.result.quality}\n\n*Mohon tunggu.. kurang lebih 1 menit*`
		  hisoka.sendMessage(m.chat, {text: jasjus}, {quoted: m})
		  sendFileFromUrl(m.chat, yt.result.url, m)
		  break
	   }
	
	  case 'kbbi':
	  if (!q) return m.reply(`Masukan query! Contoh : ${prefix + command} pohon`)
		  bi = await fetchJson(`https://human-apixyz.herokuapp.com/api/info/kbbi?kata=${q}&apikey=AnggaKey`)
	  biba = `KBBI RESULT\n\nLema : ${bi.result.lema}\nArti : ${bi.result.arti}`
	  hisoka.sendMessage(m.chat, {text: biba}, {quoted: m})
	  break
	
	  
case 'hidetag':
                if (!isGroup) return m.reply(mess.group)
                hisoka.sendMessage(from, { text : q ? q : '' , mentions: groupMembers.map(a => a.id)})
            break
	   
	   case 'play':{
		   if (!q) return m.reply('Masukan Judul')
			   
		  yt = await fetchJson(`https://human-apixyz.herokuapp.com/api/yt/playmp3?query=${q}&apikey=AnggaKey`)
		  djasjus = `*PLAY MUSIC*\nTitle : ${yt.title}\nviews : ${yt.views}\nQuality : \n\n*Mohon tunggu.. kurang lebih 1 menit*`
		  hisoka.sendMessage(m.chat, {text: djasjus}, {quoted: m})
		  sendFileFromUrl(m.chat, yt.url, m)
		  break
	   }

                            case 'setmenu':
                            if (!q) return m.reply(`Masukan opts :\n⭔gif\n⭔image`)
                            if (q == "gif") {
                            modelmenu = "gif"
                            m.reply("Done change menu to "+q)
                            } 

                            else if (q == "image") {
                          modelmenu = "image"
                            m.reply("Done change menu to "+q)
                            } 

                            else {
                            m.reply(`Masukan opts :\n⭔gif\n⭔image`)
                            }
                            break
	    case 'sc': case 'script': {
	    m.reply('Private😼')
            }
            break
            case 'dek': case 'deck': case 'decks': case 'deckk': case 'dekk': case 'deks': {
                m.reply('Iyaa Kakk?? >.<')
            }
            break
                        case 'anj': case 'anjg': case 'babi': case 'kontol': case 'konto': case 'kntl': case 'mmk': case 'memk': case 'memek': case 'ngentod': case 'ngntd': case 'kntd': case 'ngntod': case 'bajingan': case 'bangsad': case 'bangsat': case 'bngsd': case 'bngst': case 'bgsd': case 'bgst': case 'yatim': case 'piatu': case 'ytim': case 'ytm': case 'tolol': case 'tll': case 'tohlol': case 'tollol': {
                m.reply('Jaga Perkataannya Kak <3')
            }
            break
     

			   
			   
			   
			   
    
               case 'sticker': case 's': case 'stickergif': case 'sgif': {
		if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
		
                if (/image/.test(mime)) {
		    let media = await quoted.download()
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
		    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
		    let media = await quoted.download()
		    let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else {
              throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
        	}
	    }
	    break
	    case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	    case 'tourl': {
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
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
			
			
			
            case 'chat': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
			
            break
			
			case 'hilih': {
				if (!q) return reply ('masukan query')
					dijasjus = await fetchJson(`https://wanz-apik.herokuapp.com/api/other/hilih?kata=${q}&apikey=WanzBotz`)
				hisoka.sendMessage(m.chat, {text: dijasjus.result.result}, {quoted: m})
				break
			}
			
			
				   
			 
	    case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: troli})
                    fs.unlinkSync(ran)
                })
            }
            break
			
			
			
			
			
			
			case 'gimg':{
				if (!q) return m.reply('masukan query!')
					m.reply(`searching google img for ${q}`)
					G = await fetchJson(`https://api.dapuhy.ga/api/search/googleimage?query=${q}&apikey=${apikeyy}`)
				hisoka.sendMessage(m.chat, { image: { url: G.image }, caption: `Hasil Dari ${q}` }, {quoted: m})
				.catch((err) => {
                    for (let x of ownerNumber) {
                        reply(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                   m.reply(`Maaf, tidak ada hasil google untuk ${q}`)
			})
				break
				
			}
            case 'pinterest': {
                m.reply(mess.wait)
                anu = await pinterest(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: troli })
            }
            break
            case 'wallpaper': {
                m.reply(mess.wait)
                anu = await wallpaper(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Media Url : ${result.image}` }, { quoted: troli })
            }
break
			 case 'lirik':
				   if (!q) return reply('masukan nama lagu!')
					   m.reply('mencari lirik...')
				   var Lirik = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/liriklagu?query=${q}&apikey=sQMpXbHimbTkxGC`)
hisoka.sendMessage(from, {text: Lirik.result}, {quoted: m})
break
            case 'wikimedia': {
                m.reply(mess.wait)
                anu = wikimedia(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}` }, { quoted: troli })
            }
            break
            case 'porno': case 'porn': case 'bokep': {
 m.reply('🤨📷')
			}
            break
            case 'hentai': {
                m.reply('🤨📷')
				/*
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: troli })
          */
		  }
            break
            case 'quotesanime': case 'quoteanime': {
                m.reply(mess.wait)
                anu = await quotesAnime()
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { text: `~_${result.quotes}\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}` })
            }
            break
            case 'public': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                hisoka.public = true
                m.reply('*_Succes Change To Public - Mode_*')
            }
            break
            case 'self': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                hisoka.public = false
                m.reply('*_Succes Change To Self - Mode_*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;${ownerName};;;'
                    + 'FN:${ownerName}\n' // full name
                    + 'ORG:Owner - ${ownerName};\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=${ownerNumber}:${ownerForOwnerCommand}\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                hisoka.sendMessage(m.chat, { contacts: { displayName: 'Owner - Faiz', contacts: [{ vcard }] } }, { quoted: troli })
            }
            break
			case 'kick': {
				 if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove')
				m.reply(`Sukses kick ${users}`)
				}
				break
			case 'add': {
				 if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.groupParticipantsUpdate(m.chat, [users], 'add')
				m.reply(`sukses add ${users}`)
				
				}
				break
			case 'promote': {
				  if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote')
				m.reply('sukses promote!')
				}
				break
			case 'demote': {
				 if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote')
				m.reply('sukses demote!')
				}
				break
				
            case 'eval': {
                if (!isCreator) return m.reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break
			case 'malingpp': {
         if (!m.quoted) return m.reply('Balas target yg ingin di maling pp nya!')
        anu = await hisoka.profilePictureUrl(m.quoted.sender, 'image')
        hisoka.sendMessage(from, { image: { url: anu, caption: 'Maling pp', quoted: troli}})
       }
break
			
           case 'loli': 
           case 'neko': 
              await m.reply(('Loading..'))
              let loli = await fetchJson(`https://api.waifu.pics/sfw/neko`)
              await sendFileFromUrl(from,loli.url,`Ni ${pushname} ${command} nya`,m)
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command} Error: \n\n` + err)
                    }
                    m.reply('Sedang Error !! Coba Beberapa Saat Lagi'())
                })
		break
          case 'waifu': 
          case 'shinobu': 
          case 'megumin': 
          case 'bully': 
          case 'cuddle': 
          case 'cry': 
          case 'hug': 
          case 'awoo': 
          case 'kiss': 
          case 'lick': 
          case 'pat': 
          case 'smug': 
          case 'bonk': 
          case 'yeet': 
          case 'blush': 
          case 'smile': 
          case 'wave': 
          case 'highfive': 
          case 'handhold': 
          case 'nom': 
          case 'bite': 
          case 'glomp': 
          case 'slap': 
          case 'kill': 
          case 'happy': 
          case 'wink': 
          case 'poke': 
          case 'dance': 
          case 'cringe': 
              await m.reply('Loading..')
              let waifu = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
                await sendFileFromUrl(from,waifu.url,`Done`,m)
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${prefix+command} Error: \n\n` + err)
                    }
                    m.reply('Sedang Error !! Coba Beberapa Saat Lagi')
                })
		break
                            
                  
            /*case 'tes': case 'menu': case 'help': case '?': {
                anu = `
┌──⭓ *Group Menu*
│
╠❐ ${prefix}linkgroup
│
╚═══════════════╝

╔══❒𝙎𝙀𝘼𝙍𝘾𝙃 𝙈𝙀𝙉𝙐❒═╗
│
╠❐ ${prefix}pinterest
╠❐ ${prefix}wallpaper
╠❐ ${prefix}wikimedia
│
╚═══════════════╝

╔══❒𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐❒═╗
│
╠❐ ${prefix}porno
╠❐ ${prefix}hentai
╠❐ ${prefix}quotesanime
│
╚═══════════════╝

╔══❒𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐❒═╗
│
╠❐ ${prefix}ping
╠❐ ${prefix}owner
╠❐ ${prefix}menu
╠❐ ${prefix}delete
│
╚═══════════════╝

╔══❒𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐❒═╗
│
╠❐ ${prefix}chat [option]
│
╚═══════════════╝
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/hisokam.mp4') }, { upload: hisoka.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
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
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break*/
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator && !m.key.fromMe) return
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator && !m.key.fromMe) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator && !m.key.fromMe) return
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
      if (budy.includes('https://chat.whatsapp.com/')) {
      	if (tesBanh == false) return
      	if (!isGroup) return
if (isGroupAdmins) return reply('Can't get grub admin out')
hisoka.sendMessage(m.chat, {text: 'Sorry, you sent the grub link you will be kicked'}, {quoted: troli})
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
await hisoka.groupParticipantsUpdate(m.chat, [kic], 'remove')
	  }	  

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`File ${__filename} terdeteksi terupdate!`))
	delete require.cache[file]
	require(file)
})
