import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          order: by relevance <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>relevance</MenuItem>
        <MenuItem>date added</MenuItem>
        <MenuItem>name</MenuItem>
        <MenuItem>release date</MenuItem>
        <MenuItem>popularity</MenuItem>
        <MenuItem>avg rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
