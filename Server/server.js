// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const multer = require('multer');
// const router = require('./Routes/Login');
// const upload = multer();
// const app = express();
// app.use(cors());
// const port = 3001;

import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import testRoutes from './Routes/Login.js'
import feedbackRoutes from './Routes/feedback.js'
import stockManagementRoutes from './Routes/stockManagement.js'
import customizeCake from './Routes/customizeCake.js'

const app = express();
app.use(cors());

app.use(express.json());

export const db =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'cakeoclock'
});

app.use('/server/test', testRoutes);
app.use('/server/feedback',feedbackRoutes);
app.use('/server/stockManagement',stockManagementRoutes);
app.use('/server/customizeCake',customizeCake)


app.listen(3001, () => {
    console.log('server working');
})

// app.use({'/Server/test',router})


// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to MySQL database');
// });


// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
// app.get('/users', (req, res) => {
//     // Define the SQL query to retrieve data from the user table
//     const sql = 'SELECT * FROM user';

//     // Execute the query
//     db.query(sql, (err, results) => {
//         if (err) {
//             // If there's an error, send a 500 Internal Server Error response
//             console.error('Error retrieving user data:', err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         } else {
//             // If the query is successful, send the results as a JSON response
//             res.json(results);
//         }
//     });
// });

