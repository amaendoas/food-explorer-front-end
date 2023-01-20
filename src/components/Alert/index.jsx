import * as C from "./styles"
import { MdCheckCircle, MdClose, MdOutlineError } from "react-icons/md"
import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/auth";

export function Alert({ isSuccess, msg }) {
  const [visible, setVisible] = useState(false);
  const { setAlertMsg } = useAuth();

  function hideAlert() {
    setVisible(false)
    setAlertMsg('')
  }

  useEffect(() => {
    if(!msg) {
      setVisible(false)
      return
    }
    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
      setAlertMsg('')
    }, 4000)

    return () => clearTimeout(timer)

  }, [msg])

  return (
    <>
    {
      visible && 
    <C.Container isSuccess={isSuccess} id='alert'>
      {
          isSuccess ? <MdCheckCircle color="#04D361"/>
          : <MdOutlineError color="#92000E"/>
      }
      <p>{msg}</p>
      <button onClick={hideAlert}>
        <MdClose size={22}/>
      </button>
    </C.Container>
    }
    </>
  )
}