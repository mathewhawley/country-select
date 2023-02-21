import { Continents } from "../types/api";

export async function fetchContinents(): Promise<Continents> {
  const res = await fetch("/api/continents");
  return await res.json();
}
