import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child Constructor called");
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount called");
  }
  componentDidUpdate() {
    console.log(this.props.name + "Child Component Did Update called");
  }
  componentWillUnmount() {
    console.log(this.props.name + "Child Component Will Unmount called");
  }
  render() {
    console.log(this.props.name + "Child Render called");
    const { count, count2 } = this.state;
    return (
      <div className="user">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <h1>Name: {this.props.name}</h1>
        <h3>Address: {this.props.address}</h3>
        <h4>Location: {this.props.location}</h4>
      </div>
    );
  }
}

export default UserClass;
