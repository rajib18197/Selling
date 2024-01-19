import {
  MdCreateNewFolder,
  MdFavoriteBorder,
  MdOutlineWatchLater,
} from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const menus = [
  { label: "Trending", icon: <FaArrowTrendUp /> },
  { label: "New Releases", icon: <MdCreateNewFolder /> },
  { label: "Coming Soon", icon: <SlCalender /> },
  { label: "Favourites", icon: <MdFavoriteBorder /> },
  { label: "Watch Later", icon: <MdOutlineWatchLater /> },
];

export default function MainMenu() {
  return (
    <ul className="space-y-2">
      {menus.map((menu) => (
        <li key={menu.label}>
          <button className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black">
            {menu.icon}
            <span>{menu.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
