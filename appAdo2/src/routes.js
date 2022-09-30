import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.js';
import Cadastro from './pages/cadastro/cadastro.js';
import Financiamento from './pages/financiamento/financiamento.js';
import Movimentacao from './pages/movimentacaoCC/movimentacao.js';
import Sobre from './pages/sobre/sobre.js';
import Header from './componentes/header/header.js';
import Erro from './pages/erro/erro.js';
import Cliente from './pages/cliente/cliente.js';
import Contas from './pages/contas/contas.js';


function RouterApp(){
    return(
        <body>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/financiamento" element={<Financiamento/>}/>
                <Route path="/movimentacaoConta" element={<Movimentacao/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path='*' element={<Erro/>}/>
                <Route path="/cliente" element={<Cliente/>}/>
                <Route path="/ontas" element={<Contas/>}/>
            </Routes>
        </BrowserRouter>
        </body>
    );
}

export default RouterApp;