import React, { useState, useEffect } from "react";
import Order from "./Order";

import { useNavigate } from "react-router-dom";

function DetailedDish() {
  const [detallePlato, setDetallePlato] = useState(null);

  const [cantidad, setCantidad] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const platoDatail = await JSON.parse(sessionStorage.getItem("dish"));
      setDetallePlato(platoDatail);
    };

    getData();
  }, []);

  const { image, plato, precio, descripcion } = detallePlato || "";

  const AgregarPedido = () => {
    detallePlato.cantidad = cantidad;

    if (sessionStorage.pedido2 === undefined) {
      sessionStorage.setItem("pedido2", JSON.stringify([detallePlato]));
    } else {
      var dwld = JSON.parse(sessionStorage.getItem("pedido2"));

      const array = [...dwld, ...[detallePlato]];

      sessionStorage.setItem("pedido2", JSON.stringify(array));
    }

    navigate("/pedido");
  };

  return (
    <>
      {detallePlato && (
        <div className="bg-gray-200 min-h-screen">
          <div className="bg-no-repeat max-h-96 overflow-hidden bg-center">
            <img src={image} className="w-full" alt="plato_img" />
          </div>

          <div className="w-full px-1 py-3 flex flex-col justify-between items-center">
            <div className="w-full text-3xl font-bold text-gray-600 capitalize text-center">
              {plato}
            </div>
            <div className="w-full text-xl text-center font-bold text-gray-600">
              ${precio}
            </div>
          </div>

          <Order
            dish={detallePlato}
            cantidad={cantidad}
            setCantidad={setCantidad}
          />

          <div className="w-full px-4 py-3 pb-24 flex flex-row justify-between items-center">
            <div className="w-full text-lg  text-gray-500 text-center">
              {descripcion}
            </div>
          </div>



          <div className="w-full bg-gradient-to-t  h-16 fixed bottom-0 justify-center items-end text-gray-800 flex flex-row">
            <div
              onClick={() => navigate("/")}
              className="w-full  h-full text-center font-bold m-auto  bg-gray-800 text-yellow-500    flex"
            >
              <h1 className="m-auto text-lg text-left w-full pl-2">
                {" "}
                Volver al menu
              </h1>
            </div>

            <div
              onClick={() => AgregarPedido()}
              className="w-full h-full text-center font-bold bg-gray-800 text-yellow-500 flex"
            >
              <h1 className="m-auto text-right text-lg  w-full pr-2 ">
                {" "}
                Agregar al Pedido
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailedDish;
