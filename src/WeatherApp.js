import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState(false);
  const [loaded, setLoaded] = useState("");
  const [message, setMessage] = useState("");

  function showWeather(response) {
    setLoaded(true);
    let temperature = response.data.main.temp;
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let icon = response.data.weather[0].icon;
    let iconurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    setMessage(
      <ul>
        <li>Temperature: {Math.round(temperature)}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {Math.round(wind)}km/h</li>
        <li>
          <img src={iconurl} alt={description} />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    if (city !== "") {
      event.preventDefault();
      let apiKey = `39c590036b490e160a1ac1b35a02652d`;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(showWeather);
    } else {
      alert(`You didn't type a city`);
    }
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={changeCity} />
      <br />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="WeatherApp">
        {form}
        <div className="weather-response mt-3">{message}</div>
      </div>
    );
  } else {
    return form;
  }
}
