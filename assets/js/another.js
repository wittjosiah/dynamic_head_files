hooks.Another = {
  mounted() {
    console.log("mounted!")
  }
}

hookContext.pushEvent("script_loaded")
window.hookContext = undefined
