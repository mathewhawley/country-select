import { useAtom } from "jotai";
import { countryAtom, continentAtom } from "../atoms/locationAtoms";
import { useContinentsQuery } from "../queries/useContinentsQuery";
import { useCountriesQuery } from "../queries/useCountriesQuery";
import type { ContinentCode, Country, CountryCode } from "../types/api";

interface ContinentViewModel {
  code: ContinentCode;
  name: string;
}

interface CountryViewModel {
  code: CountryCode;
  data: Country;
}

export function useLocations() {
  const { continentCode, countryCode, selectContinent, selectCountry } =
    useLocationState();

  const continentsQuery = useContinents();
  const countriesQuery = useCountries();

  const isLoading = continentsQuery.isLoading || countriesQuery.isLoading;
  const error = continentsQuery.error || countriesQuery.error;

  const selectedContinent = continentsQuery.data.find(
    (continent) => continent.code === continentCode
  );

  const selectedCountry = countriesQuery.data.find(
    (country) => country.code === countryCode
  );

  const filteredCountries = countriesQuery.data.filter(
    (country) => country.data.continent === continentCode
  );

  return {
    isLoading,
    error,
    continents: continentsQuery.data,
    countries: filteredCountries,
    selectContinent,
    selectCountry,
    selectedContinent,
    selectedCountry,
  };
}

function useLocationState() {
  const [continentCode, setContinentCode] = useAtom(continentAtom);
  const [countryCode, setCountryCode] = useAtom(countryAtom);

  const resetCountry = () => setCountryCode(null);
  const selectCountry = (code: CountryCode) => setCountryCode(code);
  const selectContinent = (code: ContinentCode) => {
    setContinentCode(code);
    resetCountry();
  };

  return {
    continentCode,
    countryCode,
    selectContinent,
    selectCountry,
  };
}

function useContinents() {
  const { data, ...continentsQuery } = useContinentsQuery();

  const _continents =
    data && (Object.entries(data) as [ContinentCode, string][]);

  const continents: ContinentViewModel[] = _continents
    ? _continents.map(([key, value]) => ({ code: key, name: value }))
    : [];

  return {
    ...continentsQuery,
    data: continents,
  };
}

function useCountries() {
  const { data, ...countriesQuery } = useCountriesQuery();

  const _countries = data && (Object.entries(data) as [CountryCode, Country][]);

  const countries: CountryViewModel[] = _countries
    ? _countries.map(([key, value]) => ({ code: key, data: value }))
    : [];

  return {
    ...countriesQuery,
    data: countries,
  };
}
