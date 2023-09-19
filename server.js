const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const upload = multer();
const fs = require('fs');
const sqlite = require('better-sqlite3');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// need POST  - and check the URL path in index.html maybe 



// Render queue file
app.get('/queue', function(req, res) {
    res.sendFile(path.join(__dirname, 'html/queue.html'));
});


// Endpoint for uploading an image and inserting it into the database
app.post('/img', upload.single('imageData'), (req, res) => {
    try {
        const db = sqlite('res/db/papeDb.db');
        db.pragma('journal_mode = WAL');

        // console.log(req)

        const { buffer, originalname } = req.file;
        const uploadNickname = req.body.uploadNickname;
        const userstmt = db.prepare(`INSERT INTO Users (userAgent, ip) values ('${req.ip}', '${req.user_agent}')`).run();
        const userId = db.prepare(`SELECT last_insert_rowid() as 'lastID' `).all()[0].lastID; // get last inserted
        // console.log(userId)

        const stmt = db.prepare('INSERT INTO Images (imageData, uploadNickname, userId) VALUES (?, ?, ?)'); 
        stmt.run(buffer, uploadNickname, userId);

        db.close()
        console.log('Image uploaded and inserted into database')
        res.status(200).send('Image uploaded and inserted into database');
    } catch (ex) {
        console.error("Error in POST /img:", ex)
    }
});



app.get('/img/:n?', (req, res) => {
    const n = parseInt(req.params.n) || 0;
    const db = sqlite('res/db/papeDb.db');
    db.pragma('journal_mode = WAL');

    if (n >= 0 && n <= 9) {
        const query = n === 0
            ? 'SELECT imageData, uploadNickname, userId, dateTime FROM Images ORDER BY dateTime DESC LIMIT 1'
            : 'SELECT imageData, uploadNickname, userId, dateTime FROM Images ORDER BY dateTime ASC LIMIT 1 OFFSET ?';

        const row = db.prepare(query).get(n - 1);

        if (row) {
            const imageData = row.imageData;
            const uploadNickname = row.uploadNickname;
            const userId = row.userId;
            const dateTime = row.dateTime;

            db.close()

            res.set('Content-Type', 'image/jpeg');
            res.set('Content-Disposition', `attachment; filename=image_${userId}_${dateTime}.jpg`);
            res.send(imageData);
        } else {
            res.status(404).send('No images found');
        }
    } else {
        res.status(400).send('Invalid image index');
    }
});








app.listen(port, () => {
  // .....
})
