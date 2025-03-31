import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Box position="relative" display="inline-block">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            Order by: {currentSortOrder?.label || "Relevance"}{" "}
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
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => setSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default SortSelector;
