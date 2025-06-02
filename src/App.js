import './App.css';
import { Provider } from "./components/ui/provider";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Layout/Navbar";
import Logo from "./components/ui/Logo";
import UserActivityTracker from "./components/Layout/UserActivityTracker";
import UserComponent from "./components/Layout/UserComponent";
import ActiveUsers from "./components/Layout/ActiveUsers";
import ActivityLog from "./components/Layout/ActivityLog";
import Summary from "./components/Layout/SummaryComponent/Summary";
import UsersOnline from "./components/Layout/SummaryComponent/UsersOnline";
import DailyLogins from "./components/Layout/SummaryComponent/DailyLogins";
import Permissions from "./components/Layout/SummaryComponent/Permissions";
import Status from "./components/Layout/Status";
import Test from "./components/TestDashboard";

function App() {
    return (
        <Provider>
            <Dashboard />
            <Navbar/>
            <Logo/>
            <UserActivityTracker/>
            <UserComponent/>
            <ActiveUsers/>
            <ActivityLog/>
            <Summary/>
            <UsersOnline/>
            <DailyLogins/>
            <Permissions/>
            <Status/>
            {/*<Test/>*/}
        </Provider>
    );
}

export default App;