import { Navigation, Products, Recommended, Sidebar } from '../../components';
import './Home.css';

const Home = () => {

  return (
    <>
    <div className="home-page">

      <div className="sidebar">
          <Sidebar />
      </div>
      
      <div className="navigation">
        <Navigation  />
      </div>
      
      <div className="recommended">
        <Recommended />
      </div>

      <div className="products">
        <Products />
      </div>

      <div className="footer" style={{ textAlign: "center", padding: "5rem" }}>
        &copy; { new Date().getFullYear() }
      </div>
      
    </div>
    </>
  )
}

export default Home