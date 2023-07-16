const Book=require('../model/Book');
const allBooks=async(req,res,next)=>{
    let books;
try{
     books=await Book.find();
} catch(err)
{
    console.log(err);
}
if(!books)
{
    return res.status(404).json({messgae:"No products found"})
}
return res.status(200).json({books})
}
const getbookId=async(req,res,next)=>{
   let book;
   let id=req.params.id;
   try{
    book=await Book.findById(id);
   }catch(err)
   {
    console.log(err);
   }
   if(!book)
   {
    return res.status(404).json({message:" No Book found"});
   }
   return res.status(200).json({book});
}
const addBooks=async(req,res,next)=>{
    let book;
    const{name,author,description,price,available,image}=req.body;
    try{
        book= new Book(
            {
                name,
                author,
                description,
                price,
                available,
                image
            }
        );
        await book.save(); //mongoose has this save function which will store the data in database
    }catch(err)
    {
        console.log(err);
    }
    if(!book)
    {
        return res.status(500).json({message:"Unable to add"});
    }
    return res.status(201).json({book})  //500 is for not added, 201 is for added successfully
}
const updateBook=async(req,res,next)=>{
    let book;
    let id=req.params.id;
    const{name,author,description,price,available,image}=req.body;
    try{
    book=await Book.findByIdAndUpdate(id,{
        name,
        author,
        description,
        price,
        available,
        image
    });
    book=await book.save();
    }
    catch(err)
    {
        console.log(err);
    }
    if(!book)
    {
        return res.status(404).json({message:"Could not update by this id"});
    }
    return res.status(200).json({book});
}
const deleteBook=async(req,res,next)=>{
    let book;
    let id=req.params.id;
    try{
        book=await Book.findByIdAndRemove(id);
    }
    catch(err)
    {
        console.log(err);
    }
    if(!book)
    {
        return res.status(404).json({message:"Could not delete the book with this id"});
    }
    return res.status(200).json({book})
}
exports.allBooks=allBooks;
exports.addBooks=addBooks;
exports.getbookId=getbookId;
exports.updateBook=updateBook;
exports.deleteBook=deleteBook;