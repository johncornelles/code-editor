import React from 'react';
import { Box, Button, useColorMode } from '@chakra-ui/react';
import CodeEditor from './components/CodeEditor';
import LandingPage from './components/LandingPage';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      {/* <Button
      onClick={toggleColorMode}>
        {colorMode === 'light' ? 'dark mode' : 'light mode'}
      </Button>


      <CodeEditor /> */}
      <LandingPage />
    </>
  );
};

export default App;
