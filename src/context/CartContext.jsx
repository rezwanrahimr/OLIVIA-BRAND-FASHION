import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

// Create Context
export const ProductCartContext = createContext();
const CartContext = ({ children }) => {
  // Cart Quantity
  const [cartQuantity, setCartQuantity] = useState(0);
  //   Cart Items from Local Storage
  const [cartItems, setCartItems] = useState([]);
  //  Cart Product State
  const [cartProducts, setCartProducts] = useState(cartItems);
  // Total Price
  const [finalPrice, setFinalPrice] = useState(0);
  console.log(finalPrice);
  // Handle Add To Cart

  const handleAddToCart = (products) => {
    if (cartProducts?.length > 0) {
      const checkProduct = cartProducts?.filter(
        (ele) => ele._id == products._id
      );
      if (checkProduct?.length > 0) {
        return;
      }
    }

    const productData = {
      _id: products._id,
      productName: products.productName,
      ProductStock: products.ProductStock,
      category: products.category,
      ProductImage: products.ProductImage,
      ProductPrice: products.ProductPrice,
      UpdatePrice: products.UpdatePrice,
      productQuantity: 1,
    };
    let newCart = [];
    if (cartProducts !== null || cartProducts !== []) {
      newCart = [...cartProducts, productData];
      setCartProducts(newCart);
    } else {
      newCart = [productData];
      setCartProducts(newCart);
    }

    setLocalStorage(cartProducts);
  };

  const setLocalStorage = (products) => {
    localStorage.setItem("cartProducts", JSON.stringify(products));
  };

  const removeItem = (id) => {
    const updateItems = cartItems.filter((product) => product._id !== id);
    setCartItems(updateItems);
    setLocalStorage(updateItems);
    setCartQuantity(cartQuantity + 1);
  };

  //   get Local Storage Items
  useEffect(() => {
    const items = localStorage.getItem("cartProducts");
    const cartItems = JSON.parse(items);
    setCartItems(cartItems);
  }, [cartProducts, cartQuantity]);

  // Add Quantity
  const addQuantity = (id) => {
    const updateProduct = cartItems.map((item) => {
      if (item._id == id) {
        return {
          ...item,
          productQuantity: item.productQuantity + 1,
          UpdatePrice:
            (parseInt(item.productQuantity) + 1) *
            parseFloat(item.ProductPrice),
        };
      }
      return item;
    });
    setLocalStorage(updateProduct);
    setCartQuantity(cartQuantity + 1);
  };

  // Remove Quantity
  const removeQuantity = (id) => {
    const updateProduct = cartItems?.map((item) => {
      if (item._id == id) {
        return {
          ...item,
          productQuantity: item.productQuantity - 1,
          UpdatePrice: parseInt(item.UpdatePrice) - parseInt(item.ProductPrice),
        };
      }
      return item;
    });
    setLocalStorage(updateProduct);
    setCartQuantity(cartQuantity + 1);
  };

  const cartInfo = {
    handleAddToCart,
    cartItems,
    removeItem,
    addQuantity,
    cartQuantity,
    removeQuantity,
    finalPrice,
    setFinalPrice,
    setCartQuantity,
  };

  return (
    <ProductCartContext.Provider value={cartInfo}>
      {children}
    </ProductCartContext.Provider>
  );
};

export default CartContext;
