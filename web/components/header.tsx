import Link from "next/link";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <h1 className={styles.item}>Whodunnit?</h1>
      </Link>
      <Link href={"/people"}>
        <h1 className={styles.item}>Potential Perps</h1>
      </Link>
    </header>
  );
};

export default Header;
