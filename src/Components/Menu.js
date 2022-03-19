import React, {useState, useEffect} from 'react';

/* import { useNavigate } from 'react-router'; */

import firebase from '../utils/Firebase/firebaseConfig';

/* import {AiOutlinePlus} from 'react-icons/ai' */



import _ from "lodash";
/* import {Fade} from 'react-awesome-reveal' */


function Menu() {


const [datos, setDatos] = useState([])
const [filtro, setFiltro] = useState('')

const [categoriasOrdenadas, setCategoriasOrdenadas] = useState([])


// obtener datos de categorias

useEffect(() => {

    const obtenerCategorias = () => {
        firebase.db.collection('categorias').onSnapshot(handleSnapshotCategorias); 

     }
     obtenerCategorias();
     
 }, []);

 const handleSnapshotCategorias = (snapshot) =>{
  const categorias_list = snapshot.docs.map(doc => {
      return {
          id: doc.id,
          ...doc.data()
      }
  });

      const categorias_sorteadas = _.sortBy(categorias_list, 'posicion');
      
      const categoriasOrdenadasAux = [];
      
      categorias_sorteadas.map(cat=>(
        categoriasOrdenadasAux.push(cat.nueva_categoria)
      ))
      
      setCategoriasOrdenadas(categoriasOrdenadasAux)
     
     
}


// Snapshot permite manejar la base de datos en real time  

 const handleSnapshot = (snapshot) =>{
     const dishes_list = snapshot.docs.map(doc => {
         return {
             id: doc.id,
             ...doc.data()
         }
     });
     const platos_enStock = _.filter(dishes_list, dish => _.includes(_.lowerCase([ dish.existencia]), 'si'));
     const platos_filtrados = _.filter(platos_enStock, dish => _.includes(_.lowerCase([ dish.categoria, dish.plato, dish.descripcion, dish.tags, dish.precio]), _.lowerCase(filtro)));
     const platos_sorteados =_.sortBy(platos_filtrados, function(obj){ 
        return _.indexOf(categoriasOrdenadas, obj.categoria);
    });
     setDatos(platos_sorteados)  
    }

    useEffect(() => {

        const obtenerPlato = () => {
            firebase.db.collection('platos').onSnapshot(handleSnapshot); 
    
         }
         obtenerPlato();
         
     }, [filtro, categoriasOrdenadas]);

 

 const MostrarCategoria = (categoria, i) => {

    if(i>0){
    const categoriaAnterior =_.lowerCase(datos[i-1].categoria)

    if(categoriaAnterior!==_.lowerCase(categoria)){
        return(
            <div className="text-yellow-500  bg-gray-800 font-bold font-sans text-2xl text-left   capitalize py-2 mt-1 z-50" >{categoria} </div>
        )
    }
else return
}
    else{
        return(
            <div className="text-yellow-500  bg-gray-800 font-bold font-sans text-2xl text-left   capitalize py-2 mt-1 z-50" >{categoria} </div>

        )
    }
}

   
 
 return (
   <>
     <div className="bg-gray-800 min-h-screen pb-20">
       <h1 className="font-bold px-8 w-full text-center text-white text-xl py-6">
         {" "}
         Acá podés ver{" "}
         <span className="text-2xl block uppercase text-yellow-500">
           {" "}
           el menú
         </span>
       </h1>

       <div className="mb-4  px-2 py-3  sticky top-0 z-50 bg-gray-800">
         <input
           className="shadow italic appearance-none border rounded w-full py-3 px-3 mt-1 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:border-violet-700 focus:shadow-none "
           id="buscar"
           type="text"
           placeholder="Buscar"
           onChange={(e) => setFiltro(e.target.value)}
         />
       </div>

       <div className="flex flex-wrap justify-center w-full">
         {datos.map((dish, i) => (
           <div key={Math.random()} className="w-full px-2  sm:w-1/5">
             <div className="sticky top-16">
               {MostrarCategoria(dish.categoria, i)}
             </div>

             <div className="w-full sm:w-full bg-gray-200 border-b border-gray-300 rounded-sm flex flex-row sm:flex-col overflow-hidden box-border">
               <img
                 src={dish.image}
                 className="min-w-28 sm:w-40 h-28 sm:h-40 p-1 rounded-md  "
                 alt="plato_img"
               />

               <div className="w-3/4 sm:w-full h-full p-1">
                 <div className="text-xl text-gray-700 font-bold capitalize">
                   {dish.plato}
                 </div>

                 <div className="flex  text-gray-500">
                   {dish.descripcion.length < 37
                     ? dish.descripcion
                     : `${dish.descripcion.slice(0, 37)}...`}{" "}
                 </div>
               </div>

               <div className=" h-full w-1/4 sm:w-full  p-1 flex flex-col justify-between items-center">
                 <div className="text-xl font-bold text-gray-700">
                   ${dish.precio}
                 </div>
               </div>
             </div>

             {/*                <div className="bg-gray-100 px-2 py-3 my-2 rounded-md flex flex-row justify-center items-center">
               <img src={dish.image} alt="dish_img" className="w-24 h-24 rounded-md" ></img>
               
               <div className="bg-red-500 w-2/3 flex-col h-24">
                   <div className="font-bold text-md text-gray-800 capitalize">
                       {dish.plato}
                   </div>

                   <div>
                       {dish.descripcion}
                   </div>

               </div>
               <div className="bg-red-200 w-1/3">${dish.precio}</div>
               </div> */}
             {/* <ShowDish  
              dish={dish}
              setModificar={setModificar}
              modificar={modificar}
              setIdModificar={setIdModificar}
              setInfoModificar={setInfoModificar}
              /> */}
           </div>
         ))}
       </div>

       {/*  <div className="w-14 h-14 rounded-full bg-violet-700 fixed bottom-3 right-3 flex justify-center shadow-sm shadow-gray-500"><h1 className="m-auto text-white text-2xl text-center  align-middle"
    onClick={()=>navigate('/addDish')}
    ><AiOutlinePlus/></h1></div> */}

       <div className="w-32 h-14 rounded-xl bg-yellow-500 fixed bottom-3 right-3 flex justify-center shadow-sm px-4 shadow-gray-500">
         <h1
           className="m-auto text-white text-lg text-center  align-middle"
           /* onClick={()=>navigate('/categories')} */
         >
           Ver Orden
         </h1>
       </div>
     </div>
   </>
 );
}

export default Menu
