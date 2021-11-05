import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ""
    })
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form id="restaurant-form" onSubmit={this.handleOnSubmit}>
          <label>Enter Restaurant Name:</label><br></br>
          <input id="restaurantText" onChange={this.handleOnChange} value={this.state.text} /><br></br>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
