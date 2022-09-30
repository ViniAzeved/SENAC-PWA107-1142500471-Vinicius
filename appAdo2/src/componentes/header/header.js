import {Link} from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <header>
            <h1 class="cabecalhoTitulo">Xinforinfola Bank</h1>
            <div class="navegacaoCabecalho">
                <Link class="linkCabecalho" to="/">Home</Link>
                <Link class="linkCabecalho" to="/cadastro">Cadastro</Link>
                <Link class="linkCabecalho" to="/financiamento">Financiamento</Link>
                <Link class="linkCabecalho" to="/movimentacaoConta">Movimentação CC</Link>
                <Link class="linkCabecalho" to='/sobre'>Sobre Nos</Link> 
            </div>
        </header>
    );
}

export default Header;