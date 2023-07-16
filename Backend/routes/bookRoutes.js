const express=require("express");
const router=express.Router();
const BookController=require("../controllers/BookController");

//This route will give all books
router.get("/",BookController.allBooks);
router.post("/",BookController.addBooks);
router.get("/:id",BookController.getbookId);
router.put('/:id',BookController.updateBook);
router.delete("/:id",BookController.deleteBook);
module.exports=router;