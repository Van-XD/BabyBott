let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'dark joke',m)
}
handler.help = ['darkjokes']
handler.tags = ['image']
handler.command = /^(dragjoles|darkjokes)$/i

module.exports = handler
