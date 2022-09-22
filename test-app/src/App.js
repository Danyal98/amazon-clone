import './App.css';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Auth from './components/Auth/Auth'
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
          path="/checkout"
          element={<Auth>
            <Checkout />
          </Auth>} />
        <Route
          path='*'
          element={<Auth>
            <Home />
          </Auth>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
