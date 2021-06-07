import React, { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Page, snippetMap } from './snippets';
import * as embedSdk from '@thoughtspot/visual-embed-sdk';
import { customizeTestBedContent } from './helper';
declare global {
    interface Window {
        embedSdk: any;
    }
}
type Params = { [key: string]: string };

const compileSnippet = (template: string, params: Params) => {
    let str = template;
    for (let key in params) {
        const val = params[key];
        str = str.replace(new RegExp(`<%=${key}%>`, 'gi'), val);
    }

    return str;
};

const getCompiledSnippet = (pageId: Page, params: Params) => {
    return compileSnippet(snippetMap[pageId], params);
};

export interface PlaygroundProps {
    pageId: Page;
    params: Params;
}

const Playground = ({ pageId, params }: PlaygroundProps) => {
    const editorRef = useRef(null);
    useEffect(() => {
        window.embedSdk = embedSdk;
    }, []);

    const onEditorMount = (editor: any, monaco: any) => {
        editorRef.current = editor;
    };

    const resetPreview = () => {
        // @ts-ignore
        document.getElementById('embed').innerHTML = '';
    };

    const executeCode = () => {
        // @ts-ignore
        const code = customizeTestBedContent(editorRef.current.getValue());
        try {
            resetPreview();
            eval(code);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <Editor
                height="90vh"
                width="650px"
                defaultLanguage="javascript"
                defaultValue=""
                value={getCompiledSnippet(pageId, params)}
                options={{ minimap: { enabled: false } }}
                onMount={onEditorMount}
            />
            <button className="runBtn" onClick={executeCode}>
                Run ▶
            </button>
        </div>
    );
};

export default Playground;
