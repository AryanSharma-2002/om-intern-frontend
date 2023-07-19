import { Box, Flex, Text, ChakraProvider, Icon } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Box bg="#f4f4f4" p="1rem" color="#333">
        <Flex justifyContent="space-between" flexWrap="wrap" gap="2rem">
          <Box flex="1 1 30%">
            <Text as="h3" fontSize="1.2rem" mb="1rem">
              About Us
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
          <Box flex="1 1 30%">
            <Text as="h3" fontSize="1.2rem" mb="1rem">
              Contact
            </Text>
            <Flex alignItems="center">
              <EmailIcon mr="0.5rem" />
              <Text>Email: info@example.com</Text>
            </Flex>
            <Flex alignItems="center">
              <PhoneIcon mr="0.5rem" />
              <Text>Phone: 123-456-7890</Text>
            </Flex>
          </Box>
          <Box flex="1 1 30%">
            <Text as="h3" fontSize="1.2rem" mb="1rem">
              Follow Us
            </Text>
            <Flex alignItems="center">
              <ChakraProvider>
                <a href="#">
                  <Icon as={FaFacebook} boxSize={6} mr="0.5rem" />
                </a>
                <a href="#">
                  <Icon as={FaTwitter} boxSize={6} mr="0.5rem" />
                </a>
                <a href="#">
                  <Icon as={FaInstagram} boxSize={6} mr="0.5rem" />
                </a>
              </ChakraProvider>
            </Flex>
          </Box>
        </Flex>
        <Box mt="1rem" textAlign="center">
          <Text>&copy; 2023 Your Shop. All rights reserved.</Text>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
