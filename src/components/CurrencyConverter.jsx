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
  setAmount,
  optionchnaged,
  options = ["abc"],
  selectedoption = "USD",
  inputdisable=false,
  optiondisable=false
}){

console.log("label",label);
console.log("amount",amount)
console.log("setamount",setAmount)
console.log("options", options);
console.log("optionchnaged", optionchnaged);
console.log("selectedoption", selectedoption);


//  const AmountChanged = (e)=>{
//   setAmount(Number(e.target.value))
//  }

//  const updatedOption = (e)=>{
//   optionchnaged(e.target.value);
//  }

  return (
    <div>
      <div> {label} </div>
      <div className="w-full bg-emerald-400 flex align-middle ">
        <input
          value={amount}
          placeholder="Enter the Amount"
          className="outline-black"
          onChange={setAmount && setAmount(Number(e.target.value))}
          disabled={inputdisable}
        />
      </div>

      <div>
        currency:
        <select
          className="rounded-lg ml-2 w-[10%] px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedoption}
          onChange={optionchnaged && AmountChanged(e.target.value)}
          disabled={optiondisable}
        >
          {options.map((optn, index) => {
            <option key={index} value={optn}>
              {optn}
            </option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default CurrencyConverter;
