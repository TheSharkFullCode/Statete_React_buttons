import { useState } from 'react';
import React from 'react'


 export const Button = (props) => {

const [counter, setCounter] = useState(0);

const  colors = ['','purple','blue','green','yellow','orange','red'];   
const  colors2 = ['','darkgreen','purple','blue','green','yellow','orange','gray','lima'];   
const [buttonColor,setButtonColor] = useState(colors[0]);

const add = ()=>{

    setCounter(prev => prev +1);

    const nextColorIndex = (colors.findIndex(colors => colors === buttonColor)+1)% colors.length;
    //aqui utilizo findIndex para encontrar el indice del primer elemento del array que coincida con el color  actual del boton.
    //luego utilizo el operador modular % para asegurarnos de que el indice se mantenga dentro de los limites del array.
    //y por ultimo actualizamos el valor del boton con el siguinete del array.
    setButtonColor(colors[nextColorIndex])


}

// ----------------------------------------------------------------------------------
const [counter2,setCounter2] = useState(0);
const [buttonColor2,setButtonColor2] = useState(colors2[0]);


const sumOne = ()=> {

    setCounter2(prev => prev +1)
    // const 
    const nextColorIn = (colors2.findIndex(colors => colors === buttonColor2)+1)%colors.length;
    setButtonColor2(colors2[nextColorIn]);
}


// -------------------------------------------------------------------------------------------
  return (

    <div>

      <span>   Bienvenido  a mi web !! </span> <br /> <br />
    
    <button onClick={add} className='firtsButton'  style = {{backgroundColor: buttonColor}} > {counter} {props.text} </button>

    <button onClick={sumOne} className='SecondsButton'  style = {{backgroundColor: buttonColor2}} > {counter2} {props.text} </button>


    </div>
  )
}

// ---------------------------------------------------------------------------------------


export  const ParentComponent = (props) => {
    
    //almacenar los colores en un objeto llamado colRS. y lo hemo asinado en una variable llamada color style. utilizando el hook state.

    const coloRS = {
        border: '#7F8C8D',
        background: 'white',
        text: 'blue',
    }

    const [colorStyle,setColorStyle] = useState(coloRS);

    const handleColorChange = () => {

      const newColors = {
          border: '#D5D8DC',
          background: '#1C2833',
          text: 'darkgreen ',
      };
      setColorStyle(newColors);
      alert('has clikeado')
  };
  const [ColorStyle2, setColorStyle2] = useState(coloRS);

  const changeColorLight = () => {

    const addColor = {

      border: '#BB8FCE',
      background: '#F4F6F7',
      text: '#AED6F1',
    };
    setColorStyle2(addColor);
    alert("has  hecho click")
  };

    return(

        <div className='elementParent' style={{border:`2px solid ${colorStyle.border}`, background: colorStyle.background}} >

            <h1> Articulo </h1>
            <p className='colorText' style={{color:colorStyle.text}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, accusamus quas obcaecati, nihil saepe totam distinctio soluta expedita vel cupiditate laborum magni itaque architecto vitae? Vero animi aperiam quo reiciendis?</p>

            <p className='colorText' style={{color:colorStyle.text}} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, in nostrum excepturi vel ad, repudiandae nemo voluptatem illo quasi consequatur neque, voluptatum ipsa minus sapiente sed ullam tempora architecto exercitationem.</p>       

            <button className='dark' onClick={handleColorChange}>  Dark </button>

            <button className='light' onClick={changeColorLight}> {props.textParagrap} </button>


        </div>

    )

}

// export const ComponentButton = ({handleColorChange})=>{

// const handleColorChange = () => {

//     const newColors = {
//       border: 'darkgreen',
//       background: 'purple',
//        text: 'orange',
//      };
//      setColorStyle(newColors);
//    };

//      return(

//          <>
        
    
//          </>
//      )
//  }



export default Button
