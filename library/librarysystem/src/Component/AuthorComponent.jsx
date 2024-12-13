import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AuthorComponent = () => {
    const [authors, setAuthors] = useState([]);
    
    useEffect(() => {
      const fetchAuthors = async () => {
        try {
          const response = await axios.get('https://localhost:7045/api/Library');
          setAuthors(response.data);
        } catch (error) {
          console.error('Error fetching authors:', error);
        }
      };
  
      fetchAuthors();
    }, []);
  return (
    
        <div>
          <h2>Authors List</h2>
          <ul>
            {authors.map((author) => (
              <li key={author.id}>
                <h3>{author.name}</h3>
                <p>{author.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    

export default AuthorComponent