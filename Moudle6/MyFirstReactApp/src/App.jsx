import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Greeting'
import './Components/BigCats'
import './Components/Emoji'
import './Components/ExtendBigCats'
import ExtendBigCats from './Components/ExtendBigCats'
import '.Components/AddCatForm'
import AddCatForm from './Components/AddCatForm'
import './Components/Calculator'
import Calculator from './Components/Calculator'
function App() {

  return (

    <>
      <div>
        {/* Without children, using name prop */}
        <Greeting name="John" />

        {/* With children */}
        <Greeting>Hello everyone!</Greeting>
      </div>

      <div>
        <BigCats></BigCats>
        <Emoji></Emoji>
        <ExtendBigCats></ExtendBigCats>
        <AddCatForm></AddCatForm>
        <Calculator></Calculator>
      </div>
    </>
  )
}

  