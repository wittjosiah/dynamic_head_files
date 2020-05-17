// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"
import {Socket} from "phoenix"
import NProgress from "nprogress"
import {LiveSocket} from "phoenix_live_view"

window.hooks = {
  LoadFile: {
    mounted() {
      const fileRef = document.createElement("script")
      const fileEvent = this.el.getAttribute("file-event")
      const filePath = this.el.getAttribute("file-path")
      const fileType = this.el.getAttribute("file-type")
      fileRef.setAttribute("src", filePath)
      fileRef.setAttribute("type", fileType)
      const head = document.getElementsByTagName("head")[0]
      const headNodes = Array.prototype.slice.call(head.childNodes)
      if (!headNodes.find((node) => node.src && node.src.endsWith(filePath))) {
        console.log("Appending File")
        head.appendChild(fileRef)
        window.hookContext = this
      } else if (fileEvent) {
        console.log("File Appended, Pushing Event")
        this.pushEvent(fileEvent)
      }
    },
  },
};

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {hooks: hooks, params: {_csrf_token: csrfToken}})

// Show progress bar on live navigation and form submits
window.addEventListener("phx:page-loading-start", info => NProgress.start())
window.addEventListener("phx:page-loading-stop", info => NProgress.done())

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)
window.liveSocket = liveSocket
