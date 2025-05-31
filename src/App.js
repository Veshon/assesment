import './App.css';
import { Provider } from "./components/ui/provider";
import { Button, HStack } from "@chakra-ui/react";

function App() {
    const Demo = () => {
        return (
            <HStack>
                <Button>Click me</Button>
                <Button>Click me</Button>
            </HStack>
        );
    };

    return (
        <Provider>
            <Demo />
        </Provider>
    );
}

export default App;