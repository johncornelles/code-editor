import React from 'react'
import TextEditor from './TextEditor'
import {useStore} from "../store/store.js"
import {
  Box,
  Button,
} from '@chakra-ui/react';
import { useEffect } from 'react';


const Snippet = ({snippet}) => {
  const {username} = useStore()
  useEffect(() => console.log(username))
  return (
    <div>
      <Box>
      <TextEditor isReadOnly={true} snippet={snippet} />
      <p>{snippet.createdby}</p>
      </Box>
    </div>
  )
}

export default Snippet
