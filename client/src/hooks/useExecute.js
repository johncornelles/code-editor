import { useState } from "react";
import { useStore } from "../store/store";

export const useExecute = () => {
  const [loading, setLoading] = useState(false);
  const { API, languages, setOutput } = useStore();

  const execute = async (code, language) => {
    setOutput('');
    try {
      setLoading(true);
      const res = await API.post("/execute", {
        language,
        version: languages[language],
        files: [{ content: code }]
      });

      const { stdout, stderr } = res.data.run;

      const formattedOutput = stderr ? `Error: ${stderr}` : stdout;
      setOutput(formattedOutput);

      return res.data;
    } catch (error) {
      setOutput(`Execution error: ${error.message}`);
      throw error; 
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading };
};
