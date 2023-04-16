const { contextBridge, ipcRenderer } = require("electron");

let bridge = {
  updateMessage: (callback) => ipcRenderer.on("updateMessage", callback),
  // replaceText: (callback) => ipcRenderer.on("replaceText", callback),
};

contextBridge.exposeInMainWorld("bridge", bridge);