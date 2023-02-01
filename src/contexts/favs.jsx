import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";
import { useAuth } from "./auth";

export const FavsContext = createContext({});

function FavsProvider({children}) {
  const [favsList, setFavsList] = useState([]);
  const { setAlertMsg, setSuccess } = useAuth();
  
  function newFavsList(user_id){
    api.get(`/favorites/${user_id}`)
    .then((res) => {
      localStorage.setItem("@foodexplorer: favs", JSON.stringify(res.data));
    })
    .catch((error) => {
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setAlertMsg('Não foi possível adicionar aos favoritos')
      }
    });
  }


  useEffect(() => {
    const userFavs = JSON.parse(localStorage.getItem("@foodexplorer: favs"));

    if (userFavs) {
      setFavsList(userFavs)
    }
  }, [])

  return (
    <FavsContext.Provider value={{favsList, setFavsList, newFavsList}}>
      {children}
    </FavsContext.Provider>
  )
}

function useFavs() {
  return useContext(FavsContext)
}

export { FavsProvider, useFavs }