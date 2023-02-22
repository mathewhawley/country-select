import './DropDownItem.css'
import { PropsWithChildren } from "react";

export function DropDownItem({ children}: PropsWithChildren) {
  return (
    <div className="drop-down-item">
      {children}
    </div>
  );
}
