import { useState } from "react";
import Menu from "./Components/Menu";
import DetailedDish from "./Components/DetailedDish";
import Pedido from "./Components/Pedido";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [detallePlato, setDetallePlato] = useState({});
  const [pedido, setPedido] = useState([]);

  return (
    <div className="flex flex-row bg-gray-800">
      <Router>
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
