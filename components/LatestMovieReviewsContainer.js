import React from 'react'
import MovieReviews from './MovieReviews'


class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=5779354b23fc4d7889eebab18079a3a0',
    {mode: 'cors',
    method: 'GET'})
      .then(res => res.json().then(response => this.setState({ reviews: response.results })));
  }


  render() {
    return  (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews:</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
// <MovieReviews reviews={this.state.reviews} />
export default LatestMovieReviewsContainer;
