import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

app.listen(process.env.PORT || 3000);

console.log('Server is running on http://localhost:' + process.env.PORT || 3000);
