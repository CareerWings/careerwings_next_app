import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import Logo from "../../../assests/images/Landing page/Blue Icon_png.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Image src={Logo} width={100} height={100} alt="Compant-Logo"/>
      </div>
      <ul className={styles.navbar_menu}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;