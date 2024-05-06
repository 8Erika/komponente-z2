import React from "react";

export default class ClassComponentSecond extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <p>
        {users.name} - {users.age}
      </p>
    );
  }
}
