import { PropsWithChildren } from "react";
import "./Anchor.css"

interface Props {
  href: string;
}

export function Anchor({href, children}: PropsWithChildren<Props>) {
  return (
    <a className="anchor" href={href}>
      {children}
    </a>
  )
}
