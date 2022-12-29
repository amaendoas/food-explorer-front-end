import * as C from "./styles";
import { MdOutlineFileUpload } from "react-icons/md";
import { useState } from "react";

export function Input({title, placeholder, type, className, onChange, ...rest }){
  const [fileName, setFilmeName] = useState('');

  return(
    <C.Container className={className}>
      <label htmlFor={title}>{title}
      {
        type === 'file' && <p>
           <MdOutlineFileUpload/>
          {
            fileName === '' ? placeholder  : fileName 
          }

          </p>
      }
      </label>
      <input type={type} placeholder={placeholder}
      {...rest} id={title} onChange={ type === 'file' ? (e) => {
          let inputImage = e.target.files[0];
          setFilmeName(inputImage.name)
      } : onChange}/>
    </C.Container>
  )
}