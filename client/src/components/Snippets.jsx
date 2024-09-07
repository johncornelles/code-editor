import React from 'react'
import { useStore } from '../store/store'
import { useEffect } from 'react';
import { useGetSnippets } from '../hooks/useGetSnippets';
import { Button } from '@chakra-ui/react';
import Snippet from './Snippet';

const Snippets = () => {
  const { snippets } = useStore();
  const { getSnippets, loading } = useGetSnippets()
  const runner = async () => {
   try {
     const res = await getSnippets()
   } catch (error) {
     console.log(error.message)
   } 
  }

  useEffect( () => {
    runner()
  }, [])
  useEffect(() => {
    console.log(snippets)
  }, [snippets])

  return (
    <>
      <Button as={Button}>
        Add a new Snippet
      </Button>
      {
      snippets && 
      snippets.map(snippet => <Snippet snippet={snippet} />)
    }
    </>
  )
}

export default Snippets
