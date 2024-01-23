import { store } from "../store/store";

export const urlToImages: urlToImagesInterface = {
  urlSunny: "/images/sunny-weather.jpg",
  urlRainy: "/images/rainy-weather.jpg",
};

interface urlToImagesInterface {
  urlSunny: string;
  urlRainy: string;
}
export interface inpValueInterface {
  cityName: string;
  countryName: string;
  inputStatus: string;
}
export type State = ReturnType<typeof store.getState>;

export interface WeatherData {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coordinates;
  dt: number;
  id: number;
  main: MainWeatherData;
  name: string;
  rain: Rain;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

interface Clouds {
  all: number;
}

interface Coordinates {
  lon: number;
  lat: number;
}

interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure: number;
}

interface Rain {
  "1h": number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
export interface Location {
  adminCode1: string;
  lng: string;
  geonameId: number;
  toponymName: string;
  countryId: string;
  fcl: string;
  population: number;
  countryCode: string;
  name: string;
  fclName: string;
  countryName: string;
  fcodeName: string;
  adminName1: string;
  lat: string;
  fcode: string;
}
