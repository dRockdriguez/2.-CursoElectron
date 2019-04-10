// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')


// envia el mensaje al processo channel1
ipcRenderer.send('channel1', 'Hello from renderer.js')

ipcRenderer.on('channel1', (e, args) => {
    console.log('Receiver ::: ' + args)
})

ipcRenderer.on('private', (e, args) => {
    console.log('Receiver private ::: ' + args)
})

let mainResponse = ipcRenderer.sendSync('sync-channel', 'Hola amigo sincrono')
console.log('Main response ::: ' + mainResponse)