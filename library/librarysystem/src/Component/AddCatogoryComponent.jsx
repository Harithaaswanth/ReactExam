import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddCatogoryComponent = () => {
    const [title, setTitle] = useState('');
    const [discription, setdescription] = useState('');
    const [publicationyear, setpublicationyear] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleAuthor = async () => {
        try {
            console.log('Sending request...');
            const response = await axios.post('https://localhost:7045/api/Library/catogory', {
                title: title,
                discription: discription,
                publicationyear: publicationyear,
            });
            console.log('Response:', response);
            if (response.status === 200) {
                navigate('/addcatogory');
            }
        } catch (err) {
            console.error('Error:', err);
            setError('Add failed. Please try again.');
        }
    };
  return (
    <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                AddAuthor
            </Typography>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Titile"
                    value={name}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Discription"

                    value={bio}
                    onChange={(e) => setdescription(e.target.value)}
                    sx={{ mt: 2 }}
                />
                <br />
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="PublishedYear"

                    value={bio}
                    onChange={(e) => setpublicationyear(e.target.value)}
                    sx={{ mt: 2 }}
                />
                <br />

            </div>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button
                color="inherit"
                style={{ color: 'black', background: 'skyblue' }}
                onClick={handleAuthor}
            >
                Add 
            </Button>
        </Box>
  )
}

export default AddCatogoryComponent