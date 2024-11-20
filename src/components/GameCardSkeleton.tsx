import { Card, CardBody, CardRoot, Skeleton } from "@chakra-ui/react";
import React from "react";
import { SkeletonText } from "../ChakraComponents/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
