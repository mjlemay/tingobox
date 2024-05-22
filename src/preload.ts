/**
 * The preload script runs before `index.html` is loaded
 * in the renderer. It has access to web APIs as well as
 * Electron's renderer process modules and some polyfilled
 * Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const versionsCheckArr = ['chrome', 'node', 'electron'];

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector:string, text:string) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const packageType of versionsCheckArr) {
    replaceText(`${packageType}-version`, process.versions['electron']!)
  }
})