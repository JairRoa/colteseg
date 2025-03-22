const { PurgeCSS } = require("purgecss");
const fs = require("fs");

(async () => {
  try {
    const purgeCSSResults = await new PurgeCSS().purge({
      content: ["index.html"],
      css: ["style.css"],
    });

    if (purgeCSSResults.length && purgeCSSResults[0].css) {
      fs.writeFileSync("style.purged.css", purgeCSSResults[0].css, "utf8");
      console.log("CSS purged successfully!");
    } else {
      console.log("No CSS output from PurgeCSS.");
    }
  } catch (error) {
    console.error("Error purging CSS:", error);
  }
})();
