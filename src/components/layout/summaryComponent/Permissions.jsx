import {Box, Flex, Image, Text} from "@chakra-ui/react";

const Permissions = () => {
    return (

    <Flex
        width="130px"
        height="73px"
        position="absolute"
        top="740px"
        // left="900px"
        borderRadius="25px"
        bg="rgba(248, 248, 239, 0.6)"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p={3}
        pl={5}
        display={{base: "block", md: "block", lg: "block", sm: "none"}}
        left={{base: "900px", lg: "870px"}}
        css={{
            '@media (min-width: 1440px)': {
                left: '900px',
                width: '134px',
            },
        }}
    >
        <Flex position="relative" alignItems="center" justifyContent="center" width="100%">
            <Image
                w="24px"
                h="24px"
                src="https://img.icons8.com/?size=100&id=14311&format=png&color=000000"
                position="absolute"
                left="0px"
            />
            <Text
                fontFamily="Mulish"
                fontSize="15px"
                fontWeight="Bold"
                color="black"
            >
                150
            </Text>
        </Flex>

        <Text fontFamily="Mulish"
              fontSize="15px"
              fontWeight="medium"
              color="black"
              pt="4px"
        >
            Permissions
        </Text>
    </Flex>

    );
};

export default Permissions;