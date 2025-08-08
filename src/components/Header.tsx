import Link from "next/link";
import classes from "./header.module.css";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image
          src={logoImg.src}
          alt="A plate with food on it"
          priority
          width={150}
          height={150}
        />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
