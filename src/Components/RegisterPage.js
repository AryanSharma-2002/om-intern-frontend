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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import {
  EmailIcon,
  LockIcon,
  ViewIcon,
  ViewOffIcon,
  PhoneIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      mobile: Yup.string().required("Mobile number is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirmation is required"),
    }),
    onSubmit: (values) => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    },
  });

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
            Register
          </Heading>
          {isSubmitted && (
            <Alert status="success" rounded="md">
              <AlertIcon />
              Registration successful!
            </Alert>
          )}
          <form onSubmit={formik.handleSubmit}>
            <FormControl isInvalid={formik.touched.name && formik.errors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                type="text"
                id="name"
                placeholder="Enter your name"
                size="lg"
                autoComplete="off"
                autoFocus
                required
                {...formik.getFieldProps("name")}
                leftIcon={<MoonIcon color="gray.500" />}
              />
              {formik.touched.name && formik.errors.name && (
                <Alert status="error" rounded="md" fontSize="sm">
                  <AlertIcon />
                  {formik.errors.name}
                </Alert>
              )}
            </FormControl>
            <FormControl
              isInvalid={formik.touched.email && formik.errors.email}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                size="lg"
                autoComplete="off"
                required
                {...formik.getFieldProps("email")}
                leftIcon={<EmailIcon color="gray.500" />}
              />
              {formik.touched.email && formik.errors.email && (
                <Alert status="error" rounded="md" fontSize="sm">
                  <AlertIcon />
                  {formik.errors.email}
                </Alert>
              )}
            </FormControl>
            <FormControl
              isInvalid={formik.touched.mobile && formik.errors.mobile}
            >
              <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
              <InputGroup size="lg">
                <Input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  required
                  pr="4.5rem"
                  {...formik.getFieldProps("mobile")}
                  leftIcon={<PhoneIcon color="gray.500" />}
                />
              </InputGroup>
              {formik.touched.mobile && formik.errors.mobile && (
                <Alert status="error" rounded="md" fontSize="sm">
                  <AlertIcon />
                  {formik.errors.mobile}
                </Alert>
              )}
            </FormControl>
            <FormControl
              isInvalid={formik.touched.password && formik.errors.password}
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup size="lg">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  required
                  pr="4.5rem"
                  {...formik.getFieldProps("password")}
                  leftIcon={<LockIcon color="gray.500" />}
                />
                <InputRightElement width="4.5rem">
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    onClick={handleTogglePassword}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    variant="ghost"
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  />
                </InputRightElement>
              </InputGroup>
              {formik.touched.password && formik.errors.password && (
                <Alert status="error" rounded="md" fontSize="sm">
                  <AlertIcon />
                  {formik.errors.password}
                </Alert>
              )}
            </FormControl>
            <FormControl
              isInvalid={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            >
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <InputGroup size="lg">
                <Input
                  type={showConfirmation ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  required
                  pr="4.5rem"
                  {...formik.getFieldProps("confirmPassword")}
                  leftIcon={<LockIcon color="gray.500" />}
                />
                <InputRightElement width="4.5rem">
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    onClick={handleToggleConfirmation}
                    aria-label={
                      showConfirmation
                        ? "Hide confirmation"
                        : "Show confirmation"
                    }
                    variant="ghost"
                    icon={showConfirmation ? <ViewOffIcon /> : <ViewIcon />}
                  />
                </InputRightElement>
              </InputGroup>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <Alert status="error" rounded="md" fontSize="sm">
                    <AlertIcon />
                    {formik.errors.confirmPassword}
                  </Alert>
                )}
            </FormControl>
            <Button
              colorScheme="purple"
              size="lg"
              width="full"
              mt={4}
              type="submit"
              isLoading={formik.isSubmitting}
            >
              Register
            </Button>
          </form>
        </VStack>
      </Box>
    </Box>
  );
};

export default RegisterPage;
