const dotenv = require('dotenv');
dotenv.config();
module.exports = { MYSQL_HOST, MYSQL_PORT, MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD } = process.env;
