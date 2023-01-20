import { createContext, useContext, useEffect } from "react";
import { api } from "../services/api";
import { useState } from "react";
import { useCart } from "./cart";
import { useFavs } from "./favs";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ data, setData ] = useState({});
  const [showLoading, setShowLoading] = useState(false);
  const { setCart, setCartItems } = useCart();
  const { setFavsList } = useFavs();
  const [alertMsg, setAlertMsg] = useState('');
  const [success, setSuccess] = useState(false);

  async function signIn({ email, password }) {
    setShowLoading(true)
    try {
      const response = await api.post("/session", {email, password});
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer: user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer: token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setShowLoading(false)
      setData({user, token})

    } catch(error) {
      setShowLoading(false)
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setAlertMsg('Não foi possível entrar')
        setSuccess(false)
      }
    }

  }

  function signOut() {
    setData({});
    setCart(0);
    setCartItems([]);
    setFavsList([]);
    localStorage.removeItem("@foodexplorer: token");
    localStorage.removeItem("@foodexplorer: user");
    localStorage.removeItem("@foodexplorer: cart");
    localStorage.removeItem("@foodexplorer: cartItems");
    localStorage.removeItem("@foodexplorer: favs");
  }

  function getUser() {
    const token = localStorage.getItem("@foodexplorer: token");
    const user = localStorage.getItem("@foodexplorer: user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <AuthContext.Provider value={ { signIn, signOut, user: data.user, showLoading, setShowLoading, alertMsg, success, setAlertMsg, setSuccess }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };