const fs = require('fs');

// 校验文件是否存在
const verifyFileExist = async (workPath, fileName) => {
  const isExist = await fs.existsSync(`${workPath}/${fileName}`);
  return isExist;
};

module.exports = {
  verifyFileExist
};
