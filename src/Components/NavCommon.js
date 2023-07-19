import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavCommon = ({ direction }) => {
  return (
    <div>
      <Flex
        display={{ base: "none", md: "flex" }}
        direction={direction}
        justifyContent="center"
        alignItems="center"
      >
        <Box mr={4} className="hover-underline">
          <Link to="/">Home</Link>
        </Box>
        <Box mr="4">
          <Menu>
            <MenuButton
              as={Button}
              variant="link"
              rightIcon={<ChevronDownIcon />}
              style={{ color: "white" }}
              className="hover-underline"
            >
              Products
            </MenuButton>
            <MenuList>
              <MenuItem
                className="hover-underline"
                style={{ background: "black" }}
              >
                <Link to="/networking">Networking</Link>
              </MenuItem>
              <MenuItem
                className="hover-underline"
                style={{ background: "black" }}
              >
                <Link to="/steelFiles">Steel Files</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box mr="4">
          <Menu>
            <MenuButton
              as={Button}
              variant="link"
              rightIcon={<ChevronDownIcon />}
              style={{ color: "white" }}
              className="hover-underline"
            >
              Company
            </MenuButton>
            <MenuList>
              <MenuItem
                className="hover-underline"
                style={{ background: "black" }}
              >
                <Link to="/about">About</Link>
              </MenuItem>
              <MenuItem
                className="hover-underline"
                style={{ background: "black" }}
              >
                <Link to="/contact">Contact</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box mr={4}>
          <Input variant="flushed" placeholder="Search" />
        </Box>
      </Flex>
    </div>
  );
};

export { NavCommon };
