// import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/Authcontext';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Account from "./pages/Account";
import Protectedroute from "./components/Protectedroute";

function App() {
  return (
    <>

      <BrowserRouter>

        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/account' element={<Protectedroute><Account /></Protectedroute>} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>




    </>

  );
}

export default App;
