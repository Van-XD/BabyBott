let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await fetch(`https://api.xteam.xyz/randomimage/bts?APIKEY=HIRO`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'nulis', 'Nih Kak', m, false)
}
handler.help = ['bts']
handler.tags = ['image']
handler.command = /^bts$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
