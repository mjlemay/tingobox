const { contextBridge } = require('electron');
const projectDB = require('./services/projectService');

const versionsCheckArr = ['chrome', 'node', 'electron'];

contextBridge.exposeInMainWorld('sqlite', {
  projectDB,
})

window.addEventListener('DOMContentLoaded', () => {

  for (const type of ['chrome', 'node', 'electron']) {
    console.log(`${type}-version`, process.versions[type]);
  }
})