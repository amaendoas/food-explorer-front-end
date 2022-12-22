import * as C from "./styles.js";
import FadeLoader from "react-spinners/FadeLoader";

export function Loading() {
  return (
    <C.Container>
      <FadeLoader color={'#82F3FF'} />
      <p>Loading...</p>
      </C.Container>
  )
}