import React from "react";
import { Button, Box, useColorMode } from "@chakra-ui/react";

const Darklightmode = () => {
  const { ColorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button onClick={toggleColorMode}>
        Toggle {ColorMode === "light" ? "Dark" : "light"}
      </Button>
    </Box>
  );
};

export default Darklightmode;
