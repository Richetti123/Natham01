const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  console.log(participants)
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `@richetti_123 ${pesan}`;
  let teks = `${global.packname} te invoca despiértate 😡!!\n\nETIQUETAS:\n`;
  for (const mem of participants) {
    teks += `😼 @${mem.jid.split('@')[0]}\n`;
  }
  teks += `*${global.packname}*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.jid)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
