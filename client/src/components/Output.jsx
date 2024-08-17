import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { useExecute } from '../hooks/useExecute';
import { useStore } from '../store/store';

const Output = () => {
  const { language, code, output } = useStore();
  const { execute, loading } = useExecute();

  const runCode = async () => {
    try {
      await execute(code, language);
    } catch (error) {
      console.error("Execution error:", error.message);
    }
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        colorScheme="red"
        mb={4}
        onClick={runCode}
        isLoading={loading}
      >
        Run
      </Button>
      <Box
        height="75vh"
        p={2}
        borderRadius={4}
        border="1px solid"
        borderColor="#333"
        overflowY="auto" // Enable scrolling if content overflows
      >
        <Text
          color={output.startsWith('Error') && 'red.500'}
          whiteSpace="pre-wrap" 
        >
          {output}
        </Text>
      </Box>
    </Box>
  );
};

export default Output;
