import "./DropDownItem.css";
import { PropsWithChildren } from "react";
import cn from "classnames";

interface Props {
  selected?: boolean;
  rightElement?: React.ReactNode;
}

export function DropDownItem({
  selected,
  rightElement,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cn("drop-down-item", selected && "drop-down-item--selected")}
    >
      {children}
      {rightElement && (
        <div className="drop-down-item__right-element">{rightElement}</div>
      )}
    </div>
  );
}
