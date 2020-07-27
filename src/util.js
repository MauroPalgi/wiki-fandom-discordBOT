const fetch = require("node-fetch");

module.exports = {
  createQuery(text) {
    return text.replace(/\s/g, "+");
  },
  async fandomAPI(args) {
    try {
      const searchedURL = await fetch(
        `https://${args[0]}.fandom.com/api/v1/Search/List?query=${args[1]}&limit=1&minArticleQuality=10&batch=1&namespaces=0%2C14`
      )
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          return myJson.items[0].url;
        });
      return searchedURL;
    } catch (e) {
      console.log(e);
    }
  },
};

//! HANDDFFLE ERROR IF SEARCH NOT FOUND
