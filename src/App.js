import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";


class App extends Component {

  state = {

    cards,
    score:0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`You LOSE! But you got ${this.state.score} cards in a row.`);
    this.setState({score: 0});
    return true;
  }

    clickCount = id => {
      this.state.cards.find((i) => {
        if (i.id === id ) {
          if (i.count === 0){
            i.count = i.count + 1;
            this.setState({score: this.state.score+1}, function(){
              console.log(this.state.score);
            });
            this.state.cards.sort(() => Math.random() - 0.5)
            return true;
          } else {
            this.gameOver();
          }
        }
      });
    }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}><h2><strong>Learn my resume while having fun!</strong></h2>
        <h4>Click on all the programming languages and databases without repeating one or else you lose!</h4>
        </Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
  
    );
  }
}

export default App;
