import Header from "./Components/Header";
import Main from "./Components/Main";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toHeader = (darkMode) => {
    setDarkMode(darkMode);
  };

  return (
    <div className="h-screen bg-lightGrayishBlueHover dark:bg-veryDarkBlue">
      <Header onChangeTheme={darkMode} />
      <Main toHeader={toHeader} />
    </div>
  );
}

export default App;
