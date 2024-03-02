import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Sudoclasses = () => {
  return (
    <Flex>
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
        borderRadius={"30px"}
        bgGradient="linear(to-r, green.200, pink.200 )"
        display={"block"}
        _hover={{
          background: "skyblue",
          // display={"none"}
        }}
      >
        <h1>This is a fifth box</h1>
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
        borderRadius={"30px"}
        bgGradient="linear(to-r, green.200, pink.200 )"
        // display={"none"}
        display={"block"}
        _hover={{
          background: "pink",
        }}

              //   color decoration ussing usecolomode import
              
              
      >
        <h1>This is a sixth box</h1>
      </Box>
    </Flex>
  );
};

export default Sudoclasses;
