import React from 'react';
import { Box, Button, useColorMode } from '@chakra-ui/react';
import CodeEditor from './components/CodeEditor';
import LandingPage from './components/LandingPage';
import TextEditor from './components/TextEditor';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      {/* <Button
      onClick={toggleColorMode}>
        {colorMode === 'light' ? 'dark mode' : 'light mode'}
      </Button>


      <CodeEditor /> */}
      {/* <LandingPage /> */}
      {/* <TextEditor /> */}
      {/* <Login /> */}
      <SignUp />
    </>
  );
};

export default App;
