import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

export const CartContext = createContext({});

function CartProvider({children}) {

  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);


  function newCart() {
    localStorage.setItem("@foodexplorer: cart", JSON.stringify(cart));
    localStorage.setItem("@foodexplorer: cartItems", JSON.stringify(cartItems));
  }

  function cleanCart() {
    localStorage.removeItem("@foodexplorer: cart", JSON.stringify(cart));
    setCart(0)
  }

  useEffect(() => {
    const userCart = JSON.parse(localStorage.getItem("@foodexplorer: cart"));
    const userCartItems = JSON.parse(localStorage.getItem("@foodexplorer: cartItems"));

    if (userCart) {
      setCart(userCart)
      setCartItems(userCartItems)
    }
  }, [cart])

  return (
    <CartContext.Provider value={{cart, setCart, newCart, cleanCart, cartItems, setCartItems}}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  return useContext(CartContext)
}

export { CartProvider, useCart }
