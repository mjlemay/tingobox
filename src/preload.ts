const { contextBridge } = require('electron');
import { projectData } from './services/projectService';

export {};
const versionsCheckArr = ['chrome', 'node', 'electron'];
contextBridge.exposeInMainWorld('projectData', projectData);

window.addEventListener('DOMContentLoaded', () => {

  for (const type of versionsCheckArr) {
    console.log(`${type}-version`, process.versions[type]);
  }
})