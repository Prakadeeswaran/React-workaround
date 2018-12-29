import React from "react";

export default class Counter extends React.Component {
  // constructor() {
  //   super()
  //   this.handleClick = this.handleClick.bind(this);
  // }
  state = {
    value: this.props.value
  };
  // handleClick = () => {
  //   this.setState({
  //     value: this.state.value + 1
  //   });
  // };
  render() {
    return (
      <div>
        <span className={this.handleBadge()}> {this.props.value} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.id)}
          className="btn btn-primary btn-sm"
        >
          Add
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          class="btn btn-sm btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  handleBadge = () => {
    let badge = "badge m-2 badge-";
    badge = badge + (this.props.value == 0 ? "danger" : "warning");
    console.log(badge);
    return badge;
  };
}
