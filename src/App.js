import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Sheard/Header';
import {Routes,Route} from "react-router-dom";
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import AddProduct from './Pages/AddProduct/AddProduct';
import Cart from './Pages/Cart/Cart';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About/About';
import ProtractedRoute from './Pages/ProtractedRoute/ProtractedRoute';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/Home' element={<Home></Home>}>Home</Route>
        <Route path='/Login' element={<Login></Login>}>Login</Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}>Login</Route>
        <Route path='/AddProduct' element={<AddProduct></AddProduct>}>Login</Route>
        <Route path='/Cart/:id' element={<ProtractedRoute><Cart></Cart></ProtractedRoute>}>Cart</Route>
        <Route path='/Dashboard' element={<ProtractedRoute><Dashboard></Dashboard></ProtractedRoute>}>Cart</Route>
       <Route path='/Shop' element={<Shop></Shop>}>Shop</Route>
       <Route path='/About' element={<About></About>}></Route>
      </Routes>
      <ToastContainer />
      
    </div>
  );
}

export default App;
