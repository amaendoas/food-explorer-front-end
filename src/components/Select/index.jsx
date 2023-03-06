import * as C from "./styles"
import SelectComponent from "react-select"
import CreatableSelect from 'react-select/creatable';

const styles = 
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
    alignSelf: 'center',
    height: '100%',
    color: '#C4C4C4'
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
}


export function Select({options, placeholder, onChange, isDisabled, isMulti}) {
  return (
    <C.Container>
      <SelectComponent
      isMulti={isMulti}
      isDisabled={isDisabled}
      placeholder={placeholder}
      onChange={onChange}
      styles={styles}
      options={options}
      />
    </C.Container>
  )
}

export function CreateSelect({options, placeholder, onChange, isDisabled, isMulti}) {
  return (
    <CreatableSelect
      isMulti={isMulti}
      isDisabled={isDisabled}
      placeholder={placeholder}
      onChange={onChange}
      styles={styles}
      options={options}
      />
  )
}