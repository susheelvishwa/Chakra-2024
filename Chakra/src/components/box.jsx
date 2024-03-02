import React from "react";
import { Box, Grid } from "@chakra-ui/react";

const Boxx = () => {
  return (
    <Grid>
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
        borderRadius={"30px"}
        boxShadow={"10px 10px pink"}
        textShadow={"5px 5px white"}
        filter={"auto"}
        blur={"1px"}
        // position={"relative"}
        // display={"none"}
        bgGradient="linear(to-r, green.200, pink.200 )"
        display={"block"}
      >
        <h1>This is a third box</h1>
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
        brightness={"3px"}
        // position={"absolute"}
        bgGradient="linear(to-r, green.200, pink.200 )"
        // display={"none"}
        display={"block"}
      >
        <h1>This is a forth box</h1>
      </Box>

      
    </Grid>
  );
};

export default Boxx;
