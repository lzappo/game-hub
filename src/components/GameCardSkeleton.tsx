import { Card, CardBody, CardRoot, Skeleton } from "@chakra-ui/react";
import React from "react";
import { SkeletonText } from "../ChakraComponents/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <CardRoot>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </CardRoot>
  );
};

export default GameCardSkeleton;
