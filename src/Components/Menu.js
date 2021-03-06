import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router";

import firebase from "../utils/Firebase/firebaseConfig";

import _ from "lodash";

import {Fade} from 'react-awesome-reveal'

function Menu({ pedido, setPedido }) {
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState("");

  const [categoriasOrdenadas, setCategoriasOrdenadas] = useState([]);
  const [cantidadPlatos, setCantidadPlatos] = useState();
  const navigate = useNavigate();

  // obtener cantidad de platos en el pedido

  useEffect(() => {
    const getCantidad = async () => {
      const storagedData = await JSON.parse(sessionStorage.getItem("pedido2"));

      storagedData !== null
        ? setCantidadPlatos(
            storagedData.reduce(function (previousValue, currentValue) {
              return previousValue + Number(currentValue.cantidad);
            }, 0)
          )
        : setCantidadPlatos(0);
    };

    getCantidad();
  }, []);

  // obtener datos de categorias

  useEffect(() => {
    const obtenerCategorias = () => {
      firebase.db.collection("categorias").onSnapshot(handleSnapshotCategorias);
    };
    obtenerCategorias();
  }, []);

  const handleSnapshotCategorias = (snapshot) => {
    const categorias_list = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    const categorias_sorteadas = _.sortBy(categorias_list, "posicion");

    const categoriasOrdenadasAux = [];

    categorias_sorteadas.map((cat) =>
      categoriasOrdenadasAux.push(cat.nueva_categoria)
    );

    setCategoriasOrdenadas(categoriasOrdenadasAux);
  };

  // Snapshot permite manejar la base de datos en real time

  const handleSnapshot = (snapshot) => {
    const dishes_list = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    const platos_enStock = _.filter(dishes_list, (dish) =>
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
    });
    setDatos(platos_sorteados);
  };

  useEffect(() => {
    const obtenerPlato = () => {
      firebase.db.collection("platos").onSnapshot(handleSnapshot);
    };
    obtenerPlato();
  }, [filtro, categoriasOrdenadas]);

  const MostrarCategoria = (categoria, i) => {
    if (i > 0) {
      const categoriaAnterior = _.lowerCase(datos[i - 1].categoria);

      if (categoriaAnterior !== _.lowerCase(categoria)) {
        return (
          <div className="text-yellow-500  bg-gray-800 font-bold font-sans text-2xl text-left   capitalize py-2 mt-1 z-50">
            {categoria}{" "}
          </div>
        );
      } else return;
    } else {
      return (
        <div className="text-yellow-500  bg-gray-800 font-bold font-sans text-2xl text-left   capitalize py-2 mt-1 z-50">
          {categoria}{" "}
        </div>
      );
    }
  };

  const irDetallePlato = (dish) => {
    sessionStorage.setItem("dish", JSON.stringify(dish));
    navigate("/detailedDish");
  };

  return (

   
      <div className="bg-gray-800 min-h-screen pb-20 sm:pb-0">
        
        <h1 className="font-bold px-8 w-full text-center text-white text-xl py-6">
          {" "}
          Este es{" "}
          <span className="text-2xl block uppercase text-yellow-500">
            {" "}
            nuestro men??
          </span>
        </h1>

        <div className="mb-4  px-2 py-3  sticky top-0 box-border border-2 border-gray-800 z-50 bg-gray-800">
          <input
            className="shadow italic appearance-none border rounded w-full py-3 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:border-violet-700 focus:shadow-none "
            id="buscar"
            type="text"
            placeholder="Buscar"
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>
        <Fade duration="400">
        <div className="flex flex-wrap justify-center w-full sm:mb-16">
        
          {datos.map((dish, i) => (
            <div key={Math.random()} className="w-full px-2">
              <div className="sticky top-16">
                {MostrarCategoria(dish.categoria, i)}
              </div>

              <div
                className="w-full my-1 bg-gray-200 border-b cursor-pointer border-gray-300 rounded-sm flex flex-row overflow-hidden box-border"
                onClick={() => irDetallePlato(dish)}
              >
                <div className="p-1 ">
                  <div className="bg-no-repeat max-h-[112px] sm:max-h-[96px] sm:max-w-[96px]  overflow-hidden bg-center ">
                    <img
                      src={dish.image}
                      className="w-44 rounded-sm -z-10"
                      alt="plato_img"
                    />
                  </div>
                </div>

                <div className="w-3/4 h-full p-1">
                  <div className="text-xl text-gray-700 font-bold capitalize">
                    {dish.plato}
                  </div>

                  <div className="flex  text-gray-500">
                    {dish.descripcion.length < 37
                      ? dish.descripcion
                      : `${dish.descripcion.slice(0, 37)}...`}{" "}
                  </div>
                </div>

                <div className=" h-full w-1/4 p-1 flex flex-col justify-between items-center">
                  <div className="text-xl font-bold text-gray-700 w-full text-right">
                    ${Number(dish.precio).toLocaleString("de-DE")}
                  </div>
                </div>
              </div>
            </div>
          ))}
         
        </div>
        </Fade>

        <div className="w-full h-16 fixed bottom-0 right-0 left-0 sm:w-1/2 sm:left-1/4   bg-gray-800 flex flex-row justify-end">
          <div
            onClick={() => navigate("/pedido")}
            className="h-full font-bold  text-yellow-500 flex px-3 cursor-pointer"
          >
            <h1 className="m-auto text-lg">
              {" "}
              Ver Pedido ({cantidadPlatos})
            </h1>
          </div>
        </div>
        
      </div>
    
  );
}

export default Menu;
