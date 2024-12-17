import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
    sega: SiSega,
  };

  return (
    <HStack flexWrap="wrap">
      {platforms.map((platform) => {
        const PlatformIcon = iconMap[platform.slug] || BsGlobe;

        return (
          <Box
            as={PlatformIcon}
            key={platform.id}
            fontSize="md"
            color="gray.500"
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
