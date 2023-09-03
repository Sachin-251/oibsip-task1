import React, { useState } from 'react';

export default function Calculator() {

  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className='bg-opaque-black md:w-1/3 sm:w-1/2 sm:h-[600px] w-full md:h-[600px] h-full rounded-md border-4 border-grey'>
      <div className='rounded-md'><input type='text' className="flex justify-center items-baseline w-full bg-gradient-black h-32 text-white rounded-b-md text-end border-0 font-playfair text-3xl font-semibold focus:outline-none p-6" value={result} /></div>
        
        <div className="grid grid-cols-4 m-2 rounded-md mt-20">
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600 col-span-2' onClick={clear} name="AC" >AC</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={backspace} name="C" >C</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="/" >/</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="1" >1</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="2" >2</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="3" >3</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="*" >*</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="4" >4</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="5" >5</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="6" >6</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="+" >+</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="7" >7</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="8" >8</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="9" >9</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="-" >-</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="." >.</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600' onClick={handleClick} name="0" >0</button>
          <button className='bg-dark-grey font-playfair text-2xl font-semibold p-3 m-2 rounded-md hover:bg-slate-600 col-span-2' onClick={calculate} name="=" >=</button>
        </div>
    </div>
  )
}
