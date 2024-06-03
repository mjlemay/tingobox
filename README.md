# TINGOBOX

A BOX OF WONDERS

## File Overview
- `package.json` - Points to the app's main file and lists its details and dependencies.
- `/src/main.ts` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `/src/preload.ts` - A content script that runs before the renderer process loads.
- `/src/render.ts` - a file to run the **renderer process** (eg. React).
- `index.html` - A web page to render. This is the app's **renderer process**.

## To Use
Install the node dependencies and run the start command!
``
npm install
npm start
``

To build, try
``
npm make
``

This will save to a `/out` folder for you to distribute.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [Electron Fiddle](https://electronjs.org/fiddle) - Electron Fiddle, an app to test small Electron experiments
- [Tutorial](https://electronjs.org/docs/latest/tutorial/tutorial-prerequisites) - learn more