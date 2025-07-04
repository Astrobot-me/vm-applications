import { useState } from 'react'
import BackgroundImage from "./assets/image.jpg"
import InputBox from './InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyinfo.js'


function App() {
  const [To,setTo] = useState("usd")
  const [From,setFrom] = useState("inr")
  const [amount,setAmount] = useState(0)
  const [result,setResult] = useState(0)

  const currencyInfo = useCurrencyInfo(From)
  // console.log("Curreny Info",currencyInfo);
  
  const options = Object.keys(currencyInfo) || "usd"
  // console.log(options);

  // console.log(typeof currencyInfo["usd"]);
  
  
  
  
  
  //Calculating final Amount
  const calculateResult = ()=>{
    const calc = amount * currencyInfo[To]
    setResult(calc)
    console.log("Result",result);

  }

  const swap = () =>{
    let t = To
    setTo(From)
    setFrom(t)
    t = amount
    setAmount(result)
    setResult(t)
  }

  return (
    <div
      className="w-full h-screen flex flex-col gap-8 justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <h1 className='text-white text-3xl font-semibold'>Currency Convertor</h1>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-md bg-white/30">
          <form 
            onSubmit={(e)=>{
              e.preventDefault()
              
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currecyOptions={options}
                amount={amount}
                selectCurrency={From}
                onCurrencyChange={(currency)=> setFrom(currency) }
                onAmountChange={(amount)=> setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                 onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                currecyOptions={options}
                amount={result}
                selectCurrency={To}
                onCurrencyChange={(currency)=> setTo(currency) }
                amountDisable={true}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={()=>{
              calculateResult()
            }}>
              Convert {From.toUpperCase()} to {To.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}
export default App;
