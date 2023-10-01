import Style from './Tabela.module.css'
import { useState } from "react";
import { orderBy } from 'lodash';

export default function Formulario(props) {
    const [sortingColumn, setSortingColumn] = useState('id');
    const [sortingDirection, setSortingDirection] = useState('ASC');

    const columns = {
        id: '',
        nome: "First Name",
        sobrenome: "Last Name",
        participacao: "Participation"
    }

    function updateSorting(column) {
        if(column === sortingColumn) {
            setSortingDirection(prev => prev === 'ASC' ? 'DESC' : 'ASC');
        }
        setSortingColumn(column);
    }

    const sortedData = orderBy(props.data, sortingColumn, [sortingDirection.toLowerCase()]);

    return(
        <>
            <table className={Style.tabela}>
                <thead className={Style.cabecalho}>
                    <tr className={Style.cabecalho}>
                        {Object.keys(columns).map((ck, idx) => (
                            //ck = column key
                            <th onClick={() => updateSorting(ck)} className={idx === 0 ? Style.id : Style.col}>
                                {columns[ck]}
                                {sortingColumn === ck ? (
                                    sortingDirection === 'ASC' ? '↓' : '↑'
                                ) : ''}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={Style.cabecalho}>
                    {sortedData.map(
                        statistic => (
                            <tr key={statistic.id}>
                                <td key={statistic.id}>
                                    {statistic.id}
                                </td>
                                <td key={statistic.firstname}>
									{statistic.firstname}
                                </td>

                                <td key={statistic.lastname}>
									{statistic.lastname}
                                </td>

                                <td key={statistic.percentage}>
									{statistic.percentage}%
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </>
    );
}