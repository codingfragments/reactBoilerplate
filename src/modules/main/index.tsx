import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../styles/main.css";
import "antd/dist/antd.css";
import { Hello } from "../../components/hello";
import { MainContext, StaticContext } from "../../services/basic";

export function AppStart() {
    console.log("AppStarted");

    ReactDOM.render(
        <Hello compiler="TypeScript" framework="React" />,
        document.getElementById("app")
    );
}
