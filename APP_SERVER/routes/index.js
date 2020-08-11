const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlBook = require('../controllers/book');
/* GET home page. */
router.get('/', ctrlBook.homelist);
//router.get('/list', ctrlFood.foodlist);
//router.get('/favourite', ctrlFood.favouriteFood);
router.get('/books/:bookid',ctrlBook.bookInfo);

router.route('/new')
    .get(ctrlBook.addNewBook)
    .post(ctrlBook.doAddNewBook);
    

module.exports = router;


