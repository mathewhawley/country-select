import "./DropDown.css";
import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  useState,
} from "react";
import cn from "classnames";
import { IconChevron } from "../Icons/IconChevron";
import { Props as ItemProps } from "./DropDownItem";

interface Props {
  label: string;
  placeholder: string;
  isDisabled?: boolean;
  isErrored?: boolean;
}

export function DropDown({
  label,
  placeholder,
  isDisabled,
  isErrored,
  children,
}: PropsWithChildren<Props>) {
  const [isActive, setIsActive] = useState(false);

  const closeDropDown = () => setIsActive(false);
  const toggleDropDown = () => setIsActive((prevState) => !prevState);

  const handleInputClick = () => {
    if (isDisabled) {
      return;
    }
    toggleDropDown();
  };

  return (
    <div className="drop-down">
      <label className="drop-down__label">{label}</label>
      <div
        className={cn(
          "drop-down__input",
          isErrored && "drop-down__input--error",
          isDisabled && "drop-down__input--disabled"
        )}
        onClick={handleInputClick}
        tabIndex={!isDisabled ? 1 : undefined}
      >
        {placeholder}
        <div className="drop-down__icon">
          <IconChevron rotate="180" />
        </div>
      </div>
      <div
        className={cn(
          "drop-down__panel",
          isActive && "drop-down__panel--active"
        )}
      >
        {Children.map(children, (child) => {
          if (isValidElement<PropsWithChildren<ItemProps>>(child)) {
            return cloneElement(child, { closeDropDown });
          }
        })}
      </div>
    </div>
  );
}
