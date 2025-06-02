import {Flex, Image, Text} from "@chakra-ui/react";

const DailyLogins = () => {
    return (

    <Flex
        width="134px"
        height="73px"
        position="absolute"
        top="740px"
        left="723px"
        borderRadius="25px"
        bg="rgba(248, 248, 239, 0.6)"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        px={4}
    >
        <Flex position="relative" alignItems="center" justifyContent="center" width="100%">
            <Image
                w="24px"
                h="24px"
                src="https://img.icons8.com/?size=100&id=82747&format=png&color=000000"
                position="absolute"
                left="0px"
            />
            <Text
                fontFamily="Mulish"
                fontSize="15px"
                fontWeight="Bold"
                color="black"
            >
                267
        </Text>
        </Flex>

        <Text fontFamily="Mulish"
              fontSize="15px"
              fontWeight="medium"
              color="black"
              pt="4px"
        >
             Logins Today
        </Text>
    </Flex>
    );
};

export default DailyLogins;