const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodelogin'
});
