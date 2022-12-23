import { AuthProvider } from "./auth";
import { CartProvider } from "./cart";
import { FavsProvider } from "./favs";
import { OrderProvider } from "./order";

export function AppContextProvider({children}) {
  return (
  <CartProvider>
    <OrderProvider>
      <FavsProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </FavsProvider>
    </OrderProvider>
  </CartProvider>
  )
}