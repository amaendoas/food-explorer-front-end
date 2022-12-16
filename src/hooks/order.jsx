import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

export const OrderContext = createContext({});

function OrderProvider({children}) {
  const [order, setOrder] = useState(0);

  function newOrder(){
    localStorage.setItem("@foodexplorer: order", JSON.stringify(order));
  }

  useEffect(() => {
    const userOrder = JSON.parse(localStorage.getItem("@foodexplorer: order"));

    if (userOrder) {
      setOrder(userOrder)
    }
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