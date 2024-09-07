import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "blockquote", "code-block"],
    ["clean"],
  ],
};

const formats = [
  "header", "bold", "italic", "underline", "strike",
  "list", "bullet", "link", "blockquote", "code-block"
];

const TextEditor = ({ isReadOnly = false, snippet = {} }) => {
  const [editorContent, setEditorContent] = useState(""); 
  const [isEditMode, setIsEditMode] = useState(true);
  const quillRef = useRef(null); 

  const handleToggleMode = () => setIsEditMode(prev => !prev);

  return (
    <div className="editor-container">
      {!isReadOnly && (
        <div className="editor-controls">
          <button onClick={handleToggleMode} className="toggle-button">
            {isEditMode ? "Preview" : "Edit"}
          </button>
          <button onClick={() => console.log(editorContent)} className="submit-button">
            Submit
          </button>
        </div>
      )}
      <ReactQuill
        ref={quillRef}
        value={isReadOnly ? snippet.snippet : editorContent}
        onChange={setEditorContent}
        modules={isReadOnly ? {} : modules} 
        formats={ isReadOnly ? {} : formats}
        theme="snow"
        readOnly={isReadOnly || !isEditMode}
        className="custom-quill-editor"
      />
    </div>
  );
};

export default TextEditor;
