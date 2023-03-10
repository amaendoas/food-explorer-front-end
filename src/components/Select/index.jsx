import * as C from "./styles";
import SelectComponent from "react-select";


export function Select({options, placeholder, onChange, isDisabled, isMulti, defaultValue, isNew}) {
  const defaultStyles = 
  {
    container: (baseStyles, state) => ({
      ...baseStyles,
      height: '100%',
      width: '100%',
      color: '#C4C4C4'
    }),
    input: (baseStyles) => ({
      ...baseStyles,
      color: '#C4C4C4'
    }),
    multiValue: (baseStyles) => ({
      ...baseStyles,
      color: '#C4C4C4',
      backgroundColor: '#192227',
      border: 'none'
    }),
    multiValueLabel: (baseStyles) => ({
      ...baseStyles,
      color: '#C4C4C4',
    }),
    multiValueRemove: (baseStyles) => ({
      ...baseStyles,
      color: '#C4C4C4',
      backgroundColor: '#192227',
      border: 'none'
    }),
    control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: '#000A0F',
    width: '100%',
    height: '4rem',
    color: '#C4C4C4',
    border: 'none',
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    color: '#C4C4C4',
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    color: '#C4C4C4',
    backgroundColor: '#0D1D25',
  }),
  menuList: (baseStyles, state) => ({
    ...baseStyles,
    color: '#C4C4C4',
    backgroundColor: '#0D1D25'
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? '#000A0F' : state.isSelected ? '#065E7C' : 'transparent',
  }),
  indicatorsContainer: (baseStyles, state) => ({
    ...baseStyles,
    display: isNew ? 'none' : 'block',
  }),
}

  return (
    <C.Container className="select-div">
      <SelectComponent
      isNew={isNew}
      defaultValue={defaultValue}
      isMulti={isMulti}
      isDisabled={isDisabled}
      placeholder={placeholder}
      onChange={onChange}
      styles={defaultStyles}
      options={options}
      />
    </C.Container>
  )
}