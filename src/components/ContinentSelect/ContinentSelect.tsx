import { useLocations } from "../../hooks/useLocations";
import { DropDown } from "../DropDown/DropDown";
import { DropDownItem } from "../DropDown/DropDownItem";
import { IconTick } from "../Icons/IconTick";

export function ContinentSelect() {
  const { continents, selectedContinent, selectContinent } = useLocations();
  return (
    <DropDown
      label="Continents"
      placeholder="Select a continent..."
      value={selectedContinent?.name}
    >
      {continents.map((continent) => {
        const isSelected = selectedContinent?.code === continent.code;
        return (
          <DropDownItem
            key={continent.code}
            isSelected={isSelected}
            onSelect={() => selectContinent(continent.code)}
            rightElement={isSelected && <IconTick />}
          >
            {continent.name}
          </DropDownItem>
        );
      })}
    </DropDown>
  );
}
