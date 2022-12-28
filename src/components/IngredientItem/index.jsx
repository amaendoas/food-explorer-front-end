import * as C from "./styles"
import { FiPlus, FiX } from 'react-icons/fi';

export function IngredientItem({ isNew, value, onClick, ...rest}) {

  return (
    <C.Containter isNew={isNew}>
      <input
      type="text"
      value={value}
      readOnly={!isNew}
      {...rest}
      />
      <button onClick={onClick}>
        {
          isNew ? 
          <FiPlus/>
          : <FiX/>
        }
        </button>
    </C.Containter>
  )
}