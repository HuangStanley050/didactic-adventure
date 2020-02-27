const rawData = require("./animeDataRaw.json");
const fs = require("fs");
const util = require("util");

const data = JSON.parse(JSON.stringify(rawData));

const animeList = data.urlset.url;
let finalData = {};

animeList.forEach(anime => {
  let temp = anime.loc.split("/");
  //console.log(temp[temp.length - 2], temp[temp.length - 1]);
  let result = temp[temp.length - 1].replace(/_/g, " ");
  finalData[temp[temp.length - 2]] = result;
});

//fs.writeFileSync("animeData.js", util.inspect(finalData), "utf-8");
