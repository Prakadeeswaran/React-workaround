import React from "react";
import Counter from "./counter";

export default class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = id => {
    console.log(this.state.counters, "======Old one=====");
    let counters = this.state.counters.filter(counter => {
      return counter.id != id;
    });
    console.log(typeof counters);
    console.log(counters, "======New one=====");
    this.setState({ counters });
  };
  handleReset = () => {
    let newState = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: newState });
  };
  handleIncrement = id => {
    let newState = this.state.counters.map(counter => {
      if (id == counter.id) {
        counter.value += 1;
      }
      return counter;
    });
    this.setState({ counter: newState });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleReset} class="btn btn-sm btn-secondary m-2">
          {" "}
          Reset{" "}
        </button>
        {this.state.counters.map(counter => (
          <Counter
            onDelete={this.handleDelete}
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}
