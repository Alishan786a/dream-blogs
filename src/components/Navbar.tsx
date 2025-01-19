import Link from "next/link";
import { ROUTES } from "@/constant/routes";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">MyApp</Link>
      </div>
      <ul className="navLinks">
        <li>
          <Link href={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link href={ROUTES.ABOUT}>About</Link>
        </li>
      
        <li>
          <Link href={ROUTES.CONTACT_US}>Contact</Link>
        </li>
      </ul>
     
    </nav>
  );
};

export default Navbar;
