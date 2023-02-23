import { RefObject, useEffect } from "react";

export function useOnClickOutside(ref: RefObject<HTMLElement>, handler: (event: Event) => void) {
  useEffect(() => {
    const listener: EventListener = (event) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    }
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    }
  }, [ref, handler]);
}
