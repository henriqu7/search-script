const folder = "./movies/data";
const fs = require("fs");

function search(params) {
  let list = [];

  fs.readdirSync(folder).forEach((file) => {
    const data = fs.readFileSync(`movies/data/${file}`, {
      encoding: "utf8",
      flag: "r",
    });
    if (data.includes(params)) {
      list.push(data);
    }
  });
  console.log(
    `Foram encontradas ${list.length} ocorrências pelo termo ${params}.`
  );
  return `Foram encontradas ${list.length} ocorrências pelo termo ${params}.`;
}

let args = process.argv.slice(2);
search(args.join(" "));

module.exports = search;
