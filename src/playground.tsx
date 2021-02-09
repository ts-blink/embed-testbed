import { useRef, useEffect } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

import searchEmbedSnippet from "./snippets/search";
import pinboardEmbedSnippet from "./snippets/pinboard";
import appEmbedSnippet from "./snippets/app";

import "./playground.css";

export enum Page {
  Search = "search",
  Viz = "viz",
  App = "app",
}

const snippetMap = {
  [Page.Search]: searchEmbedSnippet,
  [Page.Viz]: pinboardEmbedSnippet,
  [Page.App]: appEmbedSnippet,
};

type Params = { [key: string]: string };

function compileSnippet(template: string, params: Params) {
  let str = template;
  for (let key in params) {
    const val = params[key];
    str = str.replace(new RegExp(`<%=${key}%>`, "gi"), val);
  }

  return str;
}

function getCompiledSnippet(pageId: Page, params: Params) {
  return compileSnippet(snippetMap[pageId], params);
}

export interface PlaygroundProps {
  pageId: Page;
  params: Params;
}

function Playground({ pageId, params }: PlaygroundProps) {
  const editorRef = useRef(null);

  function onEditorMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  function resetPreview() {
    // @ts-ignore
    document.getElementById("ts-embed").innerHTML = "";
  }

  function executeCode() {
    // @ts-ignore
    const code = editorRef.current.getValue();
    try {
      resetPreview();
      eval(code);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Editor
        height="90vh"
        width="500px"
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
}

export default Playground;
