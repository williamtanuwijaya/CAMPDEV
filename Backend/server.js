import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const port = 8081;
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbcampdev',
});
app.get('/', (req, res) => {
  res.json({
    test: 'halo',
  });
});
db.connect((err) => {
  if (err) throw err;
  console.log('database connected');

  // Untuk mendapatkan data
  app.get('/ambil', (req, res) => {
    const sql = 'SELECT * FROM tbuser';
    db.query(sql, (err, result) => {
      const users = JSON.parse(JSON.stringify(result));
      console.table(users);
      res.json(users);
    });
  });

  app.post('/sign-in', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const checkEmail = `SELECT * FROM tbuser WHERE email = '${email}' and password_hash = '${password}'`;
    db.query(checkEmail, (req, result) => {
      const resData = JSON.parse(JSON.stringify(result));
      console.log(resData);
      if (resData.length > 0) {
        return res.json({
          status: 'Sign in success',
        });
      } else {
        return res.json({
          status: 'sign in failed ',
        });
      }
    });
  });
  // // Untuk menyimpan data
  app.post('/sign-up', (req, res) => {
    const nama = req.body.nama;
    const email = req.body.email;
    const pw = req.body.password_hash;

    const insertSQL = `INSERT INTO tbuser (nama, email, password_hash) VALUES ('${nama}', '${email}', '${pw}')`;
    db.query(insertSQL, (err, result) => {
      if (err) throw err;
      return res.json({
        message: 'success',
      });
    });
  });

  // untuk mengambil data dari tabel message
  app.get('/ambil-messange', (req, res) => {
    const sql = 'SELECT * FROM tbmessage';
    db.query(sql, (err, result) => {
      const message = JSON.parse(JSON.stringify(result));
      console.table(message);
      res.json(message);
    });
  });

  // untuk insert messange
  app.post('/insert-messange', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const emailaddres = req.body.emailaddres;
    const message = req.body.message;

    const insertSQLCONTACT = `INSERT INTO tbmessage(firstname, lastname, emailadress, message) VALUES ('${firstname}', '${lastname}', '${emailaddres}', ${message})`;
    db.query(insertSQLCONTACT, (err, result) => {
      if (err) throw err;
      return res.json({
        message: 'success messange',
      });
    });
  });

  // untuk mengecek messange
  app.post('/check-messange', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const emailaddres = req.body.emailaddres;
    const message = req.body.message;
    const checkMessange = `SELECT * FROM tbmessage WHERE firstname = '${firstname}' and lastname = '${lastname}' and emailadress = '${emailaddres}' and message = '${message}'`;

    db.query(checkMessange, (req, result) => {
      const resData = JSON.stringify(result);
      console.log(resData);
      if (Object.keys(resData.length > 0)) {
        return res.json({
          status: 'Messange success',
        });
      } else {
        return res.json({
          status: 'Messange failed ',
        });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Running ready.. at http://localhost:${port}`);
});
