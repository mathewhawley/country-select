import { continents, countries, Country } from "countries-list";

export type CountryCode = keyof Countries;
export { Country };
export type Countries = typeof countries;

export type ContinentCode = keyof Continents;
export type Continent = Country["continent"];
export type Continents = typeof continents;
