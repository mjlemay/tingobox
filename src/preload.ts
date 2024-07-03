const { contextBridge } = require('electron');
import { getProjects } from './services/projectService';

export {};
const versionsCheckArr = ['chrome', 'node', 'electron'];
contextBridge.exposeInMainWorld('getProjects', getProjects);

window.addEventListener('DOMContentLoaded', () => {

  for (const type of versionsCheckArr) {
    console.log(`${type}-version`, process.versions[type]);
  }
})