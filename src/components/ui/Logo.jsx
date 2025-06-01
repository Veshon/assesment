import {Box} from "@chakra-ui/react";
import { Text } from '@chakra-ui/react';

const Logo = () => {

    return (
        <Box
            width="137.11px"
            height="51px"
            borderRadius="100px"
            color="red"
            borderWidth="1px"
            borderColor="black"
            borderStyle="solid"
            position="absolute"
            left="31px"
            top="29px"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >

            <Text
                 color="black"
                 fontSize="23px"
                 fontWeight="Bold"
                 fontFamily="Mulish"
            >
                OCTOPUS
             </Text>
        </Box>

    );
};

export default Logo;