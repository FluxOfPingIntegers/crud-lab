import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  listReviews = () => {
    let reviewList = "NO REVIEWS YET"
    if (this.props.reviews.length > 0) {
      console.log("inside Reviews, this.props.reviews=", this.props.reviews)
      const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
      reviewList = reviews.map((review, index) => {
        return (<Review 
                key={index} 
                review={review} 
                deleteReview={this.props.deleteReview}
               />)
      })
    }   
    return reviewList
  }

  render() {
    return (
      <ul>
        Reviews<br></br>
        {this.listReviews()}
      </ul>
    );
  }
};

export default Reviews;