import React from 'react'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'

const renderMovie = ({
  display_title,
  headline,
  summary_short,
  link }) => {
  return (
    <div className="review">
      <h3>{display_title}</h3>
      <a href={link.url}>{headline}</a>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map( review => renderMovie(review) )}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: [{display_title: "This Is Fine"}]
}

export default MovieReviews
