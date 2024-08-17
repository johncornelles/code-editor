import { useState } from "react";
import { useStore } from "../store/store";

export const useExecute = () => {
  const [loading, setLoading] = useState(false);
  const { API, languages, setOutput } = useStore(state => ({
    API: state.API,
    languages: state.languages,
    setOutput: state.setOutput
  }));

  const execute = async (code, language) => {
    setOutput(''); // Clear previous output or error message
    try {
      setLoading(true);
      const res = await API.post("/execute", {
        language,
        version: languages[language],
        files: [{ content: code }]
      });

      const { stdout, stderr } = res.data.run;

      // Format and display the output or error
      const formattedOutput = stderr ? `Error: ${stderr}` : stdout;
      setOutput(formattedOutput);

      return res.data;
    } catch (error) {
      setOutput(`Execution error: ${error.message}`);
      throw error; // Rethrow to allow handling in the component
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading };
};
