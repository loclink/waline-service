const fs = require('fs');
const path = require('path');

// copy
const copyFile = async (src, dist) => {
  await fs.writeFileSync(dist, fs.readFileSync(src));
};

// 添加模板
const createFile = async (actionPath, fileName) => {
  await copyFile(path.resolve(__dirname, `../template/${fileName}.temp`), path.resolve(actionPath, `./${fileName}`));
};

module.exports = {
  copyFile,
  createFile
};
