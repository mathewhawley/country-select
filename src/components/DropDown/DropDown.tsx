import { PropsWithChildren } from "react";
import "./DropDown.css";

interface Props {
  label: string;
  placeholder: string;
}

export function DropDown({
  label,
  placeholder,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="drop-down">
      <label className="drop-down__label">{label}</label>
      <div className="drop-down__input">{placeholder}</div>
      <div className="drop-down__panel">{children}</div>
    </div>
  );
}
