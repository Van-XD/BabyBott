let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let wibu = fs.readFileSync('./src/wibu.mp3') 
conn.sendMessage(m.chat, wibu, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^((W|w)ibu|(H|h)(e|i)h wibu|(W|w)ibu lo)?$/i
handler.command = new RegExp

module.exports = handler
