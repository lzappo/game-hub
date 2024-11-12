import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body fontSize="2xl">{game.name}</Card.Body>
    </Card.Root>
  );
};

export default GameCard;
