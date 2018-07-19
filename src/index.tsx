// import App from "./components/App";

import * as ES6Promise from "es6-promise";
// import { AppStart } from "./components/App";

ES6Promise.polyfill();

import( /* webpackChunkName: "mainApp" */ "./components/App").then(App => {
    App.AppStart();
});
import (/* webpackChunkName: "secondApp" */ "./components/App2").then(App => {
    App.AppStart();
});
