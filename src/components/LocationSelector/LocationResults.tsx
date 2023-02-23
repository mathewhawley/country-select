import "./LocationResults.css"
import { useLocations } from "../../hooks/useLocations";
import { Anchor} from "../Anchor/Anchor"

export function LocationResults() {
  const { selectedContinent, selectedCountry } = useLocations();

  if (!selectedContinent || !selectedCountry) {
    return null;
  }

  return (
    <div className="location-results">
      <p className="location-results__heading">Congratulations</p>
      <p className="location-results__body">
        You're travelling to <Anchor href="#">{selectedCountry.data.name}</Anchor> in
        the continent <Anchor href="#">{selectedContinent.name}</Anchor>.
      </p>
    </div>
  );
}
