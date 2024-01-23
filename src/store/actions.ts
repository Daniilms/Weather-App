import { createAction } from "@reduxjs/toolkit";
import { WeatherData, inpValueInterface } from "../const/const";

export const fetchWeaherData = createAction<WeatherData>("app/fetchWeaherData");
export const getInputValue = createAction<inpValueInterface>(
  "input/getInputValue"
);
export const fetchCities = createAction<Location[]>("app/fetchCities");
export const filterCities = createAction<Location[]>(
  "autocompletelist/filterCities"
);
