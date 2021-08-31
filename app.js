const express = require('express');
const app = express();
const port = 3000;

app.use('/health', (req, res) => {
    res.send('Healthy').status(200);
});

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
});
