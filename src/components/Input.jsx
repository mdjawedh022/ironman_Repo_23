import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../redux/action";

const Input = () => {
    const dispatch =useDispatch();
    
 const handleChange=(e)=>{
    const {value}=e.target
dispatch(updateData(value))
 }

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={handleChange}
        placeholder="text.."
      />
    </div>
  );
};

export default Input;
