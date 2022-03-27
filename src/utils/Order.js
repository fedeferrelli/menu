import React, { useState } from "react";

import { MdAdd, MdRemove } from "react-icons/md";

function Order({ dish, cantidad, setCantidad }) {
  const { precio } = dish;

  /* const [cantidad, setCantidad] = useState(1); */
  const [montoTotal, setMontoTotal] = useState(precio);

  const agregarCantidad = () => {
    setCantidad(cantidad + 1);
    setMontoTotal((cantidad + 1) * precio);
  };

  const quitarCantidad = () => {
    if (cantidad === 1) {
      setCantidad(1);
    } else {
      setCantidad(cantidad - 1);
      setMontoTotal((cantidad - 1) * precio);
    }
  };

  return (
    <div className="w-full pb-24 bg-gray-200 ">
      <div className="text-xl w-full text-center font-bold text-gray-700 mb-4">
        Cantidades
      </div>
      <div className="flex flex-row justify-center items-center w-full">

      <button
          className="text-4xl bg-yellow-500 text-gray-800 rounded-full"
          onClick={() => quitarCantidad()}
        >
          <MdRemove />
        </button>

        <div className="text-3xl text-center mx-2 bg-gray-100 w-1/4 text-gray-800 rounded-md">
          {cantidad}
        </div>

        <button
          className="text-4xl bg-yellow-500 text-gray-800 rounded-full"
          onClick={() => agregarCantidad()}
        >
          <MdAdd />
        </button>


      </div>

      <h1 className="text-lg text-center w-fulltext-gray-700">
        Total: ${montoTotal.toLocaleString("de-DE")}
      </h1>
    </div>
  );
}

export default Order;
