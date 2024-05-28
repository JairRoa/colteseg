const PurgeCSS = require("purgecss").PurgeCSS;
const fs = require("fs");

new PurgeCSS()
  .purge({
    content: ["index.html"],
    css: ["style.css"],
  })
  .then((result) => {
    fs.writeFileSync("style.purged.css", result[0].css, "utf8");
    console.log("CSS purged successfully!");
  })
  .catch((err) => {
    console.error("Error purging CSS:", err);
  });
