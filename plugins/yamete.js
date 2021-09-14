let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let yamete = fs.readFileSync('./src/yamete.mp3') 
conn.sendMessage(m.chat, yamete, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(yamete|yamete kudasai|yametekudasai)?$/i
handler.command = new RegExp

module.exports = handler
