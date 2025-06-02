import {Box, SimpleGrid} from "@chakra-ui/react"

export default function TestDashboard() {

    return (
        <SimpleGrid p="10px" gap="10px">
            <Box height="200px" bg="#F8F8EF" opacity="60%" borderRadius="50px" lg="300px" sm="100px"></Box>
            <Box height="200px" bg="#F8F8EF" opacity="60%" borderRadius="50px"></Box>
        </SimpleGrid>
    )
}