import "./DropDownItem.css";
import { PropsWithChildren } from "react";
import cn from "classnames";

export interface PrivateProps {
  closeDropDown: () => void;
}

export interface Props extends PrivateProps {
  isSelected?: boolean;
  rightElement?: React.ReactNode;
}

export function DropDownItem(
  props: PropsWithChildren<Omit<Props, keyof PrivateProps>>
) {
  const { isSelected, rightElement, closeDropDown, children } =
    props as PropsWithChildren<Props>;

  const handleClick = () => !isSelected && closeDropDown();

  return (
    <div
      className={cn("drop-down-item", isSelected && "drop-down-item--selected")}
      onClick={handleClick}
    >
      {children}
      {rightElement && (
        <div className="drop-down-item__right-element">{rightElement}</div>
      )}
    </div>
  );
}
