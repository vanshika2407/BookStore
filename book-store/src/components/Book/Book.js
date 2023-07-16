import { Button } from '@mui/material';
import React from 'react'
import './Book.css'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
function Book(props)
{
    const history=useNavigate();
    const {_id,name,author,description,price,image}=props.book;
 const handleDelete= async()=> {
        await axios.delete("http://localhost:5000/books/"+_id).then(res=>res.data).then(()=>window.location.reload(false)).then(()=>history("/books"));
    };

    return(
   
      
        <div className='Book'>
            <img src={image} alt={name}></img>
            <article>By {author}</article>
            <div className='content'>
            <h3 className='book heading'>{name}</h3>
            <p className='book desc'>{description}</p>
            <h4 className='book price'> Rs {price}</h4>
            </div>
            <Button LinkComponent={Link} to={'/books/'+_id}className='buttons'>Update</Button>
            <Button onClick={handleDelete}className='buttons'>Delete</Button>
        </div>
       
        
    )
}

export default Book;