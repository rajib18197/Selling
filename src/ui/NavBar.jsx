import Logo from "./Logo";
import NavMenu from "./NavMenu";

export default function NavBar() {
  return (
    <nav className="container flex items-center justify-between space-x-10 py-6">
      <Logo />

      <NavMenu />
    </nav>
  );
}
