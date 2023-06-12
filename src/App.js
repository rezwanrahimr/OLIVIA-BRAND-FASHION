import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Sheard/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Shop from "./Pages/Shop/Shop";
import About from "./Pages/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageAllProducts from "./Pages/Dashboard/ManageAllProducts";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import Payment from "./Pages/Dashboard/Payment";
import Collection from "./Pages/Collection/Collection";
import SearchProducts from "./Pages/SearchProducts/SearchProducts";
import ProductCart from "./Pages/ProductCart/ProductCart";
import UpdateProduct from "./Pages/Dashboard/UpdateProduct/UpdateProduct";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/Home" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/Login" element={<Login></Login>}>
          Login
        </Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}>
          Login
        </Route>

        <Route
          path="/productsCart"
          element={<ProductCart></ProductCart>}
        ></Route>

        <Route path="/Dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrder></MyOrder>}></Route>

          <Route path="payment" element={<Payment></Payment>}></Route>
          <Route path="MyProfile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="ManageAllOrders"
            element={<ManageAllOrders></ManageAllOrders>}
          ></Route>
          <Route path="AddProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="MakeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route
            path="ManageAllProducts"
            element={<ManageAllProducts></ManageAllProducts>}
          ></Route>
          <Route
            path="product-update/:id"
            element={<UpdateProduct></UpdateProduct>}
          ></Route>
        </Route>
        <Route path="/Shop" element={<Shop></Shop>}>
          Shop
        </Route>
        <Route
          path="/search"
          element={<SearchProducts></SearchProducts>}
        ></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Collection" element={<Collection></Collection>}></Route>
        <Route
          path="updateProfile/:id"
          element={<UpdateProfile></UpdateProfile>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
