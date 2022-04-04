import { useState } from "react";
import Menu from "./Components/Menu";
import DetailedDish from "./utils/DetailedDish";
import Pedido from "./Components/Pedido";
import Home from "./Components/Home";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  const [detallePlato, setDetallePlato] = useState({})
  const [pedido, setPedido] = useState([])

  return (

    <div className="flex flex-row bg-gray-800">
        {/* <div className="sm:flex  sticky right-1/2">
          <Home />
        </div> */}
 <Router >
     
      

        <div className="sm:w-1/2 w-full m-auto">
          <div className=" sm:m-auto">
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <Menu
                    pedido={pedido}
                    setPedido={setPedido}
                    setDetallePlato={setDetallePlato}
                  />
                }
              />
              <Route
                path="/detailedDish"
                exact
                element={<DetailedDish detallePlato={detallePlato} />}
              />
              <Route
                path="/pedido"
                exact
                element={<Pedido pedido={pedido} setPedido={setPedido} />}
              />
            </Routes>
          </div>
        </div>
    
    </Router>
    </div>
  );
}

export default App;
