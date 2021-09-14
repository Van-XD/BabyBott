let handler = async m => m.reply(`
╭─「 Donasi 」
│ • TSEL :  [+6282337026312]
│ • DANA :  [+6282337026312]
│ • SAWERIA : [https://saweria.co/IvanSkyzk]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282337026312
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
