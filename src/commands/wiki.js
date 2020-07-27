// const regexp =  /^!rust\s.+/i
const { createQuery, fandomAPI } = require("../util");

module.exports = async (msg, args) => {
  if (!args.length) return;
  const response = await fandomAPI(args)
    .then((params) => {
      return params;
    })
    .catch((err) => {
      console.log(err);
    });
  const msgBOT = response;
  await msg.reply(msgBOT);
};
