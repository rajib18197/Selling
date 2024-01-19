import { IoCartOutline } from "react-icons/io5";

export default function CartOverView() {
  return (
    <li>
      <a
        className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
        href="#"
        onClick={handleCartShow}
      >
        <IoCartOutline />

        <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
          8
        </span>
      </a>
    </li>
  );
}
