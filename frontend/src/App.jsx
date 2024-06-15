import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CheckPage from './components/checkpage/CheckPage';
import DisplayContent from './components/display-content/DisplayContent';
import ErrorPage from './components/error/ErrorPage';
import Footer from './components/footer/Footer';
import MainPage from './components/homepage/MainPage';
import Navbar from './components/navbar/Navigation';
import PlaceOrder from './components/place-order/PlaceOrder';


function App() {

  return (
    <Router>
      <Navbar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/display" element={<DisplayContent />} />
          <Route path="/order/:id" element={<PlaceOrder />} />
          <Route path="/checkout" element={<CheckPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

      <Footer />
    </Router>
  );
}

export default App;
