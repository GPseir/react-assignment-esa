import React from 'react';
import {connect} from 'react-redux';
import Plot from 'react-plotly.js';

const ChartWell = props => {
	const {plots} = props;
	const newPlots = plots.map(plot =>
		Object.assign(plot, {name: `well${plot.wellId}`, type: 'scatter'})
	);

	const figure = {
		data: [...newPlots],
		layout: {
			width: 1100,
			height: 830,
			title: 'Wells Plot',
		},
	};

	return <Plot data={figure.data} layout={figure.layout} />;
};

const mapStateToProps = state => {
	return {
		plots: state.Plots.plots,
	};
};

export default connect(mapStateToProps)(ChartWell);
