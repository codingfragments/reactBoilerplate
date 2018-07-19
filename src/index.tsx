// import App from "./components/App";

// import { AppStart } from "./components/App";

import {registerPolyfills} from "./polyfill";

// Register all important polyfills
registerPolyfills();

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(8000).then(() => {
    import( /* webpackChunkName: "mainApp" */ "./components/App").then(App => {
        App.AppStart();
    });
});
delay(1000).then(() => {
    import( /* webpackChunkName: "secondApp" */ "./components/App2").then(App => {
        App.AppStart();
    });
});
