import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSquareCheck,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";

import "./assets/main.css";

library.add(faSquareCheck);
library.add(faCircleCheck);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
