import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/main.css";
import {Hello} from "./components/hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);
