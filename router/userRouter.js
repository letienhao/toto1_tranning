const express = require('express');

const router = express.Router();
const controlerUser = require('../controlerUser/controler')

router.post('/addUser',controlerUser.addUser)
router.get('/show',controlerUser.showUser);
router.delete("/deleteUser",controlerUser.deleteUser);
router.patch('/update',controlerUser.updateUser)


module.exports = router 

