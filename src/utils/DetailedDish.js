import React from 'react'

function DetailedDish({dish, setVerDetallePlato}) {

    const {image, plato, descripcion, categoria, precio} = dish;

    return (
        <div>
             <div className="bg-no-repeat max-h-96 overflow-hidden bg-center"> 
                <img
                 src={image}
                 className="w-full  p-1 rounded-md  "
                 alt="plato_img"
               />
</div>


<div className="w-full px-1 py-1 flex flex-col justify-between items-center"> 
      <div className="w-full text-3xl font-bold text-gray-600 capitalize text-center">{plato}</div>
      <div className="w-full text-xl text-center font-bold text-gray-600">${precio}</div> 
</div>

<div className="w-full px-4 py-1 mb-16 flex flex-row justify-between items-center"> 
      <div className="w-full text-lg  text-gray-500 text-center">{descripcion}</div>

</div>

            <div onClick={()=>setVerDetallePlato(false)} className="w-full h-12 text-center font-bold text-xl fixed bottom-0 bg-yellow-400 text-gray-800 uppercase flex"><h1 className="m-auto"> Back to menu</h1></div>
        </div>
    )
}

export default DetailedDish;