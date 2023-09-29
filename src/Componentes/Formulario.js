import Styles from './Formulario.module.css'
import { useEffect, useState } from "react";
import axios from "axios";

function Header (){
    const [nome, setName] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [participacao, setParticipacao] = useState("");
    const [data, setData] = useState([]);

async function createCalc(e){
    //não atualiza a pagina
    e.preventDefault();
    //pega os dados 
    const data = {nome, sobrenome, participacao };
    console.log(data);
    await axios.post('', data)
}

useEffect(() => {
    axios.get('').then(result => {
        setData(result.data);
    })
})
    return(
            <form className={Styles.baseFundo} onSubmit={createCalc}>

                <div className={Styles.input_container}>
                    <input className={Styles.input} type="text" id="campo1" name="campo1" placeholder="First Name" onChange={(e) => setName(e.target.value)}/>
                </div>  

                <div className={Styles.input_container}>
                    <input className={Styles.input} type="text" id="campo2" name="campo2" placeholder="Last Name" onChange={(e) => setSobrenome(e.target.value)}/>
                </div>
                
                <div className={Styles.input_container}>
                    <input className={Styles.input} type="text" id="campo3" name="campo3" placeholder="Participation" onChange={(e) => setParticipacao(e.target.value)}/>
                </div>

                <button className={Styles.botao}><p>SEND</p></button>
            </form>
    )
}

export default Header; 