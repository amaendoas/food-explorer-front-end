import * as C from "./styles";
import { MdOutlineFileUpload } from "react-icons/md";
import { useState } from "react";

export function Input({title, placeholder, type, className, onChange, imgDish, ...rest }){

  return(
    <C.Container className={className}>
      <label htmlFor={title}>{title}
      {
        type === 'file' && <p>
           <MdOutlineFileUpload/>
          {
            imgDish === null ? placeholder  : imgDish.name 
          }

          </p>
      }
      </label>
      <input type={type} placeholder={placeholder}
      {...rest} id={title} onChange={onChange}/>
    </C.Container>
  )
}