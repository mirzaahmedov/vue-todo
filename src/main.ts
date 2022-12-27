import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSquareCheck,
  faCircleCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";

import "./assets/main.css";

library.add(faSquareCheck);
library.add(faCircleCheck);
library.add(faTimes);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
