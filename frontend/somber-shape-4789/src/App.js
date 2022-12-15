import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';
import Search from './Pages/SearchPage/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
