import React from 'react';
import {
  Box,
  Button,
  HStack,
  IconButton,
  Flex,
  Text,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"

import Languages from '../components/Languages';

const Navbar = () => {
  const username = Cookies.get("username");
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1.5rem"
      borderBottom="1px solid"
      borderColor="gray.200"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      color={colorMode === 'light' ? 'black' : 'white'}
      position="sticky"
      top="0"
      zIndex="1000"
    >

      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Options"
        />
        <MenuList>
          <MenuItem onClick={() => navigate('/snippets')}>Snippets</MenuItem>
          <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
          <MenuItem onClick={() => {
            Cookies.remove("userID");
            Cookies.remove("username");
            Cookies.remove("jwt");
            navigate('/login')
          }}>Logout</MenuItem>
          <MenuItem onClick={() => navigate('/myposts')}>My Snippets</MenuItem>
        </MenuList>
      </Menu>

      <Text paddingLeft="20px" paddingRight="20px" fontSize="xl" fontWeight="bold">
        Code Editor  
      </Text>

      <Spacer />

      <HStack spacing={4}>
        <Text paddingLeft="20px" paddingRight="20px" fontWeight="bold">
          Logged in as {username}
      </Text>

        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
          

        <Languages />
      </HStack>
    </Flex>
  );
};

export default Navbar;