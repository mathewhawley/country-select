import { useLocations } from "../../hooks/useLocations";
import { DropDown } from "../DropDown/DropDown";
import { DropDownItem } from "../DropDown/DropDownItem";
import { IconTick } from "../Icons/IconTick";

export function CountrySelect() {
  const { countries, selectedCountry, selectedContinent, selectCountry } =
    useLocations();
  return (
    <DropDown
      label="Country"
      placeholder={
        !selectedContinent
          ? "Must select a continent first"
          : "Select a country..."
      }
      value={selectedCountry?.data.name}
      isDisabled={!selectedContinent}
      emptyElement="Custom empty message!"
    >
      {countries.map((country) => {
        const isSelected = selectedCountry?.code === country.code;
        return (
          <DropDownItem
            key={country.code}
            isSelected={isSelected}
            onSelect={() => selectCountry(country.code)}
            rightElement={isSelected && <IconTick />}
          >
            {country.data.name}
          </DropDownItem>
        );
      })}
    </DropDown>
  );
}
