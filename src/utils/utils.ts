import * as vscode from 'vscode';
import * as path from 'path';
import { LOCAL_SCRIPT_PATHS } from '../constants';

/**
 * 获取 VS Code 能使用的地址
 * @param extensionPath 插件目录地址
 * @param filePath 文件地址
 * @returns 在 VS Code 中能使用的地址
 */
export const getDiskPath = (extensionPath: vscode.Uri, filePath: string) => {
    const onDiskPath = vscode.Uri.file(
        path.join(extensionPath.path, filePath)
    );
    return onDiskPath.with({ scheme: 'vscode-resource' });
};

/**
 * 加载 script
 * @param extensionPath 插件目录地址
 * @returns 返回需要加载的 js
 */
export const loadScripts = (extensionPath:  vscode.Uri) => {
    const loadScripts = LOCAL_SCRIPT_PATHS.map(scriptPath => `<script src="${getDiskPath(extensionPath, scriptPath)}"></script>`);
    return loadScripts.join('');
};