// import App from "./components/App";

// import { AppStart } from "./components/App";

import { registerPolyfills } from "./polyfill";

// Register all important polyfills
registerPolyfills();

let loadMain = import(/* webpackChunkName: "mainApp" */ "./modules/main").then(App => {
    App.AppStart();
});

Promise.all([loadMain]).then(loaded => {
    console.log("Element Loaded")
}).catch( objectLoaded => {
    console.error("Error while loading objects")
})



