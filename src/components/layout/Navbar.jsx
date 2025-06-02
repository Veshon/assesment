import {Box, Button, Image} from "@chakra-ui/react";
import notificationIcon from "../assets/images/notificationIcon.png";

const Navbar = () => {
    return (
        <Box width="562px"
             height="56px"
             bgColor="#F8F8EF"
             borderRadius="70px"
             position="absolute"
             right="109px"
             top="26px"
             display="flex"
             alignItems="center"
             justifyContent="space-between"
             px={4}
        >

            {/* Dashboard btn */}
            <Button
                bg="#F8F8EF"
                fontFamily="Mulish"
                fontSize="15px"
                fontWeight="bold"
                borderRadius="full"
                _hover={
                    { bg: "black",
                        color: "white"
                    }
                }

            >
                Dashboard
            </Button>

            {/*  Data lab btn */}
            <Button
                bg="#F8F8EF"
                fontFamily="Mulish"
                fontSize="15px"
                fontWeight="bold"
                borderRadius="full"
                _hover={
                    { bg: "black",
                        color: "white"
                    }
                }

            >
                Data lab
            </Button>

            {/* Surveys btn */}
            <Button
                bg="#F8F8EF"
                fontFamily="Mulish"
                fontSize="15px"
                fontWeight="bold"
                borderRadius="full"
                _hover={
                    { bg: "black",
                        color: "white"
                    }
                }
            >
                Surveys
            </Button>

            {/* Library btn */}
            <Button
                bg="#F8F8EF"
                fontFamily="Mulish"
                fontSize="15px"
                fontWeight="bold"
                borderRadius="full"
                _hover={
                    { bg: "black",
                        color: "white"
                    }
                }
            >
                Library
            </Button>

            {/* Market Place btn */}
            <Button
                bg="#F8F8EF"
                fontFamily="Mulish"
                fontSize="15px"
                fontWeight="bold"
                borderRadius="full"
                _hover={
                    { bg: "black",
                        color: "white"
                    }
                }
            >
                Market Place
            </Button>

            {/*Notification btn*/}
            <Button
                width="56px"
                height="56px"
                bgColor="#F8F8EF"
                borderRadius="100%"
                position="absolute"
                right="-78px"
                top=""
                display="flex"
                justifyContent="center"
                alignItems="center"
                _hover={{
                    bg: "black",
                    "& img": {
                        content: `url(${notificationIcon})`
                    }
                }}
            >
                <Image
                    width="22px"
                    height="22px"
                    src="https://cdn-icons-png.freepik.com/256/1827/1827392.png?ga=GA1.1.1370232641.1740800375&semt=ais_hybrid"
                    alt="Notification Icon"
                />

            </Button>
        </Box>
    );
};

export default Navbar;