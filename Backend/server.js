import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';

class MyApp {
  constructor() {
    this.port = 8081;
    this.app = express();
    this.db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'dbcampdev',
    });

    this.setupExpress();
    this.setupRoutes();
    this.connectDatabase();
  }

  setupExpress() {
    this.app.set('view engine', 'ejs');
    this.app.set('views', 'views');
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(cookieParser());
    this.app.use(express.urlencoded({ extended: true }));
  }

  setupRoutes() {
    this.app.get('/', (req, res) => {
      res.json({
        test: 'halo',
      });
    });

    this.app.get('/ambil', (req, res) => {
      const sql = 'SELECT * FROM tbuser';
      this.db.query(sql, (err, result) => {
        const users = JSON.parse(JSON.stringify(result));
        console.table(users);
        res.json(users);
      });
    });

    this.app.post('/sign-in', (req, res) => {
      const email = req.body.email;
      const password = req.body.password;
      const checkEmail = `SELECT * FROM tbuser WHERE email = '${email}' and password_hash = '${password}'`;
      this.db.query(checkEmail, (req, result) => {
        const resData = (JSON.stringify(result));
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

    this.app.post('/sign-up', (req, res) => {
      const nama = req.body.nama;
      const email = req.body.email;
      const pw = req.body.password_hash;

      const insertSQL = `INSERT INTO tbuser (nama, email, password_hash) VALUES ('${nama}', '${email}', '${pw}')`;
      this.db.query(insertSQL, (err, result) => {
        if (err) throw err;
        return res.json({
          message: 'success',
        });
      });
    });

    this.app.get('/ambil-messange', (req, res) => {
      const sql = 'SELECT * FROM tbmessage';
      this.db.query(sql, (err, result) => {
        const message = JSON.parse(JSON.stringify(result));
        console.table(message);
        res.json(message);
      });
    });

    this.app.post('/insert-messange', (req, res) => {
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const emailaddres = req.body.emailaddres;
      const message = req.body.message;

      const insertSQLCONTACT = `INSERT INTO tbmessage(firstname, lastname, emailadress, message) VALUES ('${firstname}', '${lastname}', '${emailaddres}', ${message})`;
      this.db.query(insertSQLCONTACT, (err, result) => {
        if (err) throw err;
        return res.json({
          message: 'success messange',
        });
      });
    });

    this.app.post('/check-messange', (req, res) => {
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const emailaddres = req.body.emailaddres;
      const message = req.body.message;
      const checkMessange = `SELECT * FROM tbmessage WHERE firstname = '${firstname}' and lastname = '${lastname}' and emailadress = '${emailaddres}' and message = '${message}'`;

      this.db.query(checkMessange, (req, result) => {
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
  }

  connectDatabase() {
    this.db.connect((err) => {
      if (err) throw err;
      console.log('database connected');
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Running ready.. at http://localhost:${this.port}`);
    });
  }
}

const myApp = new MyApp();
myApp.start();

