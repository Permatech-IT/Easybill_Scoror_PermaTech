const router = require('express').Router();


router.route('/').get((req, res) => {
  res.send("This is the easybill");
});

router.route('/').post((req, res) => {
  console.log(req.body);
  res.send("This is the webhook");
});

module.exports = router;