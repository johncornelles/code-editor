import React from 'react';
import {
  Box,
  
} from '@chakra-ui/react';

import CodeEditor from '../components/CodeEditor';
import TextEditor from '../components/TextEditor';
import { useStore } from '../store/store';

import { useEffect } from 'react';

const Home = () => {
  
  const {token} = useStore();
  useEffect(() => {
    console.log(token)
  }, [token])
  return (
    <div>      
      <Box>
        <CodeEditor />
        <TextEditor />
      </Box>
    </div>
  );
};

export default Home;
