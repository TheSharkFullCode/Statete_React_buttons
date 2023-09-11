import { useState } from 'react'

// import	{Button} from ".component/Button.jsx" ç
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Button} from './component/Button.jsx'
import { ParentComponent } from './component/Button' 




function App() {

  // const mySetCounter = [{number: 1, text:'Likes'}];
  // const [count, setCount] = useState(0)

  // const userImg = [{name: 'visass', imgUrl: '..assets/img/masterCardt.png'}]
  // const imgurL = require('../assests/img/masterCardt.png').default;



  return (

  <>
  <Button text  = {"Likes"}> hello  </Button> 

  <ParentComponent textParagrap = "Light"> </ParentComponent>
    
 {/* <ComponentButton> </ComponentButton> */}




  </>
   

  )
}

export default App













