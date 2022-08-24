const { createFile } = require('../utils/operation-file');
const { verifyFileExist } = require('../utils/verify');

const createEnv = async () => {
  const cwdPath = process.cwd();
  const isExist = await verifyFileExist(cwdPath, '.env');
  if (isExist) {
    console.log('.env文件已存在');
  } else {
    createFile(cwdPath, '.env');
  }
};

createEnv();
