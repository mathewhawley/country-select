import { useQuery } from "react-query";
import { fetchCountries } from "../utils/fetch-countries";

export function useCountriesQuery() {
  return useQuery("countries", fetchCountries)
}
