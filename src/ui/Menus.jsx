import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const MenusContext = createContext();

function Menus() {
  const [openId, setOpenId] = useState("");
  const open = setOpenId;
  const close = () => setOpenId("");

  return (
    <MenusContext.Provider
      value={{ openId, open, close }}
    ></MenusContext.Provider>
  );
}

function Menu({ selectedId, children }) {
  const { open } = useContext(MenusContext);

  function handleClick() {
    open((curOpenId) => {
      // 1) If curOpenId is Not equal to selectedId && If curOpenId is Not equal to Empty string, that means one menu is selected and user going to select another one, then open the selectedId.
      if (curOpenId !== selectedId && curOpenId !== "") return selectedId;

      // 2) If curOpenId is Equal to selectedId then close the curOpenId
      if (curOpenId === selectedId) return "";

      // 3) If curOpenId is Not Equal to selectedId && curOpenId is Equal to Empty String then open the selectedId
      if (curOpenId !== selectedId && curOpenId === "") return selectedId;
    });

    // open((curOpenId) =>
    //   curOpenId === selectedId || curOpenId !== ""
    //     ? curOpenId !== selectedId && curOpenId !== ""
    //       ? selectedId
    //       : ""
    //     : open
    // );
  }

  return cloneElement(children, { onClick: handleClick });
}

function Window({ windowId, children }) {
  const { openId, close } = useContext(MenusContext);
  const ref = useRef();

  useEffect(
    function () {
      function closeWindow(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }

      document.addEventListener("click", closeWindow);

      return () => {
        document.removeEventListener("click", closeWindow);
      };
    },
    [close]
  );

  if (openId !== windowId) return null;
  return (
    <div ref={ref}>
      <button>&times;</button>
      <div>{cloneElement(children, { onCloseMenu: close })}</div>
    </div>
  );
}

Menus.Menu = Menu;
Menus.Window = Window;

export default Menus;
