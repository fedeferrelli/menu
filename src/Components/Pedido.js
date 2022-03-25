import React from 'react';
import {useNavigate} from 'react-router-dom'

function Pedido({pedido, setPedido}) {

    /* const myStorage = window.sessionStorage;
    const dishes = JSON.parse(sessionStorage.dish)

    console.log(JSON.parse(myStorage.dish)) */

    const navigate=useNavigate()

    let total = pedido.reduce(function (previousValue, currentValue) {
        return previousValue + Number(currentValue.precio);
      }, 0);

      console.log(total)

  /*   [0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
        return valorAnterior + valorActual;
      }, 10); */


    return (
        <div className="w-full bg-gray-100">
         {pedido.map((dish)=>(
            <div key={Math.random()} className="w-full px-2  sm:w-1/5">
          
            <div className="w-full sm:w-full bg-gray-100 border-b border-gray-300 rounded-sm flex flex-row sm:flex-col overflow-hidden box-border"
           >
             
              <div className="w-3/4 sm:w-full h-full p-1">
                <div className="text-xl text-gray-700 font-bold capitalize">
                  {dish.plato}
                </div>

              </div>

              <div className=" h-full w-1/4 sm:w-full  p-1 flex flex-col justify-between items-center">
                <div className="text-xl font-bold text-gray-700">
                  ${dish.precio}
                </div>
              </div>
            </div>
            </div>

         ))}  


<div
               className="w-full h-full text-center font-bold bg-gray-800 text-yellow-500 flex"
      >
        <h1 className="m-auto text-right text-lg  w-full pr-2 "> Total: ${total.toLocaleString('de-DE')}</h1>
      </div> 

         <div
       onClick={()=>navigate('/')}
        className="w-full h-full text-center font-bold bg-gray-800 text-yellow-500 flex"
      >
        <h1 className="m-auto text-right text-lg  w-full pr-2 "> Volver al Menu</h1>
      </div> 
        </div>
    )
}

export default Pedido;


