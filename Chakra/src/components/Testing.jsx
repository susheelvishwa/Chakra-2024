import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Testing = () => {
  return (
    <Flex>
      <Box
        m={5}
        p={5}
        color={"Black"}
        bg={"black"}
        fontFamily={"cursive"}
        w={"500px"}
        h={"500px"}
        maxH={"150px"}
        minW={"300px"}
        borderBlock={"5px"}
        bgGradient="linear(to-r, green.200, pink.200 )"
        // display={"none"}

        display={"block"}
      >
        <h1>This is a First box</h1>
      </Box>
      <Box
        m={5}
        p={5}
        color={"Black"}
        bg={"black"}
        fontFamily={"cursive"}
        w={"500px"}
        h={"150px"}
        maxH={"400px"}
        minW={"300px"}
        borderBlock={"5px"}
        bgGradient="linear(to-r, green.200, pink.200 )"
        // display={"none"}
        display={"block"}
      >
        <h1>This is a Secound box</h1>
      </Box>
    </Flex>
  );
};

export default Testing;
