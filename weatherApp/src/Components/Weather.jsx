import Search from "./Search";
import "../App.css";  // Adjusted path to point to the parent directory and then to App.css
import { useEffect, useState } from "react";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherdata, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=0d37cd79bcadaf5e331ee22482059ead`
      );
      const data = await response.json();

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("bangalore");
  }, []);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading.....</div>
      ) : (
        <div>
          <div className="cityName">
            <h2>
              {weatherdata?.name}
              <span>{weatherdata?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">
            <span>{weatherdata?.main?.temp}</span>
          </div>
          <p className="description">
            {weatherdata?.weather?.[0]?.description || ""}
          </p>
          <div className="weather-info">
            <div>
              <div>
                <p className="winf">{weatherdata?.wind?.speed}</p>
                <p>Wind speed</p>
              </div>
            </div>
            <div>
              <div>
                <p className="winf">{weatherdata?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
