// Import components
import { Route, Routes } from "solid-app-router";
import Navbar from "./components/Navbar";

// Import pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";

export default function App() {
    return <>
        <Navbar />

        <Routes>
            <Route path="/" component={Home} />
            <Route path="/blog" component={Blog} />
        </Routes>
    </>;
}
