'use strict';
const router = require('express').Router();
const bookController = require('./../controllers/bookController');

router
  .route('/')
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

router
  .route('/:id')
  .get(bookController.getOneBook)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;
