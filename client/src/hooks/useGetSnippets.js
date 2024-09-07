import React, { useState } from 'react';
import { useStore } from '../store/store'; // Import Zustand store

export const useGetSnippets = () => {
  const [loading, setLoading] = useState(false);
  const { backend, token, snippets, setSnippets} = useStore();

  const getSnippets = async () => {
    setLoading(true);
    try {
      const res = await backend.get('/snippet/getlatestposts', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      console.log('Snippets fetched successfully:', res.data);
      setSnippets(res.data);
      return res.data;
    } catch (error) {
      console.error('Error fetching snippets:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { getSnippets, loading };
};
