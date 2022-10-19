import { environment } from '../environments/environment';
import { rendererAppName, rendererAppPort } from './constants';
import { app, BrowserWindow, shell, screen } from 'electron';
import { join } from 'path';
import { format } from 'url';

app.disableHardwareAcceleration();

export default class App {
  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  static BrowserWindow;

  public static isDevelopmentMode() {
    const isEnvironmentSet: boolean = 'ELECTRON_IS_DEV' in process.env;
    const getFromEnvironment: boolean = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;
    return isEnvironmentSet ? getFromEnvironment : !environment.production;
  }

  private static onWindowAllClosed() {
    if (process.platform !== 'darwin') {
      App.application.quit();
    }
  }

  private static onClose() {
    App.mainWindow = null;
  }

  private static onRedirect(event: any, url: string) {
    if (url !== App.mainWindow.webContents.getURL()) {
      event.preventDefault();
      shell.openExternal(url).then();
    }
  }

  private static onReady() {
    App.initMainWindow();
    App.loadMainWindow();
  }

  private static onActivate() {
    if (App.mainWindow === null) {
      App.onReady();
    }
  }

  private static initMainWindow() {
    const workAreaSize = screen.getPrimaryDisplay().workAreaSize;
    const width = Math.min(1280, workAreaSize.width || 1280);
    const height = Math.min(1024, workAreaSize.height || 1024);

    App.mainWindow = new BrowserWindow({
      width: width,
      height: height,
      show: false,
      frame: false,
      webPreferences: {
        contextIsolation: false,
        backgroundThrottling: false,
        nodeIntegration: true,
      },
    });
    App.mainWindow.setMenu(null);
    App.mainWindow.center();

    App.mainWindow.once('ready-to-show', () => {
      App.mainWindow.show();
    });

    App.mainWindow.on('closed', () => {
      App.mainWindow = null;
    });
  }

  private static loadMainWindow() {
    App.mainWindow.webContents.openDevTools();
    if (!App.application.isPackaged) {
      App.mainWindow.loadURL(`http://localhost:${rendererAppPort}`).then();
    } else {
      App.mainWindow
        .loadURL(
          format({
            pathname: join(__dirname, '..', rendererAppName, 'index.html'),
            protocol: 'file:',
            slashes: true,
          })
        )
        .then();
    }
  }

  static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
    App.BrowserWindow = browserWindow;
    App.application = app;

    App.application.on('window-all-closed', App.onWindowAllClosed);
    App.application.on('ready', App.onReady);
    App.application.on('activate', App.onActivate);
  }
}
