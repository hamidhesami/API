import React, { Component } from "react";

class Aval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "", family: "", DB: "" }
    };
  }

  state = {
    Entry: ""
  };

  ChangeInput = event => {
    this.setState({
      Entry: event.target.value
    });
  };

  fetchUsers = (n=1) => {
    fetch(`http://edalatkhane.org/api.php?id=${n}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          user: data
        })
      );
  };
  Create = event => {
    if ((event.keyCode == 13) & (this.state.Entry != "")) {
      this.fetchUsers(this.state.Entry)
      this.setState({
        Entry: ""
      });
    } else {
      return;
    }
  };
  // componentDidMount() {
  //   this.fetchUsers();
  // }

  render() {
    return (
      <div>
        <input
          value={this.state.Entry}
          onChange={this.ChangeInput}
          onKeyDown={this.Create}
          type="text"
          className="new-todo"
          placeholder="id?"
        />
        {/* <button onClick={}>ثبت</button> */}
        <h1>{this.state.user.name}</h1>
        <h1>{this.state.user.family}</h1>
        <h1>{this.state.user.BD}</h1>
      </div>
    );
  }
}

export default Aval;
