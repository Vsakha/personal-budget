const express = require('express');
const app = express();
const port = 3000;


app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.use('/budget', (req, res) => {
    res.sendFile("C:\\xampp\\Dev\\Week 03\\personal-budget1\\server.json");
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});