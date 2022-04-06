import React, { useState, useEffect } from "react";
import Order from "../utils/Order";

import { useNavigate } from "react-router-dom";
import {Fade} from 'react-awesome-reveal'

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

  const { image, plato, descripcion } = detallePlato || "";

  const AgregarPedido = () => {
    detallePlato.cantidad = cantidad;
    detallePlato.id2 = Date.now();

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
    <Fade>
      {detallePlato && (
        <div className="bg-gray-200 min-h-screen">
        
         
          <div className="bg-no-repeat max-h-96 overflow-hidden">
            <img src={image} className="w-full sm:rounded-sm sm:-mt-36" alt="plato_img" />
          </div>

          <div className="w-full px-1 py-3 flex flex-col justify-between items-center">
            <div className="w-full text-3xl font-bold text-gray-600 capitalize text-center">
              {plato}
            </div>
          
          </div>

          <Order
            dish={detallePlato}
            cantidad={cantidad}
            setCantidad={setCantidad}
          />



          <div className="w-full px-4 sm:px-20 py-3 pb-24 flex flex-row justify-between items-center">
            <div className="w-full text-lg leading-relaxed  text-gray-500 text-center">
              {descripcion}
            </div>
          </div>

<div className="w-full h-6 fixed sm:sticky bottom-16 bg-gradient-to-t from-gray-200"></div>

          <div className="w-full h-16 fixed bottom-0 right-0 left-0 sm:w-1/2 sm:left-1/4 flex flex-row justify-between bg-gray-800">
            <div
              onClick={() => navigate("/")}
              className="h-full font-bold  text-yellow-500 flex px-3 cursor-pointer"
            >
              <h1 className="m-auto text-lg">
                {" "}
                Volver al menu
              </h1>
            </div>

            <div
              onClick={() => AgregarPedido()}
              className="h-full font-bold  text-yellow-500 flex px-3 cursor-pointer"
            >
              <h1 className="m-auto text-lg">
                {" "}
                Agregar al Pedido
              </h1>
            </div>
          </div>
        </div>
      )}
    </Fade>
  );
}

export default DetailedDish;
