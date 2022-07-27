import React, {useState, useEffect} from 'react';

import firebase from "../utils/Firebase/firebaseConfig";



function OrderView() {

    const [name, setName] = useState()
    const [table, setTable] = useState()
    const [orders, setOrders] = useState()

   
    const handleSnapshot = (snapshot) => {
        const  orders_list = snapshot.docs.map((doc) => {
           return {
            id: doc.id,
            ...doc.data(),
          };
        });
        /* const platos_enStock = _.filter(dishes_list, (dish) =>
          _.includes(_.lowerCase([dish.existencia]), "si")
        );
        const platos_filtrados = _.filter(platos_enStock, (dish) =>
          _.includes(
            _.lowerCase([
              dish.categoria,
              dish.plato,
              dish.descripcion,
              dish.tags,
              dish.precio,
            ]),
            _.lowerCase(filtro)
          )
        );
        const platos_sorteados = _.sortBy(platos_filtrados, function (obj) {
          return _.indexOf(categoriasOrdenadas, obj.categoria);
        }); */
        /* setName(orders_list[0].pedido[1].nonmbre);
        setTable(orders_list[0].pedido[0].mesa);
        setOrders(orders_list[0].pedido[3]); */

        setOrders(orders_list)

        
      };

      
   console.log(orders)
   
   
   
    useEffect(() => {
        const obtenerOrders = async () => {
         await firebase.db.collection("pedidos").onSnapshot(handleSnapshot);
        };
        obtenerOrders();
      }, []);



    return (
        <div className="min-h-screen text-white">
            {orders && 
                <div>
                  {orders.map(order=>(
                   <div key={Math.random()}>
                     <h1> nombre: {order.aOrdenar[1].nombre} </h1>
                     <h1> mesa: {order.aOrdenar[0].mesa} </h1>
                     <h1> {order.aOrdenar.slice(2).map(e=> ( <div>{e.plato} x {e.cantidad}</div> ))} </h1>
                     </div> 
                  ))}
                </div>
            }
        </div>
    )
}

export default OrderView
