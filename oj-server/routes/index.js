/**
 * Created by ThomaZhang on 1/5/18.
 */
var express = require("express");
var router = express.Router();
var path =require("path")

router.get("/", function(req,res){
    res.sendFile("index.html", {root:path.join(__dirname, "../../public/")});
});

module.exports = router;