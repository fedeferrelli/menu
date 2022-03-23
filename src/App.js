import { useState } from "react";
import Menu from "./Components/Menu";
import DetailedDish from "./utils/DetailedDish";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  const [detallePlato, setDetallePlato] = useState({})

  return (
    <Router>

      <Routes>

        <Route path='/' exact element={<Menu setDetallePlato={setDetallePlato}/>}  />
        <Route path='/detailedDish' exact element={<DetailedDish detallePlato={detallePlato}/>}  />
       

      </Routes>

    </Router>


   
  );
}

export default App;
