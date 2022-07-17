// Import components
import { Route, Routes } from "solid-app-router";
import Navbar from "./components/Navbar";

// Import pages
import Home from "./pages/Home";

export default function App() {
    return <>
        <Navbar />

        <Routes>
            <Route path="/" component={Home} />
        </Routes>
    </>;
}
