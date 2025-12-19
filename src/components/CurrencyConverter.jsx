import React from "react";
import { useState, useEffect, useCallback } from "react";
import "../App.css";


/*

exportable components with input editable and TO to FROM and option and selection dynamically

also fetch api https://latest.currency-api.pages.dev/v1/currencies/eur.json

*/



function CurrencyConverter({
  label = "From",
  amount,
  setAmount=()=>{ },
  optionchanged=()=>{} ,
  options = [],
  selectedoption = "USD",
  inputdisable=false,
  optiondisable=false
}){

console.log("label",label);
console.log("amount",amount)
console.log("setamount",setAmount)
console.log("options", options);
console.log("optionchanged", optionchanged);
console.log("selectedoption", selectedoption);

//  const AmountChanged = (e)=>{
//   setAmount(Number(e.target.value))
//  }

//  const updatedOption = (e)=>{
//   optionchnaged(e.target.value);
//  }

  return (
    <div className="bg-cyan-400 w-full ">
      <label> {label} </label>
      <div className="w-full bg-emerald-400 flex align-middle ">
        <input
          value={amount}
          type="number"
          placeholder="Enter the Amount"
          className="outline-black"
          onChange={(e)=>{setAmount && setAmount(Number(e.target.value))}}
          disabled={inputdisable}
        />
      </div>

      <div>
        currency:

        <select
          // name="currencys"
          className="rounded-lg ml-2 w-[50px] flex px-1 py-1 bg-amber-600 cursor-pointer outline-none"
          value={selectedoption}
          onChange={(e)=>{ console.log("select tag value",e.target.value); optionchanged && optionchanged(e.target.value)}}
          
          >
          {options.map((optn,index) => {
            // {console.log(index)}
           return <option className=" text-amber-100 w-[50px]" key={index} value={optn}>
              {console.log("options tag value",optn)}
              {optn}
            </option>
          })}
        </select>
      </div>
    </div>
  );
}

export default CurrencyConverter;
