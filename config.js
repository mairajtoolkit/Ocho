require("./lib/module")

// SETTING KONTAK
global.owner = "923042812340"
global.ownername = "︎~Alwayskayzen︎"
global.nomorbot = "923042812340"
global.namaCreator = "~Alwayskayzen︎︎"
global.Dec = "Ochobot"
global.autoJoin = false
global.antilink = false

// THUMBNAIL (BEBAS GANTI)
global.imageurl = 'https://files.catbox.moe/5z06fo.jpg'
global.channel = 'https://whatsapp.com/channel/0029Vb1H3Qe7DAWzt4HAEQ45'

// STICKER
global.packname = "Ochoboot"
global.author = "꧁•༆Alwayskayzen🔥࿇꧂"
global.jumlah = "5"


















// RESPON BOT
global.onlyprem = `\`[ # ] 𝙾𝙲𝙷𝙾𝙾𝙱𝙾𝚃\` \n𝙱𝙴𝙻𝙸 𝙿𝚁𝙴𝙼 𝙳𝚄𝙻𝚄 𝚂𝙾𝙽𝙾 𝚂𝙰𝙼𝙰 𝙺𝙰𝚈𝚉𝙴𝙽`
global.onlyown = `\`[ # ] 𝙾𝙲𝙷𝙾𝙾𝙱𝙾𝚃\` \n𝙺𝙷𝚄𝚂𝚄𝚂 𝙺𝙰𝚈𝚉𝙴𝙽 𝙱𝙾𝙳𝙾𝙷`
global.onlygroup = `\`[ # ] 𝙾𝙲𝙷𝙾𝙾𝙱𝙾𝚃\` \n𝙺𝙷𝚄𝚂𝚄𝚂 𝙶𝚁𝚄𝙱 𝙱𝙾𝙳𝙾𝙷`
global.onlyadmin = `\`[ # ] 𝙾𝙲𝙷𝙾𝙾𝙱𝙾𝚃\` \n𝙺𝙷𝚄𝚂𝚄𝚂 𝙰𝙳𝙼𝙸𝙽 𝙱𝙴𝙶𝙾`
global.notext = `\`[ # ] 𝙾𝙲𝙷𝙾𝙾𝙱𝙾𝚃\` \n𝙺𝙴𝚃𝙸𝙺 𝚈𝙰𝙽𝙶 𝙱𝙴𝙽𝙴𝚁 𝙽𝙶𝙰𝙿𝙰 𝙳𝙰𝙷?`
global.noadmin = `\`[ # ] 𝙾𝙲𝙷𝙾𝙾𝙱𝙾𝚃\` \n*𝙹𝙰𝙳𝙸𝙺𝙰𝙽 𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽 𝙳𝚄𝙻𝚄 𝚂𝙰𝚈𝙰𝙽𝙶`
global.succes = `\`[ # ] 𝙾𝙲𝙷𝙾𝙾𝙱𝙾𝚃\` \n𝚂𝚄𝙲𝙲𝙴𝚂 𝚈𝙰 𝙶𝙰𝙽𝚃𝙴𝙽𝙶`
global.invalid = `\`[ # ] 𝙾𝙲𝙷𝙾𝙾𝙱𝙾𝚃\` \n𝙺𝙴𝚃𝙸𝙺 𝙽𝙾𝙼𝙾𝚁 𝚈𝙰𝙽𝙶 𝙱𝙴𝙽𝙴𝚁 𝙰𝙽𝙹`
global.bugrespon = `\`[ # ] 𝙾𝙲𝙷𝙾𝙾𝙱𝙾𝚃\` \n𝚂𝚄𝙲𝙲𝙴𝚂 𝚂𝙴𝙽𝙳𝙸𝙽𝙶 𝙱𝚄𝙶 𝙼𝙴𝙺 𝙺𝙾𝚁𝙱𝙰𝙽 𝚄𝙳𝙰𝙷 𝙼𝙰𝚃𝙸 𝙳𝙰𝙽 𝚃𝙴𝙻𝙰𝙷 𝙳𝙸𝙺𝚄𝙱𝚄𝚁`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})