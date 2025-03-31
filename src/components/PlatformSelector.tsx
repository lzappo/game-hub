import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Box position="relative" display="inline-block">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            {selectedPlatform?.name || "Platforms"}{" "}
            <BsChevronDown style={{ marginLeft: "0.5rem" }} />
          </Button>
        </MenuTrigger>
        <MenuContent
          side="bottom"
          align="start"
          style={{
            position: "absolute",
            top: "100%",
            marginTop: "0.5rem",
            zIndex: 1000,
          }}
        >
          {data?.results.map((platform) => (
            <MenuItem
              onClick={() => setSelectedPlatformId(platform.id)}
              value={platform.id}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;
