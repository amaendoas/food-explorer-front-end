import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

export const FavsContext = createContext({});

function FavsProvider({children}) {
  const [favs, setFavs] = useState([]);

  function newFavs(){
    localStorage.setItem("@foodexplorer: favs", JSON.stringify(favs));
  }

  useEffect(() => {
    const userFavs = JSON.parse(localStorage.getItem("@foodexplorer: favs"));

    if (userFavs) {
      setFavs(userFavs)
    }
  }, [])

  return (
    <FavsContext.Provider value={{favs, setFavs, newFavs}}>
      {children}
    </FavsContext.Provider>
  )
}

function useFavs() {
  return useContext(FavsContext)
}

export { FavsProvider, useFavs }