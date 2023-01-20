import * as C from "./styles.js";
import ClipLoader from "react-spinners/ClipLoader";

export function Loading({...rest}) {
  return (
    <C.Container id="loading">
      <ClipLoader color={'#82F3FF'} {...rest}/>
      <p>Loading...</p>
      </C.Container>
  )
}