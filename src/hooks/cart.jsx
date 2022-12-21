import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

export const CartContext = createContext({});

function CartProvider({children}) {

  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [dishes, setDishes] = useState([]);

  function newCart() {
    localStorage.setItem("@foodexplorer: cart", JSON.stringify(cart));
    localStorage.setItem("@foodexplorer: cartItems", JSON.stringify(cartItems));
  }

  function cleanCart() {
    localStorage.removeItem("@foodexplorer: cart");
    localStorage.removeItem("@foodexplorer: cartItems");
    setCart(0)
    setCartItems([])
  }

  async function getDishes() {
    const response = await api.get('/dishes')
    setDishes(response.data)
  }

  useEffect(() => {
    const userCart = JSON.parse(localStorage.getItem("@foodexplorer: cart"));
    const userCartItems = JSON.parse(localStorage.getItem("@foodexplorer: cartItems"));

    
    if (userCart) {
      setCart(userCart)
    }
    if(userCartItems) {
      setCartItems(userCartItems)
    }
    
    getDishes()
  }, [cart])

  return (
    <CartContext.Provider value={{cart, setCart, newCart, cleanCart, cartItems, setCartItems, getDishes, dishes}}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  return useContext(CartContext)
}

export { CartProvider, useCart }
