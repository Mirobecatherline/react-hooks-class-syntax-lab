import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import React from "react";
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

console.log(user);

class App extends React.Component {
  render(){
  return (
    <div>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
  }
}

export default App;
