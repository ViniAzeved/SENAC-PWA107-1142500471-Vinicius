import {useState} from 'react';
import './cadastro.css'

function Cadastro(){
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [cpf, setcpf] = useState('');

    const [users, setusers] = useState(
        { nomeDados:"Privado", emailDados:"Privado", CPFDados:"Privado"}
    );

    
    function novoRegistro(dados){
        dados.preventDefault(); 

        setusers(
            { nomeDados:name, emailDados:email, CPFDados:cpf}
        )

        setname('');
        setemail('');
        setcpf('');
    }

    return(
        <div>
            <div>
                <h1 class="tituloCadastro">Cadastro</h1>
                <hr/>
            </div>
            <br></br>
            <div align = 'center'>
                <form onSubmit={novoRegistro}>
                    <label>Nome:</label>
                    <input type="text" placeholder="Digite o seu nome..." value={name} onChange={(evento) => setname(evento.target.value)} required></input>

                    <br/><br/>
                    <label>Email:</label>
                    <input type="email" placeholder="Digite o seu email..." value={email} onChange={(evento) => setemail(evento.target.value)}></input>

                    <br/><br/>
                    <label>CPF:</label>
                    <input type="text" placeholder="Digite o seu CPF" value={cpf} onChange={(evento) => setcpf(evento.target.value)}required></input>

                    <br/><br/>
                    <div align="center">
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>            
            <br></br>
            <hr/>
            <br></br>
            <div align = 'center'>
                <h3><strong>Dados Informados:</strong></h3>
                <p><strong>Nome:&nbsp;</strong>{users.nomeDados} </p>
                <p><strong>Email:&nbsp;</strong>{users.emailDados}</p>
                <p><strong>CPF:&nbsp;</strong>{users.CPFDados}</p>
            </div>
        </div>
    );
}

export default Cadastro