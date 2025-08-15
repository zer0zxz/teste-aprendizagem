import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Aluno from './pages/Aluno';
import Admin from './pages/Admin';
import Home  from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import AgendarAvaliacao from './pages/AgendarAvaliacao';
import MeusAgendamentos from './pages/MeusAgendamentos';
import AdminAgendamentos from './pages/AdminAgendamentos';
import LoginAdmin from './pages/LoginAdmin';
import ProtecaoAdmin from './components/ProtecaoAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aluno" element={<Aluno />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/agendar" element={<AgendarAvaliacao />} />
        <Route path="/meus-agendamentos" element={<MeusAgendamentos />} />
        <Route path="/adminagendamentos" element={<AdminAgendamentos />} />
        <Route path="/adminlogin" element={<LoginAdmin />} />
        <Route path="/adminagendamentos" element={<ProtecaoAdmin><AdminAgendamentos/></ProtecaoAdmin>}/>
      </Routes>
    </Router>
  );
}

export default App;
