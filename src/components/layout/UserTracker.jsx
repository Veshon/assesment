import {Box, Text, Flex} from "@chakra-ui/react";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import user4 from "../assets/images/user4.png";
import user5 from "../assets/images/user5.png";
import user6 from "../assets/images/user6.png";

const UserTracker = () => {
    return (
            <Box width="728px"
                 height="419px"
                 position="absolute"
                 top="309px"
                 // left="309px"
                 right="425.5px"
                 borderRadius="50px"
                 bg="rgba(248, 248, 239, 0.6)"
                 left={{base: "309px", sm: "10px", md: "309px" , lg: "280px"}}
                 css={{
                     '@media (min-width: 1440px)': {
                         left: '309px'
                     },
                 }}
            >
                <Flex justifyContent="center" alignItems="center">
                    <Box width="79px"
                         height="29px"
                         borderRadius="50px"
                         bg="white"
                         display="flex"
                         justifyContent="center"
                         alignItems="center"
                         fontFamily="Mulish"
                         fontSize="12px"
                         fontWeight="medium"
                         color="black"
                         pos="absolute"
                         top="24px"
                         left="35px"
                    >
                        April 2023
                    </Box>

                    <Box width="79px"
                         height="29px"
                         borderRadius="50px"
                         bg="white"
                         display="flex"
                         justifyContent="center"
                         alignItems="center"
                         fontFamily="Mulish"
                         fontSize="12px"
                         fontWeight="medium"
                         color="black"
                         pos="absolute"
                         top="24px"
                         right="35px"
                    >
                        June 2023
                    </Box>

                    <Flex
                        width="79px"
                        height="29px"
                        bg="transparent"
                        justifyContent="center"
                        alignItems="center"
                        position="absolute"
                        top="24px"
                    >
                        <Text fontFamily="Mulish"
                              fontSize="15px"
                              fontWeight="medium"
                              color="black"
                        >
                            May 2023
                        </Text>
                    </Flex>

                    {/*x axis*/}
                    <Flex w="33px" h="41" bg="transparent" justifyContent="center" alignItems="center" position="absolute" top="81px" left="53.3%">
                        <Text
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontWeigth="medium"
                            color="black"
                            textAlign="center"
                            pr="71px"
                        >
                            <Box w="1px" h="233px" bg="white" position="absolute" top="61px" left="-249px" border="1px dashed black"></Box>

                            Mon 18
                        </Text>
                        <Text
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontWeigth="medium"
                            color="black"
                            textAlign="center"
                            pr="71px"
                        >
                            <Box w="1px" h="233px" bg="white" position="absolute" top="61px" left="-154px" border="1px dashed black"></Box>

                            Tue 19
                        </Text>
                        <Text
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontWeigth="medium"
                            color="black"
                            textAlign="center"
                            pr="71px"

                        >
                            <Box w="1px" h="233px" bg="white" position="absolute" top="61px" left="-60px" border="1px dashed black"></Box>

                            Wed 20
                        </Text>

                        <Flex
                            w="200px"
                            h="43px"
                            bg="black"
                            position="absolute"
                            borderRadius="10px"
                            top="75px"
                            left="-230px"
                            justifyContent="center"
                            alignItems="flex-start"
                            px="10px"
                        >
                            <Flex direction="column" position="absolute" top="2px" left="0px">
                                <Text fontFamily="Mulish" fontSize="12px" fontWeight="semibold" pl="10px" color="white">Daily Active Users</Text>
                                <Text fontFamily="Mulish" fontSize="12px" fontWeight="semibold" pl="10px" color="#C0C0C0">Users,</Text>
                            </Flex>
                            <Box>
                                <Box w="31px"
                                     h="31px"
                                     position="absolute"
                                     top="5px"
                                     left="120px"
                                     backgroundImage={`url(${user1})`}
                                     backgroundSize="cover"
                                     borderRadius="100%"
                                     backgroundRepeat="no-repeat"
                                     borderWidth="2px"
                                     borderColor="black"
                                     p="2"
                                >
                                </Box>
                                <Box w="31px" h="31px"
                                     position="absolute"
                                     top="5px"
                                     left="145px"
                                     backgroundImage={`url(${user2})`}
                                     backgroundSize="cover"
                                     borderRadius="100%"
                                     backgroundRepeat="no-repeat"
                                     borderWidth="2px"
                                     borderColor="black"
                                     p="2"
                                >
                                </Box>
                                <Box w="31px" h="31px"
                                     position="absolute"
                                     top="5px"
                                     left="165px"
                                     backgroundImage={`url(${user3})`}
                                     backgroundSize="cover"
                                     borderRadius="100%"
                                     backgroundRepeat="no-repeat"
                                     borderWidth="2px"
                                     borderColor="black"
                                     p="2"
                                >
                                </Box>
                            </Box>
                        </Flex>

                        <Text
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontWeigth="medium"
                            color="black"
                            textAlign="center"
                            pr="71px"
                        >
                            <Box w="1px" h="233px" bg="white" position="absolute" top="61px" left="35px" border="1px dashed black"></Box>

                            Thu 21
                        </Text>
                        <Text
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontWeigth="medium"
                            color="black"
                            textAlign="center"
                            pr="71px"
                        >
                            <Box w="1px" h="233px" bg="white" position="absolute" top="61px" left="123px" border="1px dashed black"></Box>

                            Fri 22
                        </Text>

                        <Flex
                            w="220px"
                            h="43px"
                            bg="white"
                            position="absolute"
                            borderRadius="10px"
                            top="133px"
                            left="-30px"
                            justifyContent="center"
                            alignItems="flex-start"
                            px="10px"
                        >
                            <Flex direction="column" position="absolute" top="2px" left="0px">
                                <Text fontFamily="Mulish" fontSize="12px" fontWeight="semibold" pl="10px" color="black">Monthly Active Users</Text>
                                <Text fontFamily="Mulish" fontSize="12px" fontWeight="semibold" pl="10px" color="#2C2C2C">Users</Text>
                            </Flex>
                            <Box>
                                <Box w="31px" h="31px"
                                     position="absolute"
                                     top="5px"
                                     left="135px"
                                     backgroundImage={`url(${user4})`}
                                     backgroundSize="cover"
                                     borderRadius="100%"
                                     backgroundRepeat="no-repeat"
                                     borderWidth="2px"
                                     borderColor="white"
                                     p="2"
                                >
                                </Box>
                                <Box w="31px" h="31px"
                                     position="absolute"
                                     top="5px"
                                     left="160px"
                                     backgroundImage={`url(${user5})`}
                                     backgroundSize="cover"
                                     borderRadius="100%"
                                     backgroundRepeat="no-repeat"
                                     borderWidth="2px"
                                     borderColor="white"
                                     p="2"
                                >
                                </Box>
                                <Box w="31px" h="31px"
                                     position="absolute"
                                     top="5px"
                                     left="185px"
                                     backgroundImage={`url(${user6})`}
                                     backgroundSize="cover"
                                     borderRadius="100%"
                                     backgroundRepeat="no-repeat"
                                     borderWidth="2px"
                                     borderColor="white"
                                     p="2"
                                >
                                </Box>
                            </Box>
                        </Flex>

                        <Text
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontWeigth="medium"
                            color="black"
                            textAlign="center"
                            pr="71px"
                        >
                            <Box w="1px" h="233px" bg="white" position="absolute" top="61px" left="210px" border="1px dashed black"></Box>

                            Sat 23
                        </Text>
                    </Flex>

                    {/*y axis*/}
                    <Flex w="33px" h="41" bg="transparent" direction="column" justifyContent="center" alignItems="center" position="absolute" top="140px" left="60px">
                        <Text
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontWeigth="medium"
                            color="black"
                            textAlign="center"
                            pb="26px"
                        >
                            200
                        </Text>
                        <Text
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontWeigth="medium"
                            color="black"
                            textAlign="center"
                            pb="26px"
                        >
                            400
                        </Text>
                        <Text
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontWeigth="medium"
                            color="black"
                            textAlign="center"
                            pb="26px"
                        >
                            600
                        </Text>
                        <Text
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontWeigth="medium"
                            color="black"
                            textAlign="center"
                            pb="26px"
                        >
                            800
                        </Text>
                        <Text
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontWeigth="medium"
                            color="black"
                            textAlign="center"
                            pb="26px"
                        >
                            1000
                        </Text>
                        <Text
                            fontFamily="Mulish"
                            fontSize="12px"
                            fontWeigth="medium"
                            color="black"
                            textAlign="center"
                            pb="26px"
                        >
                            1200
                        </Text>
                    </Flex>
                </Flex>
            </Box>
    );
};

export default UserTracker;