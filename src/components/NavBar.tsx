import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "../ChakraComponents/ui/color-mode";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        objectFit="cover"
        cursor="pointer"
        onClick={() => {
          window.location.href = "/";
        }}
      />
      <SearchInput />
      <ColorModeButton colorPalette="yellow" />
    </HStack>
  );
};

export default NavBar;
