import { useSelector } from "react-redux";
import { State } from "../../const/const";

export function OutputField() {
  const weatherInfo = useSelector((state: State) => state.weatherData);
  if (weatherInfo === undefined || weatherInfo.main === undefined) {
    return null;
  }

  function convertToCelcium(convertableData: number) {
    const toCelcium: number = 273.15;
    if (weatherInfo === undefined) {
      return null;
    }
    const currentTemp: number = Number(convertableData) - Number(toCelcium);
    return parseInt(currentTemp);
  }
  return (
    <ul className="flex flex-col jusctify-center items-center text-white w-full border-t-2 rounded-full">
      <li className="weather-city-name mb-2">{weatherInfo.name}</li>
      <li className="weather-temp mb-2">
        Feels like {convertToCelcium(weatherInfo.main.feels_like)}°C
      </li>
      <li className="weather-humidity mb-2">{weatherInfo.main.humidity}%</li>
      <li className="weather-wind mb-2">{weatherInfo.wind.speed} km/s</li>
    </ul>
  );
}
