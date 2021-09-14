let fs = require('fs')
let handler = async (m, { conn, isOwner }) => {
  let prem = Object entries(global.DATABASE._data.chats[m.chat].premium).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `┌〔 Daftar Pengguna Premium 〕` + `\n` + prem.map(v => isOwner ? '├ @' + v.replace(/@.+/, '') : '│ ' + conn.getName(v)).join`\n` + '\n└────', m, { contextInfo: { mentionedJid: prem } })
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(premlist)$/i

module.exports = handler
