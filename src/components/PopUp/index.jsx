import * as C from './styles'
import {MdErrorOutline, MdClose} from 'react-icons/md'
import { Button } from '../Button'

export function PopUp({popUpMsg, confirmMsg, onConfirm, onClose}) {
  return (
    <C.Container>
      <C.Content>
        <C.Close onClick={onClose}>
          <MdClose size={20}/>
        </C.Close>
        <C.Title>
          <MdErrorOutline/>
          <p>{popUpMsg}</p>
        </C.Title>
        <C.Footer>
          <Button title='Cancelar' className="cancel" onClick={onClose}/>
          <Button title={confirmMsg} onClick={onConfirm}/>
        </C.Footer>

      </C.Content>
    </C.Container>
  )
}