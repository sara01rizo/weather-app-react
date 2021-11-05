import React from "react";
import WeatherApp from "./WeatherApp";
import Loader from "react-loader-spinner";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React weather app </h1>
        <h2>The weather always change!!!</h2>
      </header>
      <body>
        <Loader
          type="ThreeDots"
          color="#66FF66"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
        <WeatherApp />
      </body>
    </div>
  );
}

export default App;
