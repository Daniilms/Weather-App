import { useSelector } from "react-redux";
import "./ShowTemperature.css";
import { State } from "../../const/const";

export function ShowTemperature() {
  const weatherInfo = useSelector((state: State) => state.weatherData);

  function convertToCelcium(convertableData: number) {
    const toCelcium: number = 273.15;
    if (weatherInfo === undefined) {
      return null;
    }
    const currentTemp = convertableData - toCelcium;
    return parseInt(currentTemp);
  }
  if (weatherInfo.main === undefined) {
    return <div className="self-center">Enter City</div>;
  }
  return (
    <p className="show-temperature self-center text-white">
      {convertToCelcium(weatherInfo.main.temp)}°C
    </p>
  );
}
