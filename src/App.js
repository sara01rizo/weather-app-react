import React from "react";
import WeatherApp from "./WeatherApp";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React weather app </h1>
        <h2>The weather always change!!!</h2>
      </header>
      <body>
        <WeatherApp />
      </body>
    </div>
  );
}

export default App;
