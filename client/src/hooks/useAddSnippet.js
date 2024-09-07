import React, { useState } from 'react';
import { useStore } from '../store/store'; // Import Zustand store

export const useAddSnippet = () => {
  const [loading, setLoading] = useState(false);
  const { backend, token, snippets, setSnippets } = useStore(); 

  const addSnippet = async (snippet) => {
    setLoading(true);
    try {
      const res = await backend.post(
        "/snippet/addposts",
        { snippet },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Snippet added successfully:', res.data);

      // Add the new snippet to the beginning of the snippets list
      setSnippets([res.data.snippet, ...snippets]); 

      return res.data;
    } catch (error) {
      console.error('Error adding snippet:', error);
      throw error; 
    } finally {
      setLoading(false);
    }
  };

  return { addSnippet, loading }; 
};
