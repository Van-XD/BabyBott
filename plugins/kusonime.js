let fetch = require('node-fetch')
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.DATABASE._data.users[m.sender]
    if (!text) throw '_yg dicari apa_'
    await m.reply(global.wait)
  let res = await fetch(`http://zekais-api.herokuapp.com/kusonime?query=${text}&apikey=iPJYUQc9`)
let json= await res.json()
  const ardi =  `*judul:* "${json.title}"\n\n*info:* ${json.description}\n\n*genre:* ${json.genre}\n\n*link download:* ${json.result.list.url}`
     conn.sendFile(m.chat,json.thumb, 'image.jpg', ardi, m)
}
handler.help = ['kusonime <judul>']
handler.tags = ['anime']
handler.command = /^kusonime$/i
handler.group = false

module.exports = handler
