import { createApp, ref } from "vue";
import App from "./App.vue";
import Cleave from "cleave-lite";
import { createRouter, createWebHistory } from "vue-router";
import ToastInstaller from "@finn-no/fabric-vue-toast";
import { ShowToken, VariantHeading, SectionHeader } from "./util.js";
import DocsTable from "./DocsTable.vue";

import Home from "./examples/Home.vue";
import Icons from "./examples/Icons.vue";
import Button from "./examples/Button.vue";
import Slider from "./examples/Slider.vue";
import Switch from "./examples/Switch.vue";
import Toast from "./examples/Toast.vue";
import Modal from "./examples/Modal.vue";
import Breadcrumbs from "./examples/Breadcrumbs.vue";
import Form from "./examples/Form.vue";
import Box from "./examples/Box.vue";
import Card from "./examples/Card.vue";
import Tabs from "./examples/Tabs.vue";
import Expandable from "./examples/Expandable.vue";
import Steps from "./examples/Steps.vue";

const routes = [
  { path: "/fabric-vue/", component: Home, name: 'home' },
  { path: "/fabric-vue/icons", component: Icons, name: 'icons' },
  { path: "/fabric-vue/button", component: Button, name: 'button' },
  { path: "/fabric-vue/slider", component: Slider, name: 'slider' },
  { path: "/fabric-vue/switch", component: Switch, name: 'switch' },
  { path: "/fabric-vue/toast", component: Toast, name: 'toast' },
  { path: "/fabric-vue/modal", component: Modal, name: 'modal' },
  { path: "/fabric-vue/breadcrumbs", component: Breadcrumbs, name: 'breadcrumbs' },
  { path: "/fabric-vue/forms", component: Form, name: 'forms' },
  { path: "/fabric-vue/box", component: Box, name: 'box' },
  { path: "/fabric-vue/card", component: Card, name: 'card' },
  { path: "/fabric-vue/tabs", component: Tabs, name: 'tabs' },
  { path: "/fabric-vue/expandable", component: Expandable, name: 'expandable' },
  { path: "/fabric-vue/steps", component: Steps, name: 'steps' },
];

const scrollBehavior = () => ({ top: 0 });
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

createApp(App)
  .provide("Cleave", Cleave)
  .component("show-token", ShowToken)
  .component("variant-heading", VariantHeading)
  .component("section-header", SectionHeader)
  .component("docs-table", DocsTable)
  .use(router)
  .use(ToastInstaller)
  .mount("#app");
