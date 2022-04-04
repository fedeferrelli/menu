import React, { useState } from "react";

import { MdAdd, MdRemove } from "react-icons/md";

function Order({ dish, cantidad, setCantidad }) {
  const { precio } = dish;

  const [montoTotal, setMontoTotal] = useState(Number(precio));

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
    <div className="w-full pb-4 bg-gray-200 ">
      {/* <div className="text-xl w-full text-center font-bold text-gray-700 mb-4">
        Cantidades
      </div> */}
      <div className="flex flex-row justify-center items-center w-full">
        <button
          className="h-8 w-8 font-bold bg-yellow-500 text-gray-800 rounded-l-full"
          onClick={() => quitarCantidad()}
        >
          <MdRemove className="w-full "  />
        </button>

        <div className="text-2xl h-8 flex  text-center mx-1 bg-gray-100 w-auto px-4 text-gray-800 rounded-sm">
          {cantidad}
        </div>

        <button
          className="h-8 w-8 font-bold bg-yellow-500 text-gray-800 rounded-r-full"
          onClick={() => agregarCantidad()}
        >
          <MdAdd className="w-full" />
        </button>
      </div>

      <h1 className="text-lg text-center w-full text-gray-700">
        Total: ${montoTotal.toLocaleString("de-DE")}
      </h1>
    </div>
  );
}

export default Order;
