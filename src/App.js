import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    var friends2 = this.shuffle(friends)

    this.state = {
      friends : friends2,
      currentScore : 0,
      topScore : 0,
      alreadyClicked : []
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }

  render() {
    return (
      <Wrapper>

        <Nav
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong} />

        <Title>Clicky Game</Title>
        <Title>Click on an image to earn points, but don't click on any more than once!</Title>

        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            doReset={this.state.doReset}
            onClickCallback={this.handleClick}
            onFinishCallback={this.handleFinish}
          />  
        ))}
      </Wrapper>  
    );
  }

  handleClick(sender) {
    var friends2 = this.shuffle(this.state.friends);
    // add this FriendCard to our list of components
    // that later need to be resetted
    this.state.alreadyClicked.push(sender)
    this.setState((prevState, props) => ({
      currentScore: prevState.currentScore + 1,
      friends: friends2,
    }));
  }

  handleFinish() {
    // determine whether this is a highscore and update
    // the navigation component
    if(this.state.currentScore > this.state.topScore) {
      this.setState((prevState, props) => ({
        topScore: prevState.currentScore,
        currentScore: 0
      }));
      alert("New highscore!! 🦄"); 
    } else {
      alert("You lose"); 
    }
    
    // reset all FriendCards that were clicked
    for (let i = 0 ; i < this.state.alreadyClicked.length ; i++) {
      this.state.alreadyClicked[i].setState({
        alreadyClicked: false
      });
    }  

    // shuffle the cards to kick off the next game
    var friends2 = this.shuffle(this.state.friends);
    this.setState({
      alreadyClicked :[],
      friends : friends2
    });


  }

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

}


export default App;
