import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true });
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(res => res.json())
            .then(jsonData => this.setState({ series: jsonData, isFetching: false }))
    }

    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
                <Intro text='Search for your favorite TV Shows!'/>
                <div>
                    <input
                        value={seriesName}
                        type="text"
                        onChange={this.onSeriesInputChange} />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter a TV Show name!</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>Sorry! No TV Series found with this name.</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>
        )
    }
}

export default Series;
