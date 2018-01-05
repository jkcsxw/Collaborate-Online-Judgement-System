/**
 * Created by ThomaZhang on 1/4/18.
 */
var express = require('express');
var app = express();
var restRouter = require("./routes/rest");

app.use("/api/v1", restRouter);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, ()=> console.log('Example app listening on port 3000!'));