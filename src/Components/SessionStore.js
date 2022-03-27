import React, {useState, useEffect} from 'react'

function SessionStore() {


const [pedidoList, setPedidoList] = useState();
const dish = [{plato:'fideosBASE', precio:45, categoria:'pasta'}]/* , {plato:'fede', precio:15, categoria:'pastaBase'}] */
const [trigger, setTrigger] = useState(true);
const [data, setData] = useState()
  /* sessionStorage.clear(); */
  /* sessionStorage.setItem('pedido2', JSON.stringify(dish)) */
  console.log(sessionStorage)

  useEffect(() => {
      setData(JSON.parse(sessionStorage.getItem('pedido2')))
  }, [trigger])

  
  

    const AgregarPedido = () => {
       
       if (sessionStorage.length===0){
           sessionStorage.setItem('pedido2', JSON.stringify(dish));
           setTrigger(!trigger)
        }

       else{


        var dwld= JSON.parse(sessionStorage.getItem('pedido2'))
        console.log('dwld', dwld)
        
        const array =[...dwld, ...dish]
        console.log(array)

        /*var i = array.length
        console.log(i);

        array[i] = dish
        console.log(array)*/

        sessionStorage.setItem('pedido2', JSON.stringify(array)) 
        setTrigger(!trigger)
        
    }
        

       };


    return (
        <div>

            <div
          onClick={() => AgregarPedido()}
          className="w-full h-full text-center font-bold bg-gray-800 text-yellow-500 flex"
        >
          <h1 className="m-auto text-right text-lg  w-full pr-2 ">
            {" "}
            Agregar al Pedido
          </h1>
        </div>

        { data && <div >
            {data.map(plato=>(
                <div className="bg-violet-500 text-lg p-4 text-center w-full my-1" key={Math.random()}>{plato.plato}</div>
            ))}
        </div>}
        </div>
    )
}

export default SessionStore
