
import * as vscode from 'vscode';

import PDFWebview from "./webview";

export default class EditorProvider implements vscode.CustomReadonlyEditorProvider {
    constructor(private readonly extensionPath: vscode.Uri) {}

    /**
     * 给指定的 url 创建一个新的文档
     * 在第一次打开给定资源的编辑器时调用，打开的资源传递给 resolveCustomEditor，这样用户就可以展示了
     * @param uri 要打开文档的 uri
     * @param openContext 有关打开自定义文档的其他信息
     * @param token 
     * @returns 自定义文档
     */
    openCustomDocument(uri: vscode.Uri, openContext: vscode.CustomDocumentOpenContext, token: vscode.CancellationToken): vscode.CustomDocument {
        return { uri, dispose: (): void => {} };
    }

    /**
     * 解析给定资源的自定义编译器
     * 用户每次打开 CustomEditorProvider 时都会调用
     * @param document 要解析的资源的文档
     * @param webviewPanel 展示此资源的编辑器 UI 的 webview 面板
     * @param token 
     */
    resolveCustomEditor(document: vscode.CustomDocument, webviewPanel: vscode.WebviewPanel, token: vscode.CancellationToken): void | Thenable<void> {
        const PdfPreviewWebview = new PDFWebview(this.extensionPath, document.uri, webviewPanel);
    }
}