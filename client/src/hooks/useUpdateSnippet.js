import React, { useState } from 'react';
import { useStore } from '../store/store'; // Import Zustand store

export const useUpdateSnippet = () => {
  const [loading, setLoading] = useState(false);
  const { backend, token, snippets, setSnippets } = useStore();

  const updateSnippet = async (snippetId, updatedSnippet) => {
    setLoading(true);
    try {
      // Send the update request to the backend
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


      const updatedSnippets = snippets.map((snippet) =>
        snippet._id === snippetId ? res.data.snippet : snippet
      );


      setSnippets(updatedSnippets);


      console.log('Updated snippets array:', updatedSnippets);

      return res.data;
    } catch (error) {
      console.error('Error updating snippet:', error);
      throw error; // Re-throw the error for further handling if needed
    } finally {
      setLoading(false);
    }
  };

  return { updateSnippet, loading };
};
