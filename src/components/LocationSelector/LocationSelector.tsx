import "./LocationSelector.css";
import { ContinentSelect } from "../ContinentSelect/ContinentSelect";
import { CountrySelect } from "../CountrySelect/CountrySelect";
import { useLocations } from "../../hooks/useLocations";
import { LocationResults } from "./LocationResults";

export function LocationSelector() {
  const { isLoading, error, selectedContinent, selectedCountry } = useLocations();

  return (
    <div className="location-selector">
      <h1>Select a location</h1>

      {!!error && <div>Something went wrong.</div>}

      {isLoading && <div>Loading...</div>}

      {!isLoading && !error && (
        <>
          <div className="location-selector__container">
            <div className="location-selector__continents">
              <ContinentSelect />
            </div>
            <div className="location-selector__countries">
              <CountrySelect />
            </div>
          </div>
          {selectedContinent && selectedCountry && (
            <div className="location-selector__results">
              <LocationResults />
            </div>
          )}
        </>
      )}
    </div>
  );
}
