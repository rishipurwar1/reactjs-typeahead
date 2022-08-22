import { useState } from "react";
import fetchSkills from "./api";
import Input from "./components/Input";
import SuggestionList from "./components/SuggestionList";
import "./styles.css";

export default function App() {
  const [skills, setSkills] = useState([]);

  const onChange = async (value) => {
    if (value.length > 0) {
      const data = await fetchSkills(value);
      setSkills(data);
    } else {
      setSkills([]);
    }
  };

  return (
    <div className="App">
      <Input handleChange={onChange} />
      {skills?.items?.length > 0 && <SuggestionList skills={skills} />}
    </div>
  );
}
