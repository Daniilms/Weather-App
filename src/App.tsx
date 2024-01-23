import { useEffect } from "react";
import "./App.css";
import { getCities } from "./Posts/Request/Request";
import { Input } from "./components/Input/Input";
import { OutputField } from "./components/OutputField/OutputField";
import { useSelector } from "react-redux";
import { store } from "./store/store";
import { fetchWeaherData } from "./store/actions";
import { ShowTemperature } from "./components/ShowTemperature/ShowTemperature";
import { State } from "./const/const";

function App() {
  const currentLocation = useSelector((state: State) => state.inputValue);
  const currentWeather = useSelector((state: State) => state.weatherData);
  let weatherType = "";

  if (currentWeather.weather !== undefined) {
    weatherType = currentWeather.weather[0].main;
  }

  async function getWeather() {
    if (
      currentLocation.cityName !== undefined &&
      currentLocation.inputStatus === "done"
    ) {
      try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${currentLocation.cityName}&APPID=600f67475aec9e21a6fedc28068caf39`;
        const data = await fetch(URL);

        const answer = await data.json();
        store.dispatch(fetchWeaherData(answer));
      } catch {
        console.log("такого города в нашем списке нет !");
      }
    }
  }
  useEffect(() => {
    getWeather();
  }, [currentLocation.inputStatus]);

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div>
      <div className="container xl mx-auto">
        <main className="main">
          <div className="app-wrp flex justify-center items-center">
            <div
              className={`app h-3/5 w-2/3 flex flex-col  justify-between border-2 border-solid border-white rounded-xl  p-14 bg-teal-600 ${
                weatherType !== "Clouds" || weatherType === "Snow"
                  ? "app-rainy"
                  : "app-sunny"
              }`}
            >
              <Input></Input>
              <ShowTemperature />
              <OutputField></OutputField>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
