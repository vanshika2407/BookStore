import { FormLabel, TextField,Button, FormControlLabel, Checkbox } from '@mui/material';
import _default from '@mui/material/styles/identifier';
import {Box} from '@mui/system';
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function AddBook()
{
  const history= useNavigate();
  const[avail,setAvail]=useState(false);
  const[inputs,setInputs]=useState(
        {
            name:"",
            author:"",
            description:"",
            price:"",
            image:""
        }
    )
    
    function handleAvail()
    {
      setAvail((prevState)=>{
        return(
        prevState=!prevState
        )
      })
    }
 
    function handleForm(e)
    {
       setInputs((prevState)=>({
        ...prevState,
         [e.target.name]:e.target.value
       }))
    }
    const sendRequest=async()=>{
      await axios.post("http://localhost:5000/books",{
        name:String(inputs.name),
        author:String(inputs.author),
        description:String(inputs.description),
        price:Number(inputs.price) ,
        image:String(inputs.image),
        available:Boolean(avail)
      }).then(res=>res.data);
    }
     function handleSubmit(e)
    {
       e.preventDefault();
       console.log(inputs);
       sendRequest().then(()=>history('/books'))
    };
    return(
      <form onSubmit={handleSubmit}>
      <Box
      marginTop={3}
      display="flex" 
      flexDirection="column"
       justifyContent={'center'} 
       maxWidth={700}
       alignContent={'center'}
       alignSelf={'center'}
       marginLeft={"auto"}  marginRight={"auto"}>
      <FormLabel>Name</FormLabel>
        <TextField value={inputs.name} onChange={handleForm}
         margin="normal" fullWidth variant='outlined' name="name"/>

         <FormLabel>Author</FormLabel>
        <TextField value={inputs.author} onChange={handleForm} 
        margin="normal" fullWidth variant='outlined' name="author"/>

         <FormLabel>Description</FormLabel>
        <TextField value={inputs.description} onChange={handleForm}
         margin="normal" fullWidth variant='outlined' name="description"/>

         <FormLabel>Price</FormLabel>
        <TextField value={inputs.price} onChange={handleForm} 
        type="number" margin="normal" fullWidth variant='outlined' name="price"/>

          <FormLabel>Image</FormLabel>
        <TextField value={inputs.image} onChange={handleForm}
         margin="normal" fullWidth variant='outlined' name="image"/>

        <FormControlLabel control={<Checkbox checked={avail} onChange={handleAvail} />} label='Available'/>

        <Button sx={{backgroundColor:'#002884'}} variant='contained'type='submit'>Add Book</Button>
      </Box>
      </form>
    )
}
export default AddBook;