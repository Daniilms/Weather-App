import { store } from "../../store/store";
import { fetchCities } from "../../store/actions";
const CITIES_URL =
  "http://api.geonames.org/search?country=FR&country=GP&country=RU&country=IT&maxRows=1000&type=json&username=DaniilMs";

export async function getCities() {
  const data = await fetch(CITIES_URL);

  const answer = await data.json();
  store.dispatch(fetchCities(answer));
}
