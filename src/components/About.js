import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    this.state = {
      nameInfo: {
        login: "dummy",
        location: "Default",
        avatar_url: "",
      },
    };
    console.log("Parent Constructor called");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anumita-kumari");
    const json = await data?.json();
    console.log(json);
    this.setState({
      nameInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("Namste React OP");
    }, 1000);
    console.log("Parent Component Did Mount called");
  }
  componentDidUpdate() {
    console.log("Parent Component Did Update called");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Parent Component Will Unmount called");
  }
  render() {
    const { login, location, avatar_url } = this.state.nameInfo;
    console.log("Parent Render called");
    console.log(this.state);
    return (
      <div>
        <h1>This is Namste React Web Series</h1>
        <h2> It's amazing</h2>
        <img src={avatar_url}></img>
        <User
          name={"Anumita"}
          address={"Ramkrishna Nagar"}
          location={"Patna"}
        />
        {/* <UserClass name={login} address={"Bangalore"} location={location} /> */}
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>This is Namste React Web Series</h1>
//       <h2> It's amazing</h2>
//       {/* <User name={"Anumita"} address={"Ramkrishna Nagar"} location={"Patna"} /> */}
//       <UserClass name={"Anumita"} address={"Bangalore"} location={"PLH"} />
//     </div>
//   );
// };

export default About;
