import {useState} from 'react';
import './movimentacao.css'

function Movimentacao(){
    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [deposito, setDeposito] = useState('');
    const [saque, setSaque] = useState('');
    const [saldo, setSaldo] = useState('');

    const [dadosUsuarios, setUsuarios] = useState(
        {saldoDados:'0,00', depositoDados:'0,00', saqueDados:'0,00'}
    );

    function atualizarValores(dados){
        dados.preventDefault();
        var depositoValor;
        var saqueValor;
        var saldoValor;
        var total; 

        if(deposito === ''){
            depositoValor = 0;
        } else {
            depositoValor = parseInt(deposito);
        }
        

        if(saque === ''){
            saqueValor = 0;
        } else {
            saqueValor = parseInt(saque);
        }
        

        if(saldo === ''){
            saldoValor = 0;
        } else {
            saldoValor = parseInt(saldo);
        }

        total = 0;


        total = saldoValor - saqueValor + depositoValor;
        
        setUsuarios(
            {saldoDados:total, depositoDados:depositoValor, saqueDados:saqueValor}
        );
        
        setNome('');
        setCPF('');
        setDeposito('');
        setSaque('');
        setSaldo('');

    }

    return (
        <div>
            <div class="tituloMovimentacao">
                <h1>Movimentacao C/C</h1>
            </div>

            <hr/>
            <br></br>
            <div align = 'center'>
                <form onSubmit={atualizarValores}>
                    <label>Nome:&nbsp;</label>
                    <input type="text" placeholder="Informe um nome..." value={nome} onChange={(evento) => setNome(evento.target.value)}/>

                    <br/><br/>
                    <label>CPF:&nbsp;</label>
                    <input type="text" placeholder="Informe o seu CPF..." value={CPF} onChange={(evento) => setCPF(evento.target.value)}/>

                    <br/><br/>
                    <label>Saldo:&nbsp;</label>
                    <input type="text" placeholder="Informe o seu saldo..." value={saldo} onChange={(evento) => setSaldo(evento.target.value)}/>

                    <br/><br/>
                    <label>Deposito:&nbsp;</label>
                    <input type="text" placeholder="Quantia a depositar..." value={deposito} onChange={(evento) => setDeposito(evento.target.value)}/>

                    <br/><br/>
                    <label>Sacar:&nbsp;</label>
                    <input type="text" placeholder="Quantia a sacar..." value={saque} onChange={(evento) => setSaque(evento.target.value)}/>

                    <br/><br/>
                    <div align="center">
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            </div>
            <br></br>
            <hr/>
            <br></br>
            <div align = 'center'>
                <h3 class="subtituloMovimentacao">Total:</h3> 
                <p><strong>Saldo:&nbsp;R$&nbsp;</strong>{dadosUsuarios.saldoDados}</p>
                <p><strong>Valor Depositado:&nbsp;+R$&nbsp;</strong>{dadosUsuarios.depositoDados}</p>
                <p><strong>Valor Saque:&nbsp;-R$&nbsp;</strong>{dadosUsuarios.saqueDados}</p>
            </div>
        </div>
    );
}

export default Movimentacao;