import * as C from "./styles"
import SelectComponent from "react-select"

export function Select({ options, placeholder, onChange, isDisabled}) {

  return (
    <C.Container>
      <SelectComponent
      isDisabled={isDisabled}
      placeholder={placeholder}
      onChange={onChange}
      styles={{
        container: (baseStyles, state) => ({
          ...baseStyles,
          height: '100%'
        }),
        control: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: '#000A0F',
        minWidth: 'calc(12rem + 10vw);',
        height: '100%'
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
      placeholder: (baseStyles, state) => ({
        ...baseStyles,
        fontSize: 'calc(0.5rem + 0.6vw)'
      })

    }}
      options={options}
      />
    </C.Container>
  )
}