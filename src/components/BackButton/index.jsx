import * as C from "./styles";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  return(
    <C.Container onClick={() => navigate(-1)}>
      <MdKeyboardArrowLeft/>
      <span>voltar</span>
    </C.Container>
  )
}