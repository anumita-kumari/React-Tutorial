import { useEffect, useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count1] = useState(1);

  useEffect =
    (() => {
      const timer = setInterval(() => {
        console.log("namste");
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    },
    []);
  return (
    <div className="user">
      <h1>Count : {count}</h1>
      <h1>Count1 : {count1}</h1>
      <h1>Name: {props.name}</h1>
      <h3>Address: {props.address}</h3>
      <h4>Location: {props.location}</h4>
    </div>
  );
};

export default User;
