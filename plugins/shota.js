let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await fetch(`https://leyscoders-api.herokuapp.com/api/pinsearch?q=shota&apikey=MIMINGANZ`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'nulis', 'Nih Kak', m, false)
}
handler.help = ['shota']
handler.tags = ['anime']
handler.command = /^shota$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
