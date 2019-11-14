import React from 'react';
import {connect} from 'react-redux';
import Plot from 'react-plotly.js';

const ChartHist = props => {
	const {plots, barMode, orientation} = props;

	const newPlots = plots.map(plot =>
		Object.assign(plot, {
			name: `well${plot.wellId}`,
			type: 'histogram',
			orientation: orientation,
		})
	);

	const figure = {
		data: [...newPlots],
		layout: {
			width: 1100,
			height: 919,
			title: 'Wells Plot',
			barmode: barMode,
		},
	};

	return <Plot data={figure.data} layout={figure.layout} />;
};

const mapStateToProps = state => {
	return {
		plots: state.Plots.plots,
		barMode: state.SelectedBarMode.selectedBarMode,
		orientation: state.SelectedOrientation.selectedOrientation,
	};
};

export default connect(mapStateToProps)(ChartHist);
