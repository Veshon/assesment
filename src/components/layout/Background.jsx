import { Box } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react';

const Background = () => {
    return (
        <Box
            minH="100vh"
            // h="100%"
            bgGradient="linear-gradient(to left top, #FCEBB8 50%, white 100%)"
            h={{base: "100vh", sm: "360vh", md:"360vh", lg:"220vh"}}
            w={{md:"125vw"}}
            css={{
                '@media (min-width: 1440px)': {
                    height: '160vh',
                },
                '@media (min-width: 1366px)': {
                    height: '275vh',
                },
            }}
        >

            <Text fontSize="36px"
                  font color="black"
                  position="absolute"
                  left="31px"
                  // top="161px"
                  top={{base: "161px", sm: "120px", md: "161px" , lg: "161px"}}
            >
                Welcome in, Emma
            </Text>

        </Box>
    );
};

export default Background;