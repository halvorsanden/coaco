import "./css/style.css";
import './i18n.js';
import Sjokolator from "./components/Sjokolator.svelte";

const app = new Sjokolator({
  target: document.body
});

export default app;

// import "./js/sjokolator";
// import "./js/sjokolator-en";
