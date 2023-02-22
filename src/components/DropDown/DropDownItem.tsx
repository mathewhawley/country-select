import { PropsWithChildren } from "react";
import './DropDownItem.css'

export function DropDownItem({ children}: PropsWithChildren) {
  return (
    <div className="drop-down-item">
      {children}
    </div>
  );
}
