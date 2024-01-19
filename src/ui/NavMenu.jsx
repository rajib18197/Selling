import { IoIosNotifications } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import CartOverView from "../features/cart/CartOverView";

export default function NavMenu() {
  return (
    <ul className="flex items-center space-x-5">
      <li>
        <a
          className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
          href="#"
        >
          <IoIosNotifications />
        </a>
      </li>

      <li>
        <a
          className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
          href="#"
        >
          <MdDarkMode />
        </a>
      </li>

      <CartOverView />
    </ul>
  );
}
