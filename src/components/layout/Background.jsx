import { Box } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react';

const Background = () => {
    return (
        <Box
            minH="150vh"
            bgGradient="linear-gradient(to left top, #FCEBB8 50%, white 100%)"
        >

            <Text fontSize="36px"
                  font color="black"
                  position="absolute"
                  left="31px"
                  top="161px"
            >
                Welcome in, Emma
            </Text>

        </Box>
    );
};

export default Background;