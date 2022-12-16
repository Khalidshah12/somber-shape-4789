import './App.css';
import Navbar from './Components/navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';
import Search from './Pages/SearchPage/Search';
import Topbar from './Components/navbar/TopBar';
import NavMenu from './Components/navbar/NavMenu';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <NavMenu/>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
