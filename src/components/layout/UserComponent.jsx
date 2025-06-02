import {Box, Stack, Text} from "@chakra-ui/react";
import loggedUser from "../assets/images/loggedUser.png";

const UserComponent = () => {
    return (
        <Box width="270px"
             height="417px"
             position="absolute"
             top="311px"
             left="31px"
             borderRadius="50px"
             bg="#F8F8EF"
             backgroundImage={`url(${loggedUser})`}
             backgroundSize="cover"
             backgroundPosition="center"
             backgroundRepeat="no-repeat"
             flexDirection="column"
             justifyContent="center"
             pl="5px"
        >

            <Stack
                width="260px"
                height="77px"
                bg="rgba(255, 255, 255, 0.3)"
                borderRadius="50px 50px 50px 50px"
                position="relative"
                top="335px"
                justifyContent="center"
                alignItems="flex-start"
                direction="column"
                pt="10px"
                pl="26px"
            >
                <Text
                    color="#222222"
                    fontFamily="Mulish"
                    fontWeight="semibold"
                    fontSize="20px"
                    lineHeight="1"
                >
                    Emma Rodrigo
                </Text>

                <Text
                    color="#4B4B4B"
                    fontFamily="Mulish"
                    fontWeight="semibold"
                    fontSize="20px"
                    mt="-8px"
                >
                    Project Manager
                </Text>
            </Stack>
        </Box>
    );
};

export default UserComponent;