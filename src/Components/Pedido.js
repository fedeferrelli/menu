import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Pedido(/* {pedido, setPedido} */) {
  /* const myStorage = window.sessionStorage;
    const dishes = JSON.parse(sessionStorage.dish)

    console.log(JSON.parse(myStorage.dish)) */

  const [pedido, setPedido] = useState();
  const [total, setTotal] = useState('');
  const [trigger, setTrigger] = useState(true)
  /* sessionStorage.clear(); */
  /* sessionStorage.setItem('pedido2', JSON.stringify(dish)) */
  console.log(sessionStorage);

  useEffect(() => {
    
    const getData = async()=>{

        const storagedData = await JSON.parse(sessionStorage.getItem("pedido2"));
        
        if (storagedData != null){
        const total = storagedData.reduce(function (previousValue, currentValue) {
            return previousValue + Number(currentValue.precio) * Number(currentValue.cantidad);
          }, 0);
          setTotal(total);}
       
       setPedido(storagedData)
          

}

getData();

  }, [trigger]);

  const navigate = useNavigate();


const cleanPedido = () =>{
    sessionStorage.clear()
    setTrigger(!trigger)
}


  return (
    <>
    { !pedido ?
    
    <div className="w-full h-screen bg-gray-100 flex flex-row justify-center items-center">

        <div className="w-10/12 m-auto p-4 text-center text-lg">
            Todavía no agregaste ningún plato al pedido. <span className="block mt-4">Por favor hacelo desde el menú.</span>
        </div>
               <div
          onClick={() => navigate("/")}
          className="w-full h-14 fixed bottom-0 text-center font-bold bg-gray-800 text-yellow-500 flex"
        >
          <h1 className="m-auto text-left text-lg  w-full pl-2 ">
            {" "}
            Volver al Menu
          </h1>
        </div>

    </div>
    
    :
      <div className="w-full h-screen bg-gray-800">
                 <h1 className="font-bold px-8 w-full text-center text-white text-xl py-6">
         {" "}
         Acá podés ver{" "}
         <span className="text-2xl block uppercase text-yellow-500">
           {" "}
           tu pedido
         </span>
       </h1>
        {pedido.map((dish) => (
          <div key={Math.random()} className="w-full px-2  sm:w-1/5">
            <div className="w-full sm:w-full bg-gray-100 border-b border-gray-300 rounded-sm flex flex-row sm:flex-col overflow-hidden box-border">
              <div className="w-3/4 sm:w-full h-full p-1">
                <div className="text-xl text-gray-700 font-bold capitalize">
                {dish.plato} <span className="text-sm italic lowercase text-gray-700"> x {dish.cantidad} </span>
                </div>
              </div>

              <div className=" h-full w-1/4 sm:w-full  p-1 flex flex-col justify-between items-center">
                <div className="text-xl font-bold text-gray-700">
                  ${dish.precio * dish.cantidad}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="w-full h-12 text-center font-bold bg-gray-800 text-yellow-500 flex">
          <h1 className="m-auto text-right text-lg  w-full pr-2 ">
            {" "}
            Total: ${total.toLocaleString("de-DE")}
          </h1>
        </div>

 
        <div className="w-full bg-gradient-to-t  h-16 fixed bottom-0 justify-center items-end text-gray-800 flex flex-row">
        <div
          onClick={() => navigate('/')}
          className="w-full  h-full text-center font-bold m-auto  bg-gray-800 text-yellow-500    flex"
        >
          <h1 className="m-auto text-lg text-left w-full pl-2">
            {" "}
            Volver al menu
          </h1>
        </div>

      

        <div
         onClick={()=>cleanPedido()}
          className="w-full h-full text-center font-bold bg-gray-800 text-yellow-500 flex"
        >
          <h1 className="m-auto text-right text-lg  w-full pr-2 ">
            {" "}
            Limpiar Pedido
          </h1>
        </div>
        </div>
      </div>
    }</>
  );
}

export default Pedido;
