let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama Nabi nya', m)

	axios.get(`https://leyscoders-api.herokuapp.com/api/nabi?q=${text}&apikey=MIMINGANZ`).then ((res) => {
	 	let hasil = `*NAMA NABI*			: ${text}\n*TEMPAT LAHIR*		: ${res.data.result.tempat}\n*TAHUN KELAHIRAN*	: ${res.data.result.lahir}\n*UMUR*				: ${res.data.result.umur}\n*KISAH*				: ${res.data.result.kisah}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['kisahnabi'].map(v => v + ' <nama nabi>')
handler.tags = ['islam']
handler.command = /^(kisahnabi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
