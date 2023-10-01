import Style from './Grafico.module.css'
import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default class Grafico extends React.Component {
	render() {
		const names = [];
		const nums = [];

		const data = this.props.data;
		const tamanho = this.props.tamanho;
		const tamanhoMobile = this.props.tamanhoMobile;

		data.forEach(element => {
			let name = element.firstname + ' ' + element.lastname;
			names.push(name);
			nums.push(element.percentage)
		});

		const options = {
			chart: {
				width: tamanho || 450,
				type: 'pie',
			},
			dataLabels: {
				enabled: false,
			},
			labels: names || [],
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: tamanhoMobile || 380,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		};

		return (
			<div className={Style.chart}>
				<ReactApexChart
					options={options}
					series={nums}
					type="donut"
					width={options.chart.width}
				/>
			</div>
		);
	}
}