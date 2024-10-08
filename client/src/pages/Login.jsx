import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  InputGroup, 
  InputRightElement, 
  IconButton, 
  Heading, 
  Text 
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useForm } from "react-hook-form";
import useLogin from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const handleShowClick = () => setShowPassword(!showPassword);
  const { login, loading } = useLogin();

  const onSubmit = async (data) => {
    try {
      const res = await login(data);
      console.log(res);
      nav("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        maxW="sm"
        mx="auto"
        mt={10}
        p={6}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        borderColor="black"
      >
        <Heading as="h2" size="lg" textAlign="center" mb={6} color="blue.500">
          Login
        </Heading>

        {/* Username Field */}
        <FormControl id="username" mb={4} isInvalid={errors.username}>
          <FormLabel color="blue.300">Username</FormLabel>
          <Input 
            type="text" 
            placeholder="Enter your username" 
            {...register("username", { required: "Username is required" })} 
          />
          {errors.username && <Text color="red.500">{errors.username.message}</Text>}
        </FormControl>

        {/* Password Field */}
        <FormControl id="password" mb={6} isInvalid={errors.password}>
          <FormLabel color="blue.300">Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            <InputRightElement width="3rem">
              <IconButton
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={handleShowClick}
                size="sm"
                variant="ghost"
              />
            </InputRightElement>
          </InputGroup>
          {errors.password && <Text color="red.500">{errors.password.message}</Text>}
        </FormControl>

        {/* Login Button */}
        <Button colorScheme="blue" width="full" mt={4} type="submit">
          Login
        </Button>

        {/* Navigate to SignUp */}
        <Text mt={4} textAlign="center">
          New user? <Text as="span" color="blue.500" cursor="pointer" onClick={() => nav('/signup')}>Sign Up</Text>
        </Text>
      </Box>
    </form>
  );
};

export default Login;
