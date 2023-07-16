
import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { FormLabel, TextField,Button, FormControlLabel, Checkbox } from '@mui/material';
import {Box} from '@mui/system';
function BookDetail()
{
    const[inputs,setInputs]=useState({});
    const[avail,setAvail]=useState(false);
    const id=useParams().id
    const history=useNavigate();
    useEffect(()=>{
      const fetchHandler=async()=>{
      await axios.get("http://localhost:5000/books/"+id).then((res)=>res.data).then(data=>setInputs(data.book));
           
        };
      fetchHandler();
    },[id]);
    function handleForm(e)
    {
        setInputs((prevState)=>(
        {
            ...prevState,
            [e.target.name]:e.target.value,

        }));
    }
   
    const sendRequest=async()=>{
    await axios.put("http://localhost:5000/books/"+id,{
        name:String(inputs.name),
        author:String(inputs.author),
        description:String(inputs.description),
        price:Number(inputs.price),
        image:String(inputs.image),
        available:Boolean(avail)
    }).then(res=>res.data)
    }
     function handleAvail()
    {
      setAvail(prevState=>!prevState)
    }
    function handleSubmit(e)
    {
     e.preventDefault();
       sendRequest().then(()=>history("/books"))
    }
    return(
        <div>
     {inputs &&(<form onSubmit={handleSubmit}>
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

        <Button sx={{backgroundColor:'#002884'}} variant='contained'type='submit'>Update Book</Button>
      </Box>
      </form>)}
      </div>
    )
}
export default BookDetail