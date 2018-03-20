import React, { Component } from "react";
import "./FriendCard.css";


class FriendCard extends Component {
	constructor(props) {
    super(props);
    this.state = {
      alreadyClicked : false,
      onFinish : props.onFinish,
      onClick : props.onClick
    }
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
  	return (
  		 <div className="card">
		    <div className="img-container">
		      <img alt={this.props.name} 
		      	   src={this.props.image} 
		       onClick={this.handleClick} />
		    </div>
 		 </div>
  		)
  }

  handleClick() {
  	if (this.state.alreadyClicked == false) {
  		this.setState({
  			alreadyClicked : true
  		});
  		this.state.onClick();
  	} else {
  		this.state.onFinish();
  	}
  }

}


export default FriendCard;
