import { useQuery } from "react-query";
import { fetchContinents } from "../utils/fetch-continents";

export function useContinentsQuery() {
  return useQuery("continents", fetchContinents);
}
