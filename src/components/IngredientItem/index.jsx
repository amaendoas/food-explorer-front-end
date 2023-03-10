import * as C from "./styles"
import { FiPlus, FiX } from 'react-icons/fi';
import { Select } from "../Select";

const ingredientsOptions = [
  { value: 'alface', label: 'alface'},
  { value: 'ameixa', label: 'ameixa'},
  { value: 'amêndoas', label: 'amêndoas'},
  { value: 'aniz', label: 'aniz'},
  { value: 'café', label: 'café'},
  { value: 'camarão', label: 'camarão'},
  { value: 'canela', label: 'canela'},
  { value: 'damasco', label: 'damasco'},
  { value: 'farinha', label: 'farinha'},
  { value: 'limão', label: 'limão'},
  { value: 'maçã', label: 'maçã'},
  { value: 'maracujá', label: 'maracujá'},
  { value: 'massa', label: 'massa'},
  { value: 'pão', label: 'maracujá'},
  { value: 'pão naan', label: 'pão naan'},
  { value: 'pepino', label: 'pepino'},
  { value: 'pêssego', label: 'pêssego'},
  { value: 'pesto', label: 'pesto'},
  { value: 'presunto', label: 'presunto'},
  { value: 'rabanete', label: 'rabanete'},
  { value: 'rúcula', label: 'rúcula'},
  { value: 'tomate', label: 'tomate'},
  { value: 'whiskey', label: 'whiskey'}
]

const styles = {
  control: (baseStyles, state) => ({
  ...baseStyles,
  height: '3.2rem'})
}

export function IngredientItem({ isNew, value, onClick, onChange, ...rest}) {

  return (
    <C.Container isNew={isNew}>
      {isNew &&
        // <select name="options">
        // {ingredientsOptions.map(ingredient => (
        //   <option value={ingredient.value}>{ingredient.value}</option>
        // ))}
        // </select>
      <Select
        isNew={isNew}
        styles={styles}
        options={ingredientsOptions}
        placeholder='Digite um ingrediente'
        onChange={onChange}/>
      }
      { !isNew && <input
      type="text"
      value={value}
      readOnly={!isNew}
      onChange={onChange}
      {...rest}
      />}
      <button onClick={onClick}>
        {
          isNew ? 
          <FiPlus/>
          : <FiX/>
        }
        </button>
    </C.Container>
  )
}