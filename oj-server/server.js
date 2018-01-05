/**
 * Created by ThomaZhang on 1/4/18.
 */
var express = require('express');
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var constant = require("./constant");
var path = require("path");

mongoose.connect(constant[0].MONGODB_LINK);

app.use(express.static(path.join(__dirname,"../public")));
app.use("/",indexRouter);
app.use("/api/v1", restRouter);

app.listen(3000, () => console.log('Example app listening on port 3000!'));