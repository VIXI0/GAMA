'user strict';

const maria = require('mariadb');
const { MAYA } = require('../config.js');
const util = require('util');
const MaS = maria.createConnection(MAYA);
exports.MaQ = MaS.query();
exports.MaS = MaS;
