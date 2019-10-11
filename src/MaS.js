'user strict';

const maria = require('mariadb');
const { MAYA } = require('../config.js');
const util = require('util');
let MaS = () => {};



let connect = async () => {
await maria.createConnection(MAYA).then(conn => {
  conn.ping()
  .then(() => {
    console.log('connected');
  })
  .catch(err => {
    console.error('ping: ', err);
  })
  MaS = conn;  })
  .catch(err => { console.error('creatingConnection: ', err); });
}

let sql = async (sql) => {
  return await MaS.query(sql);
};
exports.MaSC = connect;
exports.MaS = MaS;
exports.MaQ = sql;
