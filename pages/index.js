import React, { Component } from "react";
import "isomorphic-fetch";
import Link from "next/link";
import Post from "../components/item";
export default class Home extends Component {
  static async getInitialProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    return { json };
  }
  showPost() {
    return this.props.json.map(e => {
      return <Post title={e.title} body={e.body} />;
    });
  }
  render() {
    return (
      <div>
        <header>
          <h1>ReactCwb</h1>
          <Link prefetch href="/about">
            <a>About</a>
          </Link>
        </header>

        <div>{this.showPost()}</div>
        <style jsx>{`
          header {
            width: 80%;
            margin-left: 10%;
          }
        `}</style>
      </div>
    );
  }
}
