import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavebarCompont = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >

            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            
            <Link to={'/addauthor'}><Button color="inherit" style={{ color: "white" }}>AddAuthor</Button></Link>
            <Link to={'/addcatogory'}><Button color="inherit" style={{ color: "white" }}>AddCatogory</Button></Link>
            <Link to={'/author'}><Button color="inherit" style={{ color: "white" }}>Authorlist</Button></Link>
        </Toolbar>
    </AppBar>


</Box>
  )
}

export default NavebarCompont
