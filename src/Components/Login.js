import { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      padding={4}
      bgGradient="linear(to right, #667eea, #764ba2)"
    >
      <Box
        width={{ base: "90%", sm: "400px" }}
        p={6}
        borderRadius="lg"
        bg="white"
        boxShadow="lg"
      >
        <VStack spacing={4}>
          <Heading size="lg" textAlign="center" color="gray.800">
            Login
          </Heading>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              size="lg"
              autoComplete="off"
              autoFocus
              required
              leftIcon={<EmailIcon color="gray.500" />}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size="lg">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                required
                pr="4.5rem"
                leftIcon={<LockIcon color="gray.500" />}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  onClick={handleTogglePassword}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  variant="ghost"
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button colorScheme="purple" size="lg" width="full" mt={4}>
            Login
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default LoginPage;
