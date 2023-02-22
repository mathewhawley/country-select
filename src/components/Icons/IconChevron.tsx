import "./Icon.css"
import cn from "classnames";

interface Props {
  rotate?: "90" | "180" | "270";
}

export function IconChevron({ rotate }: Props) {
  return (
    <svg
      className={cn("icon", rotate && `icon--${rotate}`)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="presentation"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>
  );
}
