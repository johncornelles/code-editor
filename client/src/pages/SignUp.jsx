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
import useSignup from '../hooks/useSignup';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm();

  const password = watch("password");

  const handleShowClick = () => setShowPassword(!showPassword);
  const { signup, loading } = useSignup();
  
  const onSubmit = async (data) => {
    try {
      const res = await signup(data);
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
        <Heading as="h2" size="lg" textAlign="center" mb={6} color="blue.300">
          Sign Up
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
        <FormControl id="password" mb={4} isInvalid={errors.password}>
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

        {/* Confirm Password Field */}
        <FormControl id="confirm-password" mb={6} isInvalid={errors.confirmPassword}>
          <FormLabel color="blue.300">Confirm Password</FormLabel>
          <Input
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword", { 
              required: "Confirm password is required",
              validate: value => value === password || "Passwords do not match"
            })}
          />
          {errors.confirmPassword && <Text color="red.500">{errors.confirmPassword.message}</Text>}
        </FormControl>

        {/* Sign Up Button */}
        <Button colorScheme="blue" width="full" mt={4} type="submit">
          Sign Up
        </Button>

        {/* Navigate to Login */}
        <Text mt={4} textAlign="center">
          Existing user? <Text as="span" color="blue.500" cursor="pointer" onClick={() => nav('/login')}>Login</Text>
        </Text>
      </Box>
    </form>
  );
};

export default SignUp;
