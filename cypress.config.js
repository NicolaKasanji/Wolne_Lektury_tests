module.exports = {
  ...(on, config) => {
    on("task", {
      checkDownloadedFileTitle({ fileName, filePath }) {
        const fs = require("fs");

        return new Promise((resolve, reject) => {
          fs.readFile(filePath, "utf-8", (err, fileContent) => {
            if (err) {
              reject(err);
            } else {
              const found = fileContent.includes(fileName);
              resolve(found);
            }
          });
        });
      },
    });

    return config;
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
