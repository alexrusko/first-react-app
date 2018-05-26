import React, {Component} from 'react';
import Loader from '../../components/Loader'

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const {id} = this.props.match.params
        fetch(`http://api.tvmaze.com/shows/${id}?embed-episodes`)
            .then(res => res.json())
            .then(jsonData => this.setState({ show: jsonData }))
    }

    render() {
        const {show} = this.state;
        console.log(show);
        return (
            <div>
                {show === null && <Loader />}
                {show !== null
                    &&
                    <div>
                        <h2>{show.name}</h2>
                        <p>Rating: {show.rating.average}</p>
                        <p>Genre: {show.genres}</p>
                        <p>{show.summary}</p>
                        <p>
                            <img src={show.image.medium} alt="Show"/>
                        </p>
                    </div>
                    }
            </div>
        )
    }
}

export default SingleSeries;