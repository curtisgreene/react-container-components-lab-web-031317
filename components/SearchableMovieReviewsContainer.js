import React from 'react'
import MovieReviews from './MovieReviews'
export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      query: '',
      reviews: []
    }
  }

  handleChange(e){
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.getLatestReviews()
  }

  getLatestReviews() {
    const query = this.state.query
    const url = "https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=" + query + "&api-key=5779354b23fc4d7889eebab18079a3a0"
    fetch(url,
    {mode: 'cors',
    method: 'GET'})
      .then(res => res.json().then(response => this.setState({ reviews: response.results })));
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <h1>Search for Reviews:</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' value={this.state.query} placeholder="Search for a Movie!" onChange={this.handleChange.bind(this)}/>
          <button type='submit'>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
