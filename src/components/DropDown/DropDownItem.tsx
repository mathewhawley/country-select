import "./DropDownItem.css";
import { PropsWithChildren } from "react";
import clsx from "clsx";

export interface PrivateProps {
  closeDropDown: () => void;
}

export interface Props extends PrivateProps {
  isSelected?: boolean;
  rightElement?: React.ReactNode;
  onSelect: (...args: any[]) => void;
}

export function DropDownItem(
  props: PropsWithChildren<Omit<Props, keyof PrivateProps>>
) {
  const { isSelected, rightElement, closeDropDown, onSelect, children } =
    props as PropsWithChildren<Props>;

  const handleClick = () => {
    onSelect();
    !isSelected && closeDropDown();
  };

  return (
    <div
      className={clsx("drop-down-item", isSelected && "drop-down-item--selected")}
      onClick={handleClick}
    >
      {children}
      {rightElement && (
        <div className="drop-down-item__right-element">{rightElement}</div>
      )}
    </div>
  );
}

export function EmptyItem({ children }: PropsWithChildren) {
  return <div className="drop-down-item drop-down-item--empty">{children}</div>;
}
