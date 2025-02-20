import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import EsqueceuSenha from './pages/EsqueceuSenha';
import Dashboard from './pages/Dashboard';
import CadastroEstudante from './pages/CadastroEstudante';
import CadastroCurso from './pages/CadastroCurso';
import Relatorio from './pages/Relatorio';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cadastro-estudante" element={<CadastroEstudante />} />
                <Route path="/cadastro-curso" element={<CadastroCurso />} />
                <Route path="/relatorio" element={<Relatorio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;