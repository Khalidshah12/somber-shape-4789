import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Products/>
      <Footer />
    </div>
  );
}

export default App;
