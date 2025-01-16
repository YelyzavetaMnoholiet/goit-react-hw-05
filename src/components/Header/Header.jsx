import { NavLink, Outlet } from "react-router-dom";
import s from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header>
        <nav className={s.navList}>
          <NavLink className={s.navItem} to="/">
            Home
          </NavLink>
          <NavLink className={s.navItem} to="/movies">
            Movies
          </NavLink>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}
