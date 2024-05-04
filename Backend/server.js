// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const {json} = require("express");
// const bcrypt = require("bcrypt");
// const app = express();
// app.use(cors());
// app.use(express.json());
//
// let user_id;
//
// async function hashPassword(password) {
//     try {
//         return await bcrypt.hash(password, 10);
//     }
//     catch (err) {
//         console.error("Error hashing password", err);
//         throw err;
//     }
// }
//
// async function verifyPassword(password, hash) {
//     try {
//         // console.log(await bcrypt.compare(password, hash));
//         return await bcrypt.compare(password, hash);
//     }
//     catch (err) {
//         console.error("Error hashing password", err);
//         throw err;
//     }
// }
//
//
//
//
// const db = mysql.createConnection({
//     host: "localhost",
//     // port: '3306',
//     user: 'root',
//     password: "usbw",
//     database: 'finances'
// })
// // app.get('/', (re, res)=> {
// //     return res.json("From backend");
// // })
// //
// app.get('/users', (req, res)=> {
//     const sql = "SELECT * FROM users";
//     db.query(sql, (err, data)=> {
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })
//
// app.post('/', async (req, res) => {
//     const { name, email, password } = req.body;
//
//     if (!password || typeof password !== 'string') {
//         return res.status(400).send('Password must be a string.');
//     }
//     try {
//         const hash = await hashPassword(req.body.password);
//         const values = [
//             req.body.name,
//             req.body.email,
//             hash
//         ]
//         const sql = "INSERT INTO users (`user_name`, `user_email`, `user_password`) VALUES (?)";
//
//         db.query(sql, [values], (err, data) => {
//             if(err) return res.json(err);
//             return res.json(data);
//         });
//     } catch (err) {
//         console.error('Error handling request:', err);
//         res.status(500).send('Server error');
//     }
// })
//
// app.post('/login', async (req, res) => {
//     try {
//         const sql = "SELECT * FROM users WHERE `user_email` = ?";
//         // const hash = await hashPassword();
//         db.query(sql, [req.body.email], async (err, data) => {
//             // console.log(data);
//             if (err) return res.json(err);
//             if (data.length > 0) {
//                 // console.log(data);
//                 // console.log(data[0].user_password);
//                 // console.log(hash);
//                 if(await verifyPassword(req.body.password, data[0].user_password)) {
//                     return res.json(data);
//                 } else {
//                     return res.status(401).json({ message: 'Invalid credentials' });
//                 }
//             } else {
//                 return res.json("Failure");
//             }
//         })
//     }
//     catch (err) {
//         console.error('Error handling request:', err);
//         res.status(500).send('Server error');
//     }
// })
//
// app.get('/budgets', (req, res) => {
//     try {
//         const sql = "SELECT * FROM budgets WHERE `user_id` = ?";
//         db.query(sql, sessionStorage.getItem('user'), (err, data) => {
//             if(err) return res.json(err);
//             if(data.length > 0) return res.json(data);
//         })
//     } catch (err) {
//         console.error('Error handling request:', err);
//         res.status(500).send('Server error');
//     }
// })
//
// app.listen(8081, ()=> {
//     console.log("Listening");
// })