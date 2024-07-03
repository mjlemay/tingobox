const { contextBridge } = require('electron');
import { getProjects, addProject } from './services/projectService';

export {};
const versionsCheckArr = ['chrome', 'node', 'electron'];
contextBridge.exposeInMainWorld('getProjects', getProjects);
contextBridge.exposeInMainWorld('addProject', addProject);

window.addEventListener('DOMContentLoaded', () => {

  for (const type of versionsCheckArr) {
    console.log(`${type}-version`, process.versions[type]);
  }
})