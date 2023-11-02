"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import { Dropdown } from "../DropDown/DropDown";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link
            className={`${styles.link} ${
              pathname === "/" ? styles.active : ""
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${styles.link} ${
              pathname === "/blog" ? styles.active : ""
            }`}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={`${styles.link} ${
              pathname === "/about" ? styles.active : ""
            }`}
            href="/about"
          >
            About
          </Link>
          <Dropdown isOpen={false} />
        </div>
      </div>
    </header>
  );
};

export { Header };
