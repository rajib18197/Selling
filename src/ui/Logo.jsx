import logo from "../assets/react.svg";

export default function Logo() {
  return (
    <a href="index.html">
      <img src={logo} className="w-[139px] h-[26px]" alt="logo" />
    </a>
  );
}
