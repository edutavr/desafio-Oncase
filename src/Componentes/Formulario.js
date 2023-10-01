import Styles from './Formulario.module.css'
import { useState } from "react";
import axios from "axios";

function Formulario ({returnNewData}){
	const [nome, setName] = useState("");
	const [sobrenome, setSobrenome] = useState("");
	const [participacao, setParticipacao] = useState("");

	async function createCalc(e) {
		e.preventDefault();
		const postData = { firstname: nome, lastname: sobrenome, percentage: parseInt(participacao) };

		try {
			await axios.post('http://127.0.0.1:5000/formularios', postData, {
				headers: {
					'Content-Type': 'application/json'
				}
			});

			axios.get('http://127.0.0.1:5000/formularios')
				.then(result => {
					returnNewData(result.data);
				})
				.catch(e => console.log(e));
		} catch (error) {
			console.error(error);
		}
	}

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

			<div className={Styles.botao_container}>
				<button className={Styles.botao}><p>SEND</p></button>
			</div>
		</form>
	)
}

export default Formulario; 
