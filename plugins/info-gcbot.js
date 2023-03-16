import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/Ly28IB8Fel4JbPS0qCUy2p'
         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`
         await conn.sendButtonDoc(m.chat, caption, wm, 'Owner', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: 'My Group Official', 
               body: 'Yushino Md',
               thumbnail: pp
             } 
         }})
         }

handler.tags = ['info']
handler.command = /^gcbul$/i
 export default handler
