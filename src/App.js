import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './componentes/paginas/Home'
import DashBoard from './componentes/paginas/Dashboard';
import AtualizarDados from './componentes/paginas/AtualizarDados'
import Contato from './componentes/paginas/Contato'
import Sobre from './componentes/paginas/Sobre'

import Navbar from './componentes/layout/Navbar'

function App() {
  return (
    <div>

      <Router>
        <Navbar/>
        
        <Routes>
          <Route exact path = "/" element={<Home/>}></Route>
          <Route path = "/dashboard" element={<DashBoard/>}></Route>
          <Route path = "/atualizar-dados" element={<AtualizarDados/>}></Route>
          <Route path = "/contato" element={<Contato/>}></Route>
          <Route path = "/sobre" element={<Sobre/>}></Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
