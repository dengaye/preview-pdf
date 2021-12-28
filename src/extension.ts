import * as vscode from "vscode";

import { VIEW_TYPE } from './constants';
import EditorProvider from './modules/editor-provider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
//   let disposable = vscode.commands.registerCommand(
//     "preview-pdf.previewPdf",
//     () => {
//       const columnToShowIn = vscode.window.activeTextEditor
//         ? vscode.window.activeTextEditor.viewColumn
//         : undefined;

//       if (currentPanel) {
//         // 如果已经存在 panel，就展示当前的
//         currentPanel.reveal(columnToShowIn);
//       } else {
//         const panel = vscode.window.createWebviewPanel(
//           "Preview PDF",
//           "Preview PDF",
//           vscode.ViewColumn.One,
//           {}
//         );

//         panel.webview.html = getWebviewContent();

// 		panel.onDidChangeViewState(
// 			e => {
// 				const p = e.webviewPanel;
// 				console.log(p);
// 			},
// 			null, 
// 			context.subscriptions,
// 		);

//         // 当 webview 关闭时触发。比如销毁在当前 webview 中使用的 定时器
//         panel.onDidDispose(
//           () => {
//             currentPanel = undefined;
//             vscode.window.showInformationMessage("close");
//           },
//           null,
//           context.subscriptions
//         );
//       }
//     }
//   );

	const extensionPath = vscode.Uri.file(context.extensionPath);
	const provider = new EditorProvider(extensionPath);
  	context.subscriptions.push(
		vscode.window.registerCustomEditorProvider(
			VIEW_TYPE,
			provider,
			{
				webviewOptions: {
					enableFindWidget: false, // default
					retainContextWhenHidden: true,
				},
			}
		)
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
