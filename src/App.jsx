import { useState } from 'react'
import './App.css'
import CurrencyConverter from './components/CurrencyConverter'
import Apicall from './calls/Apicall';


function App() {
  const apiCall = Apicall("inr")

  // const [currencyVal, setcurrencyVal] = useState(apiCall);
  return (
    <>
      <div className="w-full flex align-middle justify-center">
        {/* <h1 className='bg-amber-600' > Currency Conerter Via Api</h1> */}

        <CurrencyConverter
          amount={153}
          options={["USD", "INR", "PAK", "BANG"]}
        />
        {/* {currencyVal} */}
      </div>
    </>
  );
}

export default App
