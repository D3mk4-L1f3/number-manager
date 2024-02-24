import { useState } from "react";
import InputField from "./component/inputField/InputField";
import ValueResult from "./component/ValueResult/ValueResult";
import { grinder } from "./helpers/grinder/grinder";

function App() {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        grinder(e, setResults);
        setIsLoading(false);
      };
      reader.readAsText(file);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
        gap: "50px",
        justifyContent: "center",
      }}
    >
      <InputField handleChange={handleChange} />
      {isLoading && <p>Зачекайте, йде обчислення...</p>}
      {results && !isLoading && <ValueResult results={results} />}
    </div>
  );
}

export default App;
