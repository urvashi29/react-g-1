import React, { Component } from "react";
import Display from "./Display";

class User extends Component {
  state = {
    id: 1,
    firstName: "alina",
    lastName: "joe",
    city: "Banglore",
    contact: {
      email_address: "admin@gmail.com",
    },
  };

  handleUpdate = () => {
    //this is referring to User
    this.setState({
      city: "Pune",
      lastName: "J",
    });
  };

  render() {
    return (
      <>
        <p>
          My name is {this.state.firstName} {this.state.lastName}, living in{" "}
          {this.state.city}
        </p>

        <button onClick={this.handleUpdate}>Update</button>

        <Display contact={this.state.contact} id={this.state.id} />

        {/* <p style={{ fontSize: "20px", color: "red" }} className>Error</p> */}
      </>
    );
  }
}

export default User;

// Display({contact = {}, id=2 });

{
  /* <button onclick="update()"></button> */
}
