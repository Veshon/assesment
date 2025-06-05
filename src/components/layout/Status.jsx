import {Box, Image} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

const status = () => {
 return(
     <Box width="483px"
          height="89px"
          bg="transparent"
          position="absolute"
          // top="139px"
          right="31px"
          top={{base: "139px", sm: "200px", md: "161px" , lg: "161px"}}
          css={{
              '@media (min-width: 1520px)': {
                  left: '830px'
              }
          }}
     >
         {/* 3 Sub boxes */}
         <Flex
             width="100%"
             height="100%"
             justify="space-between"
             gap="29px"
             align="center"
             direction="row"
         >
             {/* 1st Box */}
             <Box width="129px"
                  height="89px"
                  bg="transparent"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  paddingBottom="16px"
                  gap="0px"
             >
                 <Flex alignItems="center">
                     <Image
                         rounded="md"
                         width="24.74px"
                         height="24.74px"
                         src="https://img.icons8.com/?size=100&id=15265&format=png&color=000000"
                         alt="User Icon"
                         position="absolute"
                         left="0px"
                     />
                     <Text color="black" fontFamily="Mulish" fontSize="40px" fontWeight="light">301</Text>
                 </Flex>

                 <Text color="black" fontFamily="Mulish" fontSize="13px" fontWeight="Bold" mt="-10px">Daily active users</Text>
                 <Text color="black" fontFamily="Mulish" fontSize="13px" fontWeight="medium" mt="10px">20 May 2023</Text>

             </Box>

             {/* 2nd box */}
             <Box width="129px"
                  height="89px"
                  bg="transparent"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  paddingBottom="16px"
                  gap="0px"
             >
                 <Flex alignItems="center">
                     <Image
                         rounded="md"
                         width="24.74px"
                         height="24.74px"
                         src="https://cdn-icons-png.freepik.com/256/9327/9327825.png?ga=GA1.1.1370232641.1740800375&semt=ais_hybrid"
                         alt="Users Icon"
                         position="absolute"
                         left="160px"
                     />
                     <Text color="black" fontFamily="Mulish" fontSize="40px" fontWeight="light">671</Text>
                 </Flex>

                 <Text color="black" fontFamily="Mulish" fontSize="13px" fontWeight="Bold" mt="-10px">Monthly active users</Text>
                 <Text color="black" fontFamily="Mulish" fontSize="13px" fontWeight="medium" mt="10px">20 May 2023</Text>

             </Box>

             {/* 3rd box */}
             <Box width="auto"
                  height="auto"
                  bg="transparent"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  paddingBottom="16px"
                  gap="0px"
             >

                 <Flex alignItems="center">
                     <Image
                         rounded="md"
                         width="24px"
                         height="24px"
                         src="https://img.icons8.com/?size=100&id=16153&format=png&color=000000"
                         alt="Clock Icon"
                         position="absolute"
                         left="335px"
                     />
                     <Text color="black" fontFamily="Mulish" fontSize="40px" fontWeight="light">301</Text>
                 </Flex>

                 <Text color="black" fontFamily="Mulish" fontSize="13px" fontWeight="Bold" mt="-10px">Daily time per active user</Text>
                 <Text color="black" fontFamily="Mulish" fontSize="13px" fontWeight="medium" mt="10px">20 May 2023</Text>

             </Box>
         </Flex>
     </Box>
 )
}

export default status;