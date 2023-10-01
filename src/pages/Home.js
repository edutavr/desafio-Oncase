import Style from './Home.module.css';
import Formulario from './../Componentes/Formulario';
import Tabela from '../Componentes/Tabela';
import Grafico from '../Componentes/Grafico';

import {useState, useEffect} from 'react';

import axios from 'axios';


export default function Home() {
    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get('http://127.0.0.1:5000/formularios').then(result => {
            
            setData(result.data);
        } ).catch(e => console.log(e));
    }, [])

	const returnNewData = (data) => {
		setData(data);

		console.log(data);
	}

    return(
        <>
        <Formulario returnNewData={returnNewData}/>

        <h1 className={Style.titulo}>DATA</h1>
        <p className={Style.paragrafo}>Lorem ipsum dolor sit amet.</p>

			<div className={Style.dados}>
				<Tabela data={data}/>

				<Grafico data={data}/>
			</div>
        </>
    )
}