import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddAuthorComponent = () => {
    const [name, setname] = useState('');
    const [bio, setbio] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleAuthor = async () => {
        try {
            console.log('Sending request...');
            const response = await axios.post('https://localhost:7045/api/Library/Author', {
                name: name,
                bio: bio,
            });
            console.log('Response:', response);
            if (response.status === 200) {
                navigate('/author');
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
                    label="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Answer"

                    value={bio}
                    onChange={(e) => setbio(e.target.value)}
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

export default AddAuthorComponent