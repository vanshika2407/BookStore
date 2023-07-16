import React, { useEffect, useState } from 'react'
import Book from './Book';
import axios from 'axios'
import './Book.css'
const URL="http://localhost:5000/books"
 const fetchHandler=async()=>{
   
    return await axios.get(URL).then((res)=>res.data)
   .catch(function(err)
    {
        console.log(err);
    })
   }
function Books()
{
    const[bookData,setBooks]=useState();
    useEffect(()=>{
       fetchHandler().then(data=>setBooks(data.books))
    },[]);
    console.log(bookData);
    return(
        <div>
           <ul>
            {bookData && bookData.map((details,i)=>{
               return(
                <div className='container' key={i}>
                    <Book book={details}/>
                </div>
               )
            })}
           </ul>
        </div>
    )
}
export default Books;