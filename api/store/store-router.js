const router = require('express').Router();
const storeItems = require('./store-data')

router.get('/', (req, res) => {
  res.status(200).json(storeItems);
});

module.exports = router;
