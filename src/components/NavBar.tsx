import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "../ChakraComponents/ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput />
      <ColorModeButton colorPalette={"yellow"} />
    </HStack>
  );
};

export default NavBar;
