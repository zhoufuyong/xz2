var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/list",function(req,res,next){
	res.send("这是列表");
})
module.exports = router;
