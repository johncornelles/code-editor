import React, { useState } from 'react';
import { useStore } from '../store/store'; // Import Zustand store

export const useUpdateSnippet = () => {
  const [loading, setLoading] = useState(false);
  const { backend, token } = useStore();

  const updateSnippet = async (snippetId, snippet) => {
    setLoading(true);
    try {
      const res = await backend.put(
        `/snippet/update/${snippetId}`,
        { snippet },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Snippet updated successfully:', res.data);
      return res.data;
    } catch (error) {
      console.error('Error updating snippet:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { updateSnippet, loading };
};
