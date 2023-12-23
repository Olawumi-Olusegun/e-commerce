import { PropsWithChildren } from "react";
import { MdClose } from "react-icons/md";
import { useCombinedStore } from "../../store";
import "./Modal.css";


export default function Modal({children}: PropsWithChildren) {

    const openSideMenu = useCombinedStore((state) => state.openSideMenu);
    const setOpenSideMenu = useCombinedStore((state) => state.setOpenSideMenu);

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
