import './App.css';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />} />
        <Route
          path="/signup"
          element={<Signup />} />
        <Route
          path='/checkout'
          element={<Checkout />} />
        <Route
          path='/'
          element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
