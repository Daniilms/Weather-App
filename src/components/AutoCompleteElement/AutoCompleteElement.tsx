import { getInputValue } from "../../store/actions";
import { store } from "../../store/store";

interface AutoCompleteElementProps {
  currentCity: "string";
  showSetter: (showList: boolean) => void;
}
export function AutoCompleteElement({
  currentCity,
  showSetter,
}: AutoCompleteElementProps) {
  return (
    <li
      onClick={() => {
        showSetter(false);
        store.dispatch(
          getInputValue({
            cityName: currentCity,
            countryName: "",
            inputStatus: "done",
          })
        );
      }}
      className="p-4 border-b-2 border-blue-500 text-white ease-in-out duration-300 hover:cursor-pointer hover:bg-sky-600"
    >
      {currentCity}
    </li>
  );
}
