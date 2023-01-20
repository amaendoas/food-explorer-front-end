import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

export const OrderContext = createContext({});

function OrderProvider({children}) {
  const [order, setOrder] = useState(0);

  useEffect(() => {
  }, [])

  return (
    <OrderContext.Provider value={{order, setOrder}}>
      {children}
    </OrderContext.Provider>
  )
}

function useOrder() {
  return useContext(OrderContext)
}

export { OrderProvider, useOrder }