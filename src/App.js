import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Sheard/Header';
import {Routes,Route} from "react-router-dom";
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import AddProduct from './Pages/AddProduct/AddProduct';
import Cart from './Pages/Cart/Cart';
import Shop from './Pages/Shop/Shop';


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
        <Route path='/Cart/:id' element={<Cart></Cart>}>Cart</Route>
       <Route path='/Shop' element={<Shop></Shop>}>Shop</Route>
      </Routes>
      
    </div>
  );
}

export default App;
