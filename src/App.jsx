import { useState } from "react";
import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import Apicall from "./calls/Apicall";

function App() {
  const apiCall = Apicall();
  console.log("api call response", apiCall);

  const currency_keys = Object.keys(apiCall);
  console.log(currency_keys);

  // const [currencyVal, setcurrencyVal] = useState(apiCall);
  return (
    <>
      <div className="w-full flex align-middle justify-center">
        {/* <h1 className='bg-amber-600' > Currency Conerter Via Api</h1> */}

        <CurrencyConverter amount={153} options={currency_keys} />
        <CurrencyConverter
          amount={153}
          inputdisable={true}
          label="TO"
          options={currency_keys}
        />
        {/* {currencyVal} */}
      </div>
    </>
  );
}

export default App;
