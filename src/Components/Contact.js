import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  const toast = useToast();
  const sendMail = async (name, email, message) => {
    try {
      const result = await axios.post("http://localhost:5000/api/send", {
        name,
        email,
        message,
      });
      toast({
        title: `sent successfully`,
        status: "success",
        isClosable: true,
      });
      formik.setSubmitting(false);
    } catch (error) {
      console.log(error);
      toast({
        title: `some problem`,
        status: "error",
        isClosable: true,
      });
      formik.setSubmitting(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      const { name, email, message } = values;
      sendMail(name, email, message);
      return;
    },
  });

  return (
    <Box
      p={6}
      bg="gray.100"
      borderRadius="lg"
      style={{ background: "black", color: "white" }}
    >
      <Heading mb={4}>Contact Us</Heading>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4} align="start">
          <FormControl isInvalid={formik.touched.name && formik.errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              size="lg"
              autoComplete="off"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <Box color="red.500" fontSize="sm">
                {formik.errors.name}
              </Box>
            )}
          </FormControl>
          <FormControl isInvalid={formik.touched.email && formik.errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              size="lg"
              autoComplete="off"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <Box color="red.500" fontSize="sm">
                {formik.errors.email}
              </Box>
            )}
          </FormControl>
          <FormControl
            isInvalid={formik.touched.message && formik.errors.message}
          >
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              placeholder="Enter your message"
              size="lg"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <Box color="red.500" fontSize="sm">
                {formik.errors.message}
              </Box>
            )}
          </FormControl>
          <Button
            colorScheme="purple"
            size="lg"
            type="submit"
            isLoading={formik.isSubmitting}
          >
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactUs;
