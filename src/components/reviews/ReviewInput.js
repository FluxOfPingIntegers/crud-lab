import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    restaurantId: this.props.restaurantId,
    text: "",
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addReview( {restaurantId: this.state.restaurantId, text: this.state.text} )
    this.setState({
      text: "",
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form id="reviewForm" onSubmit={this.handleOnSubmit}>
          <label>Enter Review For Restaurant:</label><br></br>
          <input id="reviewText" onChange={this.handleOnChange} value={this.state.text} /><br></br>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
