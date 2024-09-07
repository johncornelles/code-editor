import { useState } from 'react';
import Cookies from 'js-cookie';
import { useStore } from '../store/store';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { backend, setToken, setUserID,setUsername } = useStore();

  const login = async (credentials) => {
    setLoading(true);
    setError(null);

    try {
      const response = await backend.post('/auth/login', credentials);
      const { token, userID, username } = response.data;

      // Set the token in cookies
      Cookies.set('jwt', token);
      setToken(token);
      
      setUserID(userID)
      setUsername(username)
      Cookies.set("userID",userID)
      Cookies.set("username",username)
      console.log('Login successful:', response.data);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
