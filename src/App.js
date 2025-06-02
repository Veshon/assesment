import './App.css';
import { Provider } from "./components/ui/provider";
import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import Logo from "./components/ui/Logo";
import UserTracker from "./components/layout/UserTracker";
import UserComponent from "./components/layout/UserComponent";
import ActiveUsers from "./components/layout/ActiveUsers";
import ActivityLog from "./components/layout/ActivityLog";
import Summary from "./components/layout/summaryComponent/Summary";
import OnlineUsers from "./components/layout/summaryComponent/OnlineUsers";
import DailyLogins from "./components/layout/summaryComponent/DailyLogins";
import Permissions from "./components/layout/summaryComponent/Permissions";
import Status from "./components/layout/Status";

function App() {
    return (
        <Provider>
            <Background />
            <Navbar/>
            <Logo/>
            <UserTracker/>
            <UserComponent/>
            <ActiveUsers/>
            <ActivityLog/>
            <Summary/>
            <OnlineUsers/>
            <DailyLogins/>
            <Permissions/>
            <Status/>
        </Provider>
    );
}

export default App;