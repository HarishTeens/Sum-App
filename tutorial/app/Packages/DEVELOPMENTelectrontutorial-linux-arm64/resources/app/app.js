const { app, BrowserWindow, ipcMain} =require('electron');
const path=require('path');
const url=require('url');
const ffmpeg=require('fluent-ffmpeg');

//main window variable
let mainWindow;

//TUrn on the app
app.on('ready',()=>{

    mainWindow = new BrowserWindow({});    

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname+'/index.html'),
        protocol: 'file',
        slashes: true
    }));

    

});

ipcMain.on('numbers:submit',(event, num)=>{
    var value=num.num1+num.num2;
    mainWindow.webContents.send('sum:send',value);
})

//quit when all windows are closed
app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit();
    }
})