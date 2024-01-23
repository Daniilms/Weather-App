import { useSelector } from "react-redux";
import { AutoCompleteElement } from "../AutoCompleteElement/AutoCompleteElement";
import "./AutoCompleteList.css";
import { useEffect, useState } from "react";
import { State } from "../../const/const";

export function AutoCompleteList() {
  const [showList, setShowList] = useState(false);
  const inpValue = useSelector((state: State) => state.inputValue);
  const filtredCitiesList = useSelector((state: State) => state.filtredCities);

  useEffect(() => {
    if (inpValue.cityName === "" || inpValue.inputStatus === "done") {
      setShowList(false);
    } else {
      setShowList(true);
    }
  }, [inpValue.cityName, inpValue.inputStatus]);

  function generateKeys() {
    const min = 0;
    const max = 200000;
    const generateKey = Math.floor(Math.random() * (max - min + 1) + min);

    return generateKey;
  }

  return (
    <ul
      className={`auto-complete-list w-full rounded-md absolute h-fit max-h-32 top-20 bg-gray-700 w-9/12 scroll scroll-smooth overflow-y-scroll ${
        showList ? "auto-complete-list--active" : "auto-complete-list"
      }`}
    >
      {filtredCitiesList.map((city) => {
        return (
          <AutoCompleteElement
            showSetter={setShowList}
            currentCity={city.name}
            key={`${city.lat}${city.lng}${generateKeys()}`}
          />
        );
      })}
    </ul>
  );
}
