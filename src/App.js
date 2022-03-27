import { useState } from "react";
import Menu from "./Components/Menu";
import DetailedDish from "./utils/DetailedDish";
import Pedido from "./Components/Pedido";

import SessionStore from "./Components/SessionStore";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  const [detallePlato, setDetallePlato] = useState({})
  const [pedido, setPedido] = useState([])

  return (
    <Router>

      <Routes>

    {/* <Route path='/' exact element={<SessionStore/>}  /> */}

        <Route path='/' exact element={<Menu pedido={pedido} setPedido={setPedido} setDetallePlato={setDetallePlato}/>}  /> 
        <Route path='/detailedDish' exact element={<DetailedDish detallePlato={detallePlato}/>}  />
        <Route path='/pedido' exact element={<Pedido pedido={pedido} setPedido={setPedido}/>}  />
       

      </Routes>

    </Router>


   
  );
}

export default App;
