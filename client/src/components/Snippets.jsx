import React, { useEffect, useState } from 'react';
import { useStore } from '../store/store';
import { useGetSnippets } from '../hooks/useGetSnippets';
import { useAddSnippet } from '../hooks/useAddSnippet';
import { useUpdateSnippet } from '../hooks/useUpdateSnippet';
import { useDeleteSnippet } from '../hooks/useDeleteSnippet';
import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  Spinner,

} from '@chakra-ui/react';
import TextEditor from './TextEditor';
import Snippet from './Snippet';


const Snippets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { snippets, snippetToBeEditedOrDeleted, setSnippets, setSnippetToBeEditedOrDeleted, username } = useStore();
  const { getSnippets, loading: loadingSnippets } = useGetSnippets();
  const { deleteSnippet, loading: deletingSnippet } = useDeleteSnippet();

  const [currentSnippet, setCurrentSnippet] = useState(null);
  useEffect(() => {
    console.log(snippetToBeEditedOrDeleted)
  }, [snippetToBeEditedOrDeleted])
  // Fetch snippets when the component mounts
  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        await getSnippets();
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSnippets();
  }, []);

  // Function to handle adding a snippet
  const handleAddSnippet = async () => {
    try {
      onOpen()
      onClose();
    } catch (error) {
      console.error('Error adding snippet:', error.message);
    }
  };

  // Function to handle deleting a snippet
  const handleDeleteSnippet = async () => {
    try {
      const  response = await deleteSnippet(snippetToBeEditedOrDeleted._id);
      console.log(response)
      onClose()
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {snippetToBeEditedOrDeleted ? 'Edit Snippet' : 'Add Snippet'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextEditor onClose={onClose} snippet={snippetToBeEditedOrDeleted ? snippetToBeEditedOrDeleted : {}}  />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' onClick={handleDeleteSnippet} isLoading={deletingSnippet} mr={3}>
              Delete
            </Button>
          
            <Button colorScheme='blue' onClick={onClose} ml={3}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Button  marginRight={"auto"} marginLeft={"auto"} onClick={() => {
                setSnippetToBeEditedOrDeleted(null);
                onOpen();
              }}>
                Add a new snippet
              </Button>

      {loadingSnippets ? (
        <Spinner />
      ) : (
        snippets &&
        snippets.map((snippet) => (
          <VStack key={snippet.id} spacing={4} align='stretch'>
            <Snippet snippet={snippet} />
            {username == snippet.createdby && (
              <Button  marginRight={"auto"} marginLeft={"auto"} onClick={() => {
                setSnippetToBeEditedOrDeleted(snippet);
                setCurrentSnippet(snippet);
                onOpen();
              }}>
                Edit
              </Button>
            )}
          </VStack>
        ))
      )}
    </>
  );
};

export default Snippets;
