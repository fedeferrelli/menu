import React from "react";

function DetailedDish({ dish, setVerDetallePlato }) {
  const { image, plato, descripcion, categoria, precio } = dish;

  return (
    <div>
      <div className="bg-no-repeat p-4 max-h-96 overflow-hidden bg-center">
        <img src={image} className="w-full rounded-md  " alt="plato_img" />
      </div>

      <div className="w-full px-1 py-1 flex flex-col justify-between items-center">
        <div className="w-full text-3xl font-bold text-gray-600 capitalize text-center">
          {plato}
        </div>
        <div className="w-full text-xl text-center font-bold text-gray-600">
          ${precio}
        </div>
      </div>

      <div className="w-full px-4 py-3 mb-16 flex flex-row justify-between items-center">
        <div className="w-full text-lg  text-gray-500 text-center">
          {descripcion}
        </div>
      </div>

      <div  className="w-full bg-gradient-to-t from-white h-28 fixed bottom-0 justify-center items-end text-gray-800 flex flex-row">

      <div
        onClick={() => setVerDetallePlato(false)}
        className="w-full  text-center font-bold text-md bg-white text-yellow-500    flex"
      >
        <h1 className="m-auto text-left  w-full pl-2 pb-3"> Volver al menu</h1>
      </div>

      <div
        /* onClick={() => setVerDetallePlato(false)} */
        className="w-full  text-center font-bold text-md bg-white text-yellow-500    flex"
      >
        <h1 className="m-auto text-right  w-full pr-2 pb-3"> Agregar al Pedido</h1>
      </div>
      </div>
    </div>
  );
}

export default DetailedDish;
