import {Box, Button, Flex, Spacer, Text, VStack} from "@chakra-ui/react";
import profilePic1 from "../assets/images/profilePic1.png";
import profilePic2 from "../assets/images/profilePic2.png";
import profilePic3 from "../assets/images/profilePic3.png";

const ActivityLog = () => {
    return (
        <Flex width="514px"
              height="348px"
              position="absolute"
              top="740px"
              // left="31px"
              borderRadius="50px"
              bg="rgba(248, 248, 239, 0.6)"
              flexDirection="column"
              left={{base: "31px", lg: "11px"}}
              css={{
                  '@media (min-width: 1440px)': {
                      left: '31px'
                  },
              }}
        >
            <Box width="auto" display="flex" justifyContent="center" p="13px">
                <Text fontSize="15px"
                      fontFamily="Mulish"
                      fontWeight="semibold"
                      color="black"
                      pb="15px"

                >
                    Activity Log
                </Text>
                <Flex justifyContect="center">
                    <Button
                        w="20px"
                        h="20px"
                        border="2px solid #F8F8EF"
                        bg="#F8F8EF"
                        borderRadius="100%"
                        backgroundImage="url(https://img.icons8.com/?size=100&id=59878&format=png&color=000000)"
                        backgroundSize="cover"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        position="absolute"
                        left="404px"
                        p={0}
                        minW="20px"
                    />
                    <Button
                        w="20px"
                        h="20px"
                        border="2px solid #F8F8EF"
                        bg="#F8F8EF"
                        borderRadius="100%"
                        backgroundImage="url(https://img.icons8.com/?size=100&id=18636&format=png&color=000000)"
                        backgroundSize="cover"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        position="absolute"
                        left="442px"
                        p={0}
                        minW="20px"
                    />
                </Flex>
            </Box>

            <VStack align="flex-start" pl="35px">
                <Box>
                    <Flex w="auto" h="auto" alignItems="center">
                        <Box w="42px" h="42px"
                             borderRadius="100%"
                             bg="yellow"
                             backgroundImage={`url(${profilePic1})`}
                             backgroundSize="cover"
                             backgroundPosition="center"
                             backgroundRepeat="no-repeat"
                        ></Box>
                        <VStack align="flex-start" pl="10px">
                            <Text fontWeight="bold" fontFamily="Mulish" fontSize="13px" color="black">Emma Successfully logged in</Text>
                            <Spacer mb="-13px" />
                            <Text fontWeight="medium" fontFamily="Mulish" fontSize="12px" color="black">2hrs ago</Text>
                        </VStack>
                    </Flex>

                    <Spacer mt="20px"/>

                    <Flex w="auto" h="auto" alignItems="center">
                        <Box w="42px" h="42px"
                             borderRadius="100%"
                             bg="yellow"
                             backgroundImage={`url(${profilePic2})`}
                             backgroundSize="cover"
                             backgroundPosition="center"
                             backgroundRepeat="no-repeat"
                        ></Box>
                        <VStack align="flex-start" pl="10px">
                            <Text fontWeight="bold" fontFamily="Mulish" fontSize="13px" color="black">Sam changed permissions to admin</Text>
                            <Spacer mb="-13px" />
                            <Box w="110px" h="19px" borderRadius="5px" display="flex" alignItems="center" justifyContent="center" bg="#DBEAFE" fontWeight="medium" fontFamily="Mulish" fontSize="12px" color="#1D4ED8">Permission change</Box>
                            <Spacer mb="-13px" />
                            <Text fontWeight="medium" fontFamily="Mulish" fontSize="12px" color="black">4hrs ago</Text>
                        </VStack>
                    </Flex>

                    <Spacer mt="20px"/>

                    <Flex w="auto" h="auto" alignItems="center">
                        <Box w="42px" h="42px"
                             borderRadius="100%"
                             bg="yellow"
                             backgroundImage={`url(${profilePic3})`}
                             backgroundSize="cover"
                             backgroundPosition="center"
                             backgroundRepeat="no-repeat"
                        ></Box>
                        <VStack align="flex-start" pl="10px">
                            <Text fontWeight="bold" fontFamily="Mulish" fontSize="13px" color="black">Sam changed permissions to admin</Text>
                            <Spacer mb="-13px" />
                            <Box w="110px" h="19px" borderRadius="5px" display="flex" alignItems="center" justifyContent="center" bg="#DBEAFE" fontWeight="medium" fontFamily="Mulish" fontSize="12px" color="#1D4ED8">Permission change</Box>
                            <Spacer mb="-13px" />
                            <Text fontWeight="medium" fontFamily="Mulish" fontSize="12px" color="black">8hrs ago</Text>
                        </VStack>
                    </Flex>

                    <Spacer mt="20px"/>

                    <Flex w="auto" h="auto" alignItems="center">
                        <Box w="42px" h="42px"
                             borderRadius="100%"
                             backgroundImage={`url(https://images.unsplash.com/photo-1520699713260-70e01f7c2998?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}
                             backgroundSize="cover"
                             backgroundPosition="center"
                             backgroundRepeat="no-repeat"
                        ></Box>
                        <VStack align="flex-start" pl="10px">
                            <Text fontWeight="bold" fontFamily="Mulish" fontSize="13px" color="black">Emily Successfully logged in</Text>
                            <Spacer mb="-13px" />
                            <Text fontWeight="medium" fontFamily="Mulish" fontSize="12px" color="black">20hrs ago</Text>
                        </VStack>
                    </Flex>

                </Box>
            </VStack>
        </Flex>
    );
};

export default ActivityLog;