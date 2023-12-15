import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import "./formInput.css";
import { useState } from "react";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, onChange, id, ...inputProps} = props;
   
    const handleFocus = (e)=>{
        setFocused(true);
    };


    return (
        <div className="formInput">
            <label>{label}</label>
            <input { ...inputProps } 
            onChange={onChange} 
            onBlur={handleFocus} 
            focused={focused.toString()}
            onFocus={() => inputProps.name==="confirmPass" 
            && setFocused(true)}
            />
            <span>{errorMessage}</span>
        </div>
    )
} 

export default FormInput;