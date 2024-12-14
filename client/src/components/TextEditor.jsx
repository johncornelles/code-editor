import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import { useAddSnippet } from "../hooks/useAddSnippet";
import { useUpdateSnippet } from "../hooks/useUpdateSnippet";
import { useStore } from "../store/store";
import {
  Button,
  Text,
} from '@chakra-ui/react';

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

const TextEditor = ({ isReadOnly = false, snippet = {}, onClose = "" }) => {
  const [editorContent, setEditorContent] = useState(snippet.snippet && snippet.snippet);
  const [isEditMode, setIsEditMode] = useState(true);
  const quillRef = useRef(null);
  const { addSnippet, loading: addingSnippet } = useAddSnippet();
  const { updateSnippet, loading: updatingSnippet } = useUpdateSnippet();
  const handleToggleMode = () => setIsEditMode((prev) => !prev);
  const { snippetToBeEditedOrDeleted } = useStore();

  const update = async () => {
    try {
      await updateSnippet(snippet._id, editorContent);
      onClose();
    } catch (error) {
      console.log(error.message);
    }
  };

  const add = async () => {
    try {
      const res = await addSnippet(editorContent);
      console.log(res);
      onClose();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    
    <div className="editor-container">
      <Text color="purple.100" p="4"> {snippet.createdby}</Text>
      {!isReadOnly && (
        <div className="editor-controls">
          <button onClick={handleToggleMode} className="toggle-button">
            {isEditMode ? "Preview" : "Edit"}
          </button>
          {
            updatingSnippet || addingSnippet ?
              <Button
                isLoading
                loadingText="Saving..."
                colorScheme="purple"
              >
              </Button> :
              <Button
                onClick={snippetToBeEditedOrDeleted ? update : add}
                className="submit-button"
                colorScheme="purple"
              >
                Submit
              </Button>

          }


        </div>
      )}
      <ReactQuill
        ref={quillRef}
        value={isReadOnly ? snippet.snippet : editorContent}
        onChange={setEditorContent}
        modules={isReadOnly ? {} : modules}
        formats={isReadOnly ? {} : formats}
        theme="snow"
        readOnly={isReadOnly || !isEditMode}
        className="custom-quill-editor"
      />
    </div>
  );
};

export default TextEditor;
