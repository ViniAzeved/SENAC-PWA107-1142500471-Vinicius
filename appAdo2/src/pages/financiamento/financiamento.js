import {useState} from 'react';
import './financiamento.css'

function Financiamento(){
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [parcelas, setParcelas] = useState('');

    const [dadosUsuarios, setDadosUsuarios] = useState(
        {valorSolicitadoDados:'0,00', valorParcelaDados:'0,00', jurosDados:'0,00'}
    );


    function calcularValor(dados){
        dados.preventDefault();
        var totalParcelas = parseInt(parcelas);
        var solicitacao = parseInt(valor);
        var total = 0;
        var valorJuros = 0;

        if(parcelas === ''){
            totalParcelas = 0;
        } else {
            totalParcelas = parseInt(parcelas);
        }

        if(valor === ''){
            solicitacao = 0;
        } else {
            solicitacao = parseInt(valor);
        }

        if(totalParcelas === 0){
            total = solicitacao;
        } else {
            if(solicitacao > 3000 || totalParcelas >= 11){
                valorJuros = 1.8;
                total = solicitacao * valorJuros;
                total = total /totalParcelas;
            } else {
                total = solicitacao /totalParcelas;
            }
        }
        setDadosUsuarios(
            {valorSolicitadoDados:solicitacao, valorParcelaDados:total, jurosDados:valorJuros}
        );

    
        setNome('');
        setValor('');
        setParcelas('');
    }

    return(
        <div>
            <div>
                <h1 class="tituloFinanciamento">Financiamento</h1> 
            </div>
            <hr/>
            
            <div align = 'center'>
                <form onSubmit={calcularValor}>
                    <br/><br/>
                    <label>Nome:</label>
                    <input type="text" placeholder="Informe seu nome..." value={nome} onChange={(evento) => setNome(evento.target.value)}></input>

                    <br/><br/>
                    <label>Valor:</label>
                    <input type="text" placeholder="Informe o valor solicitado..." value={valor} onChange={(evento) => setValor(evento.target.value)}></input>

                    <br/><br/>
                    <label>Parcelas:</label>
                    <input type="text" placeholder="Parcelas desejadas..." value={parcelas} onChange={(evento) => setParcelas(evento.target.value)}></input>
                    
                    <br/><br/>
                    <div align="center">
                        <button type="submit">Calcular</button>
                    </div>
                </form>
            </div>
            <br></br>
            <hr/>

            <div align = 'center'>
                <h3 class="subtituloFinanciamento">Valores:</h3>
                <p><strong>Valor solicitado:&nbsp;R$</strong> {dadosUsuarios.valorSolicitadoDados}</p>
                <p><strong>Valor da Parcela ≅&nbsp;R$</strong>{dadosUsuarios.valorParcelaDados} /mês</p>
                <p><strong>Juros:&nbsp;R$</strong> {dadosUsuarios.jurosDados}x</p>
            </div>
        </div>
    );
}

export default Financiamento;