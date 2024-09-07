import React, { useState } from 'react';
import { useStore } from '../store/store'; // Import Zustand store

export const useUpdateSnippet = () => {
  const [loading, setLoading] = useState(false);
  const { backend, token, snippets, setSnippets } = useStore();

  const updateSnippet = async (snippetId, updatedSnippet) => {
    setLoading(true);
    try {
      const res = await backend.put(
        `/snippet/update/${snippetId}`,
        { snippet: updatedSnippet },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Snippet updated successfully:', res.data);

      // Update the snippet in the state
      setSnippets(snippets.map((snippet) => 
        snippet.id === snippetId ? res.data : snippet
      ));

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
