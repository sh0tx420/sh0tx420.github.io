/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import Home from "./pages/Home";

render(
    () => (
        <Router>
            <Home />
        </Router>
    ),
    document.getElementById("root")
);
