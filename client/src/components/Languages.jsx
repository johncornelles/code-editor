import { Box, Menu, MenuButton, MenuItem, Button, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import { useStore } from '../store/store';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Languages = () => {
    const { language, setLanguage, languages, CODE_SNIPPETS, setCode } = useStore();
    const languageEntries = Object.entries(languages);

    const handleSelect = (lang) => {
        setLanguage(lang);
        setCode(CODE_SNIPPETS[lang]);
    };

    return (
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {language}
                </MenuButton>
                <MenuList
                    maxH="300px" 
                    overflowY="auto"
                    borderRadius="md" 
                    p={2} 
                    bg="gray.800" 
                    borderColor="gray.700" 
                    >
                    {
                        languageEntries.map(([lang, version]) =>
                            <MenuItem
                                color={
                                    lang === language
                                        ? "green.400"
                                        : "gray.400"
                                }
                                bg={
                                    lang === language 
                                    ? "gray.700"
                                    : "transparent"
                                }
                                _hover={{
                                    color: "green.400",
                                    bg: "gray.700"
                                }}
                                onClick={() => handleSelect(lang)}
                                key={lang}
                            >
                                <Text as="span" fontWeight="bold">
                                    {lang}:
                                </Text>
                                <Text as="span" ml={2}>
                                    {version}
                                </Text>
                            </MenuItem>
                        )
                    }
                </MenuList>
            </Menu>
        </Box>
    );
};

export default Languages;
