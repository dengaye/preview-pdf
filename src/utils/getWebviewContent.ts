import * as vscode from 'vscode';
import { loadScripts } from '../utils/utils';

const getWebviewContent = (extensionPath: vscode.Uri) => {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        ${loadScripts(extensionPath)}
    </head>
    <body>
        <canvas id="canvas"></canvas>
    </body>
    </html>`;
};


export default getWebviewContent;