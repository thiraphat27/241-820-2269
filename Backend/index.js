const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1;
let conn = null
const initMySQL = async () => {
   conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',       
        password: 'root',
        database: 'webdb',
        port: 8820
    });
}


/**
 GET /users สำหรับ get ข้อมูลผู้ใช้ทั้งหมด
 POST /user สำหรับเพิ่มผู้ใช้ใหม่
 GET /user/:id สำหรับ get ข้อมูลผู้ใช้ที่มี id
 PUT /user/:id สำหรับแก้ไขข้อมูลผู้ใช้ที่มี id
 DELETE /user
 */

//path = /users 
app.get('/users', async (req, res) => {
    const result = await conn.query('SELECT * FROM users');

    res.json(result[0]);
});

//path = POST /user
app.post('/users', async (req,res) =>{
    try {
         let user = req.body
          const results = await conn.query('INSERT INTO users SET ?',user)    
          res.json({
            message: 'User created successfully',
            data: results[0]
        })
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ 
            message: 'Error creating user',
            error: error.message
        });
    }
});


//path = GET /user/:id สำหรับ get ข้อมูลผู้ใช้ที่มี id ตรงกับ id ที่ส่งมา
app.get('/user/:id', async (req, res) => {
    try {
        let id = req.params.id
        const result = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
        if (result[0].length == 0) {
            throw {statusCode: 404, message: 'User not found'};
    }
        res.json(result[0][0]);
     }
        catch (error) {
        console.error('Error fetching user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({  
            message: 'Error fetching user',
            error: error.message
        });
    }
});


// PUT = /users/:id สำหรับแก้ไขข้อมูลผู้ใช้ที่มี id ตรงกับ id ที่ส่งมา
app.put('/user/:id', async (req, res) => {
      try {
        let id = req.params.id
        let updatedUser = req.body;
        const result = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);
        if (result[0].affectedRows == 0) {
            throw {statusCode: 404, message: 'User not found'};
    }
        res.json(result[0][0]);
     }
        catch (error) {
        console.error('Error fetching user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({  
            message: 'Error fetching user',
            error: error.message
        });
    }
});

//DELETE = /user/:id สำหรับลบข้อมูลผู้ใช้ที่มี id ตรงกับ id ที่ส่งมา
app.delete('/user/:id', async  (req, res) => {
    try {
        let id = req.params.id
        const result = await conn.query('DELETE FROM users WHERE id = ?', [id]);
        if (result[0].affectedRows == 0) {
            throw {statusCode: 404, message: 'User not found'};
        }
        res.json({
            message: 'User deleted successfully',
            data: result[0]
        });
    } catch (error) {
        console.error('Error deleting user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({  
            message: 'Error deleting user',
            error: error.message
        });
    }
})
