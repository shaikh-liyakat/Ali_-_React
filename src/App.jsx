import { useState } from 'react'
import './App.css'
import CurrencyConverter from './components/CurrencyConverter'


function App() {

  return (
    <>
      {/* <h1 className='bg-amber-600' > Currency Conerter Via Api</h1> */}
      <CurrencyConverter amount={153} options={["USD", "INR", "PAK", "BANG"]}  />
    </>
  );
}

export default App
