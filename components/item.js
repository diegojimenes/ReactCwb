import React, { Component } from "react";
export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <style jsx>{`
          h2: {
            font-size: 20px;
            font-weight: bold;
          }
          p: {
            font-size: 15px;
          }
          .container {
            width: 80%;
            margin-left: 10%;
          }
        `}</style>
      </div>
    );
  }
}
