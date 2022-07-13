// Import components
import { Route, Routes } from "solid-app-router";
import Sidebar from "./components/Sidebar";

// Import pages
import Home from "./pages/Home";

export default function App() {
    return <>
        <Sidebar />

        <Routes>
            <Route path="/" component={Home} />
        </Routes>
    </>;
}
