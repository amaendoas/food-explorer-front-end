import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

export const OrderContext = createContext({});

function OrderProvider({children}) {
  const [order, setOrder] = useState(0);

  function newOrder() {

  }

  useEffect(() => {
  }, [])

  return (
    <OrderContext.Provider value={{order, setOrder, newOrder}}>
      {children}
    </OrderContext.Provider>
  )
}

function useOrder() {
  return useContext(OrderContext)
}

export { OrderProvider, useOrder }