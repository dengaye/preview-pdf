import * as vscode from 'vscode';

import getWebviewContent from '../utils/getWebviewContent';
import { getDiskPath } from '../utils/utils';


export default class PDFWebview {
    constructor(
        extensionPath: vscode.Uri, 
        resourceUri: vscode.Uri, 
        webviewPanel: vscode.WebviewPanel
    ) {
        const resourceRoot = resourceUri.with({
            path: resourceUri.path.replace(/\/[^/]+?\.\w+$/, '/'),
        });
    
        webviewPanel.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.file(extensionPath.path),
                resourceRoot
            ],
        };

        webviewPanel.webview.html = getWebviewContent(extensionPath);

        const resourcePath = webviewPanel.webview.asWebviewUri(resourceUri);

        webviewPanel.webview.postMessage({ resourcePath: resourcePath.toString() });
    }
}