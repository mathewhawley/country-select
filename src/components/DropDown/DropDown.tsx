import "./DropDown.css";
import {
  Children,
  cloneElement,
  isValidElement,
  MouseEventHandler,
  PropsWithChildren,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { IconChevron } from "../Icons/IconChevron";
import { Props as ItemProps, EmptyItem } from "./DropDownItem";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

interface Props {
  label: string;
  placeholder: string;
  isDisabled?: boolean;
  errorMessage?: string;
  value?: string;
  emptyElement?: React.ReactNode;
}

export function DropDown({
  label,
  placeholder,
  value,
  isDisabled,
  errorMessage,
  emptyElement,
  children,
}: PropsWithChildren<Props>) {
  const dropDownRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState(false);

  const closeDropDown = () => setIsActive(false);

  const toggleDropDown: MouseEventHandler = () => {
    if (isDisabled) {
      return;
    }
    setIsActive((prevState) => !prevState);
  };

  useOnClickOutside(dropDownRef, closeDropDown);

  const hasChildren = Children.count(children) > 0;

  return (
    <div className="drop-down">
      <label className="drop-down__label">{label}</label>

      <div ref={dropDownRef}>
        <div
          className={clsx(
            "drop-down__input",
            value && "drop-down__input--populated",
            errorMessage && "drop-down__input--error",
            isDisabled && "drop-down__input--disabled"
          )}
          onClick={toggleDropDown}
          tabIndex={!isDisabled ? 1 : undefined}
        >
          <div className="drop-down__value">{value || placeholder}</div>
          <div className="drop-down__icon">
            <IconChevron rotate="180" />
          </div>
        </div>

        {errorMessage && (
          <div className="drop-down__error-msg">{errorMessage}</div>
        )}

        {isActive && (
          <div className={"drop-down__panel"}>
            {!hasChildren && (
              <EmptyItem>{emptyElement || "No results."}</EmptyItem>
            )}
            {hasChildren &&
              Children.map(children, (child) => {
                if (isValidElement<PropsWithChildren<ItemProps>>(child)) {
                  return cloneElement(child, { closeDropDown });
                }
              })}
          </div>
        )}
      </div>
    </div>
  );
}
