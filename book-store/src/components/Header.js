import React,{useState} from 'react'
import {AppBar, Tab,Tabs,Toolbar, Typography} from "@mui/material"
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import {NavLink} from 'react-router-dom'
function Header()
{
    const [value,setValue]=useState()
    function handleValue(e,value)
    {
       setValue(value);
    }
    return(
        <div>
          <AppBar sx={{backgroundColor:'#002884'}} position="sticky">
          <Toolbar>
          <NavLink to="/" style={{color:'white'}}>
          <Typography><LibraryBooksRoundedIcon /></Typography>
          </NavLink>
           <Tabs  sx={{ml:'auto'}}  //sx allows to add custom css, ml is margin left
           textColor="inherit" indicatorColor="primary" value={value} onChange={handleValue}>
            {/* <Tab LinkComponent={NavLink} to="/" label='Home'/> */}
            <Tab LinkComponent={NavLink} to="/add" label='Add Product'/>
            <Tab LinkComponent={NavLink} to='/books' label='Books'/>
            <Tab LinkComponent={NavLink} to='/about' label='About Us'/>
           </Tabs>
               </Toolbar>
         </AppBar>
        </div>
    )
}
export default Header;
