import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import { Link } from 'react-router-dom';
import { useCombinedStore } from '../../store';
import './Sidebar.css';
import Modal from '../Modal/Modal';

const Sidebar = () => {

  const openSideMenu = useCombinedStore((state) => state.openSideMenu);


  return (
    <Modal>
      <section className={`sidebar-container ${openSideMenu ? "open-side-menu" : "close-side-menu"}`} >
        <div className="logo-container">
          <Link to="/">
              <h3>E<span>-commerce</span></h3>
          </Link>
        </div>
        <Category />
        <Price  />
        <Colors  />
      </section>
    </Modal>
  )
}

export default Sidebar