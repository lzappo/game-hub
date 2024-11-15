import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body fontSize="2xl">{game.name}</Card.Body>
      <PlatformIconList
        platforms={game.parent_platforms.map((p) => p.platform)}
      />
    </Card.Root>
  );
};

export default GameCard;
