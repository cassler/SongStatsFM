import React, { Component } from 'react';
import {Radar, defaults} from 'react-chartjs-2';
import merge from 'lodash.merge';

class SongGraph extends Component {

	componentDidMount() {
	    console.table(this.refs.chart.chart_instance); // returns a Chart.js instance reference
	};


	render() {
		return (
			<Radar ref='chart' data={chartData} options={chartOptions} width={600} height={650} />
		)
	}

}

merge(defaults, {
    global: {
        defaultFontSize: 14,
        defaultFontFamily: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
});

SongGraph.defaultProps = {
	width: 400,
	height: 400,
}

export default SongGraph;