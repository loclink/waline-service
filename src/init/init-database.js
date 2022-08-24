const mysql = require('mysql2');
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, MYSQL_PORT } = require('../config/global');
const { createCommentTable, createCounterTable, createUsersTable } = require('../config/statement');

const db = mysql.createConnection({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD
});

const createDatabase = () => {
  return new Promise((resolve, reject) => {
    db.query(`CREATE DATABASE ${MYSQL_DB}`, (err, result) => {
      if (err) {
        reject(err);
        throw err;
      }
      resolve(result);
    });
  });
};

const createTable = (statement) => {
  return new Promise((resolve, reject) => {
    db.query(`use ${MYSQL_DB}`, () => {
      db.query(statement, (err, res) => {
        if (err) {
          reject(err);
          throw err;
        }
        resolve(res);
      });
    });
  });
};

// 初始化数据库操作
const initializeAction = async () => {
  await createDatabase();
  console.log(`数据库${MYSQL_DB}创建成功`);
  await createTable(createCommentTable);
  console.log('comment表创建成功');
  await createTable(createCounterTable);
  console.log('counter表创建成功');
  await createTable(createUsersTable);
  console.log('users表创建成功');
  process.exit();
};

initializeAction();
