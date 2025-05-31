import { Button, HStack } from "@chakra-ui/react";

const Dashboard = () => {
    return (
        <HStack spacing={4}>
            <Button colorScheme="blue">Click me</Button>
            <Button colorScheme="green">Click me</Button>
        </HStack>
    );
};

export default Dashboard;