import { createApp } from "vue";
import "./assets/scss/style.scss";
import * as bootstrap from "bootstrap";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faPaperPlane);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
