const dotenv = require('dotenv'); // 引入dotenv
dotenv.config(); // 调用config方法合并.env环境变量
require('@waline/vercel/vanilla.js'); // 引入并执行该文件
