import "./css/style.css"
import "./i18n/i18n.js"
import Sjokolator from "./components/Sjokolator.svelte"

const app = new Sjokolator({
  target: document.body
})

export default app
