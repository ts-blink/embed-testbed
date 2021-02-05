import { useRef } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

import searchEmbedSnippet from "./snippets/search";

import "./playground.css";

function Playground() {
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
        defaultValue={searchEmbedSnippet}
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
