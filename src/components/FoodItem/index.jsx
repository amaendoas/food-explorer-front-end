import * as C from "./styles";
import { MdFavoriteBorder, MdFavorite,MdKeyboardArrowRight, MdEdit} from "react-icons/md";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";
import { Link, useNavigate } from "react-router-dom";
import foodImg from "../../assets/food-default.svg"
import { api } from "../../services/api";
import { useFavs } from "../../contexts/favs";
import { CartHandler } from "../CartHandler";


export function FoodItem({dish}) {
  const [fav, setFav] = useState(false);

  const { user } = useAuth();
  const { favsList, setFavsList, newFavsList} = useFavs();
  const { cart, newCart } = useCart();
  
  const navigate = useNavigate();

  function setDishFav() {
    api.post('/favorites', { dish_id: dish.id})
    .then((res) => setFavsList(prevState => [...prevState, ...res.data]))
  }

  function removeDishFav() {
    api.delete(`/favorites/${dish.id}`)
    .then((res) => setFavsList(res.data))
  }

  function isDishFav() {
    for (let index = 0; index < favsList.length; index++) {
      if(favsList[index].dish_id === dish.id){
        setFav(true)
      }
    }
  }

  function handleFav() {
    if(fav) {
      setFav(false)
      removeDishFav()
    } else {
      setFav(true)
      setDishFav()
    }
  }
  
  
  useEffect(() => {
    isDishFav()
    newFavsList(user.id)
    newCart()
  }, [cart, favsList])
  
  
  return (
    <C.Container>
      {
         user.isAdmin ? 
         <button className="edit-btn" onClick={() => navigate(`/edit/${dish.id}`)}>
           <MdEdit/>
         </button> : <button onClick={handleFav} className="fav-btn">
        {
          fav ? <MdFavorite className="red-heart"/> : <MdFavoriteBorder/>
        }
      </button>
      }
        <Link to={`/details/${dish.id}`}>
        <img src={dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : foodImg} alt={`imagem de ${dish.name}`} />
        <h2>{dish.name} <MdKeyboardArrowRight/></h2>
        </Link>
      <p className="description">{dish.description}</p>
      <p className="price">R$ {dish.price}</p>
      <CartHandler dish={dish}/>
    </C.Container>
  )
}