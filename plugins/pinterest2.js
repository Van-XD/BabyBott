let fetch = require('node-fetch')
     let handler  = async (m, { conn, args, text }) => {
     if (!text) throw 'Cari Apa ?'
 if (text) m.reply('Searching.....')
    heum = await require('../lib/scraper').pinterest(text)
    json = await heum
    random = json.result[Math.floor(Math.random() * json.result.length)]
    if (json.result.length == 0) return conn.sendFile(m.chat, './src/error.png', 'error not found', 'ERROR 404 NOT FOUND', m)
    data = await fetch('https://api.zeks.me/api/pinimg?apikey=apivinz&q='+random).then(v => v.json())
   get = await conn.getFile(data.data.url)
   conn.sendMessage(m.chat, get.data, 'imageMessage', { quoted: m, mimetype: get.mime, caption: data.data.url })
}
handler.help = ['pinterest2 <query>']
handler.tags = ['internet']
handler.command = /^pinterest2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler