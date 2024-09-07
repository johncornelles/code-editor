import React, { useState } from 'react';
import { useStore } from '../store/store'; // Import Zustand store

export const useDeleteSnippet = () => {
  const [loading, setLoading] = useState(false);
  const { backend, token } = useStore();

  const deleteSnippet = async (snippetId) => {
    setLoading(true);
    try {
      const res = await backend.delete(`/snippet/delete/${snippetId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      console.log('Snippet deleted successfully:', res.data);
      return res.data;
    } catch (error) {
      console.error('Error deleting snippet:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { deleteSnippet, loading };
};
