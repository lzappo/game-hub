import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "../ChakraComponents/ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <ColorModeButton colorPalette={"yellow"} />
    </HStack>
  );
};

export default NavBar;
