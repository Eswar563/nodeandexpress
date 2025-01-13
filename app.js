const express = require('express');
const Router = require('./router');

const app = express();
app.use(express.json());
app.use('/api', Router);

app.listen(4000, () => {
    console.log('Node and Express server is running on port 4000');
});
