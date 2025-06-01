import { Box,Image, Button, VStack, Input, Center } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react';

const Dashboard = () => {
    return (
        <Box
            minH="150vh"
            bgGradient="linear-gradient(to left top, #FCEBB8 50%, white 100%)"
        >
            {/*/!*Notification btn*!/*/}
            {/*<Box*/}
            {/*    width="56px"*/}
            {/*    height="56px"*/}
            {/*    bgColor="#F8F8EF"*/}
            {/*    borderRadius="100%"*/}
            {/*    position="absolute"*/}
            {/*    right="31px"*/}
            {/*    top="26px"*/}

            {/*>*/}
            {/*</Box>*/}

            {/*Welcome Text*/}
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

export default Dashboard;