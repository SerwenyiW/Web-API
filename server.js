const express = require('express');
const app = express();
const path = require('path');
const db = require('./sdb');

app.use(express.static(path.join(__dirname, "public")))

app.listen(8080, ()=>{
    console.log("Szerver fut!");
});


//db.run("INSERT INTO xiaomis VALUES ('Xiaomi POCO M5 Pro 12GB / 512GB', '2400x1080px', 'HyperOS', '64Mpx', '16Mpx', 'XiaomiPM6Pro')");
//db.run("INSERT INTO xiaomis VALUES ('Xiaomi Redmi Note 13 256GB 8GB', '2000x1080px', 'HyperOS', '108MP+8MP+2MP', '16MP', 'XiaomiRN13')");
//db.run("INSERT INTO xiaomis VALUES ('Xiaomi 14 5G 512GB 12GB', '2670x1200px', 'HyperOS', '50MPx', '32Mpx', 'Xiaomi14')");

app.get("/xiaomi", (req, res)=>{
    db.get("SELECT * FROM xiaomis WHERE rname = ?", [req.query.phone], (err, row)=>{
        res.json(row)
    });
});

app.use((req, res, next) => {
    sendErrorHTML(res, 404);
    sendErrorHTML(res, 403);
});

function sendErrorHTML(res, status) {
    const numberAsString = status.toString();
    res.status(status).sendFile(path.join(__dirname, 'views', `${numberAsString[0]}0x.html`));
}