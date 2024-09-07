import { Box, HStack, useColorMode } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import Languages from './Languages';
import { useStore } from '../store/store';
import Output from './Output';

const CodeEditor = () => {
  const { colorMode } = useColorMode();
  const { language, code, setCode, CODE_SNIPPETS } = useStore();
  const editorRef = useRef();

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleEditorChange = (value) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  useEffect(() => {
    setCode(CODE_SNIPPETS[language])
  }, [language]);

  return (
    <Box>
      <HStack spacing={4}>
        <Box width="50%">
          <Editor
            height="90vh"
            onMount={onMount}
            language={language}
            theme={colorMode === "light" ? "vs-light" : "vs-dark"}
            defaultValue={CODE_SNIPPETS[language] || ''}
            onChange={handleEditorChange}
            value={code}
          />
        </Box>
        <Output />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
