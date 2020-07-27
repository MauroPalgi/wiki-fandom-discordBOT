const channelId = "737020686102560811";
const wiki = require("./wiki");

module.exports = search = async (msg) => {
  if (msg.channel.id == channelId && msg.author.bot === false) {
    const args = msg.content;
    console.log(!args.includes("wiki:"));
    if (args.length === 0 || !args.includes("wiki:")) return; // EARLY RETURN
    const searchArgs = args.replace(/wiki:/g, "").split(" ");
    wiki(msg, searchArgs);
  }
};
