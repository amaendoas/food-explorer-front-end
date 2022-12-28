import * as C from "./styles";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function Back() {
  const navigate = useNavigate();
  return(
    <C.Container onClick={() => navigate("/")}>
      <MdKeyboardArrowLeft/>
      <span>voltar</span>
    </C.Container>
  )
}