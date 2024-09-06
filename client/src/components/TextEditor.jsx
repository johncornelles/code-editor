import React, { useState } from "react";
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
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "blockquote",
  "code-block",
];

const TextEditor = () => {
  const [editorContent, setEditorContent] = useState(""); 
  const [isEditMode, setIsEditMode] = useState(true); 

  const handleToggleMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSubmit = () => {
    alert(`Submitted Content: \n${editorContent}`);
  };

  return (
    <div className="editor-container">
      <h2>GitHub-like Text Editor in React</h2>
      <div className="editor-controls">
        <button onClick={handleToggleMode} className="toggle-button">
          {isEditMode ? "Preview" : "Edit"}
        </button>
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
      {isEditMode ? (
        <ReactQuill
          value={editorContent}
          onChange={setEditorContent}
          modules={modules}
          formats={formats}
          theme="snow"
          placeholder="Write something like in GitHub README..."
          className="custom-quill-editor"
        />
      ) : (
        <ReactQuill
        readOnly
        value={editorContent}
        modules={modules}
        formats={formats}
        theme="snow"
        className="custom-quill-editor"
        />
      )}
    </div>
  );
};

export default TextEditor;
