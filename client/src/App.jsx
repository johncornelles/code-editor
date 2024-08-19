import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './Components/LandingPage'
import { ChakraProvider } from '@chakra-ui/react';

import './App.css'

function App() {

  return (
    <>
      <ChakraProvider>
      <LandingPage />
    </ChakraProvider>
    </>
  )
}

export default App
