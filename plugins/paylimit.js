let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah Uang yang akan diberi'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let money = poin
    let pjk = Math.ceil(poin * pajak)
    money += pjk
    if (money < 100) throw 'Minimal 100'
    let users = global.DATABASE._data.users
    if (money > users[m.sender].money) throw 'Uang tidak mencukupi untuk mentransfer'
    users[m.sender].money -= money
    users[who].money += poin

    m.reply(`(${-poin} Uang) + (${-pjk} Uang (Pajak 2%)) = ( ${-money} Uang)`)
    conn.fakeReply(m.chat, `+${poin} Uang`, who, m.text)
}
handler.help = ['paymoney @user <amount>']
handler.tags = ['rpg']
handler.command = /^paymoney$/
handler.rowner = false

module.exports = handler

