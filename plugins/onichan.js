let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let loli = fs.readFileSync('./src/loli.mp3') 
conn.sendMessage(m.chat, loli, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(onichan|(T|t)idur)$/i
handler.command = new RegExp

module.exports = handler
