import React, { useState } from "react";
import { useEffect } from "react";

function Apicall(currency = "usd") {
  let [data, setdata] = useState({});

  //  const date

  useEffect(() => {
    //   fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`).then((resp)=>{
    //  return resp.json()
    //   }).then((resp)=>{
    // console.log("currency",resp)
    // console.log("curency val with key",resp.currency)
    //   })

    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setdata(res[currency]);
      });
    // console.log();
  }, [currency]);

  console.log("api data", data[currency]);
  return data;
}

export default Apicall;
