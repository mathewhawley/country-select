import { useState } from "react";
import { html as instructions } from "../../INSTRUCTIONS.md";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  const [isOpen, setOpen] = useState(true);

  return (
    <aside
      className={styles.sidebar + `${isOpen ? " " + styles["is-open"] : ""}`}
    >
      <div className={styles.peek}>
        <button
          className={styles.toggle}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {isOpen ? (
            <svg
              height={24}
              width={24}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              height={24}
              width={24}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          <span className={styles.instructionsLabel}>Instructions</span>
        </button>
      </div>
      <div className={styles.content}>
        <p className={styles.caption}>Exercise: Country Dropdown</p>
        <div dangerouslySetInnerHTML={{ __html: instructions }} />
      </div>
    </aside>
  );
}
