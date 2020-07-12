const express = require('express');
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');

const app = express();

const PORT = process.env.PORT || 3000;

//serve static assets from the build directory
app.use(express.static(path.join(__dirname, 'build')));

//get route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(PORT);

console.log(`app listening on ${PORT}`);