import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './componentes/paginas/Home'
import DashBoard from './componentes/paginas/Dashboard';
import AtualizarDados from './componentes/paginas/AtualizarDados'

import Navbar from './componentes/layout/Navbar'
import Container from './componentes/layout/Container'

function App() {
  return (
    <div>

      <Router>
        <Navbar/>

        <Container>
          <Routes>
            <Route exact path = "/" element={<Home/>}></Route>
            <Route exact path = "/dashboard" element={<DashBoard/>}></Route>
            <Route exact path = "/atualizar-dados" element={<AtualizarDados/>}></Route>
          </Routes>
        </Container>

      </Router>

    </div>
  );
}

export default App;
