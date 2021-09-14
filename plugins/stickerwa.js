let fetch = require('node-fetch')
let { Presence } = require('@adiwajshing/baileys')
let { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text }) => {
   if (!text) throw 'Masukan pencarian, Contoh *#stickerwa pentol*'
 
  let res = await fetch(`https://xteam.xyz/sticker/stickerly?q=${text}&APIKEY=HIRO`)
  let json = await res.json()
  for (let i of json.result.stickerlist) {
conn.sendMessage(m.chat, await sticker(false, i, packname, author), 'stickerMessage', { quoted: m })
}
}
handler.help = ['stickerwa'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^stickerwa|stikerwa$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true

module.exports = handler