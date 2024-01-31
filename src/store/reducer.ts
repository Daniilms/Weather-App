import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCities,
  fetchWeaherData,
  filterCities,
  getInputValue,
} from "./actions";
import { WeatherData, inpValueInterface } from "../const/const";
const initialState: initialStateInt = {
  weatherData: [],
  citiesList: [],
  inputValue: { cityName: "" },
  filtredCities: [],
};
interface initialStateInt {
  weatherData: WeatherData;
  citiesList: Location[];
  filtredCities: Location[];
  inputValue: inpValueInterface;
}
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchWeaherData, (state, action) => {
      state.weatherData = action.payload;
    })
    .addCase(getInputValue, (state, action) => {
      state.inputValue = action.payload;
    })
    .addCase(fetchCities, (state, action) => {
      state.citiesList = action.payload;
      console.log(action.payload);
    })
    // переместить компонент в inputComp
    .addCase(filterCities, (state, action) => {
      if (state.inputValue !== "" && state.citiesList.geonames !== undefined) {
        state.filtredCities = state.citiesList.geonames.filter((city) =>
          city.name
            .toLowerCase()
            .includes(state.inputValue.cityName.toLowerCase())
        );
      }
    });
});
