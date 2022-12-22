import { createContext, useContext, useEffect } from "react";
import { api } from "../services/api";
import { useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ data, setData ] = useState({});
  const [showLoading, setShowLoading] = useState(false);

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
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar')
      }
    }

  }

  function signOut() {
    localStorage.removeItem("@foodexplorer: token");
    localStorage.removeItem("@foodexplorer: user");
    localStorage.removeItem("@foodexplorer: cart");
    localStorage.removeItem("@foodexplorer: cartItems");
    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer: token");
    const user = localStorage.getItem("@foodexplorer: user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={ { signIn, signOut, user: data.user, showLoading, setShowLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };