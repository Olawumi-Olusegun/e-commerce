import { PropsWithChildren, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useCombinedStore } from "../../store";
import "./Modal.css";


export default function Modal({children}: PropsWithChildren) {

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height }
  }

    const openSideMenu = useCombinedStore((state) => state.openSideMenu);
    const setOpenSideMenu = useCombinedStore((state) => state.setOpenSideMenu);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
        setOpenSideMenu(false)
      }

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <>
      <div className={`modal ${openSideMenu ? "show-modal" : "hide-modal"}`} >
          <span title="" className='menu-btn position-close-btn' onClick={() => setOpenSideMenu(false)}>
            <MdClose className="nav-icons" color="black" />
          </span>
      </div>
      {children}
    </>
  )
}
