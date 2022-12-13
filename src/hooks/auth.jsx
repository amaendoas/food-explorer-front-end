import { createContext, useContext } from "react";
import { api } from "../services/api";
import { useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ data, setData ] = useState({});

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/session", {email, password});
      const { user, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({user, token})



    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar')
      }
    }

  }

  return (
    <AuthContext.Provider value={ { signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };