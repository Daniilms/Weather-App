import { store } from "../../store/store";
import { filterCities, getInputValue } from "../../store/actions";
import { useSelector } from "react-redux";
import { AutoCompleteList } from "../AutoCompleteList/AutoCompleteList";
import { State } from "../../const/const";

export function Input() {
  const inpValue = useSelector((state: State) => state.inputValue);

  return (
    <div>
      <div className="mb-5 relative flex h-full">
        <div className="flex flex-col w-full ">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter City
          </label>
          <input
            onChange={(evt) => {
              store.dispatch(
                getInputValue({
                  cityName: evt.target.value,
                  countryName: "",
                })
              );
              store.dispatch(filterCities());
            }}
            value={inpValue.cityName}
            type="text"
            id="large-input"
            className="block w-full h-14 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <AutoCompleteList />
        </div>
      </div>
    </div>
  );
}
