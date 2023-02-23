import { atom } from "jotai"
import { ContinentCode, CountryCode } from "../types/api";

export const continentAtom = atom<ContinentCode | null>(null);
export const countryAtom = atom<CountryCode | null>(null);