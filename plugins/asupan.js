let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await fetch(`https://leyscoders-api.herokuapp.com/api/asupan?apikey=MIMINGANZ`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'nulis', 'Asupannya Bang', m, false)
}
handler.help = ['asupan']
handler.tags = ['anime']
handler.command = /^asupan$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
