const express = require('express');

const router = express.Router();
const {getHomeData,addDailyStock} = require ('../controllers/breadController')

router.route('/').get(getHomeData);

router.post('/addstock',addDailyStock);



module.exports = router