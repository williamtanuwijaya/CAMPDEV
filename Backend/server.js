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

db.connect((err) => {
  if (err) throw err;
  console.log('database connected');

  // Untuk mendapatkan data
  app.get('/ambil', (req, res) => {
    const sql = 'SELECT * FROM tbuser';
    db.query(sql, (err, result) => {
      const users = JSON.parse(JSON.stringify(result));
      // res.render('index', { users: users, title: 'DAFTAR MURID' });
      console.table(users);
      res.render('index');
    });
  });

  // // Untuk menyimpan data
  app.post('/tambah', (req, res) => {
    const nama = String(req.body.nama);
    const email = String(req.body.email);
    const pw = String(req.body.password_hash);

    // const insertSQL = `INSERT INTO tbuser (id, nama, email, password_hash) VALUES (6,${nama},${email},'${pw}')`;
    const insertSQL = `INSERT INTO tbuser (id, nama, email, password_hash) VALUES (10, '${nama}', '${email}', '${pw}')`;
    db.query(insertSQL, (err, result) => {
      if (err) throw err;
      console.log('error');
    });
  });
});

app.listen(port, () => {
  console.log('Running ready..');
});

// app.get('/data', (req, res) => {
//   const query = 'SELECT * FROM pengguna'; // Gantilah 'nama_tabel' dengan nama tabel Anda

//   db.query(query, (err, results) => {
//     console.log('results');
//     if (err) {
//       console.error('Error saat mengambil data:', err);
//       res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data dari database' });
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });
