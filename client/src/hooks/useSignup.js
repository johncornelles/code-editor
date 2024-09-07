import { useState } from 'react';
import Cookies from 'js-cookie';
import { useStore } from '../store/store';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { backend, setToken, setUser } = useStore();

  const signup = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await backend.post('/auth/signup', userData);
      const { token, userID, username } = response.data;

      // Set the token in cookies
      Cookies.set('jwt', token);
      setToken(token);

      // Set user data in the store
      setUser({ userID, username });

      console.log('Signup successful:', response.data);
      return response.data;
    } catch (error) {
      console.error('Signup error:', error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};

export default useSignup;
