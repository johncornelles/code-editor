// main.jsx or index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import  theme  from './theme.js';
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* convert this to chakra base provider to reduce load time once the project is done */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
