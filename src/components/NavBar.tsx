import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorModeButton } from "../ChakraComponents/ui/color-mode";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeButton colorPalette="yellow" />
    </HStack>
  );
};

export default NavBar;
