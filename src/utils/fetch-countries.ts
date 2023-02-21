import { Countries } from "../types/api";

export async function fetchCountries(): Promise<Countries> {
  const res = await fetch("/api/countries");
  return await res.json();
}
