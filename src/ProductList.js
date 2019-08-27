import React, { Component } from "react";

export default class ProductList extends Component {
 
  render() {
    return (
      <div>
        <h2>{this.props.infos.title}</h2>
        <h1>{this.props.infos.digerBirOzellik}</h1>
      </div>
    );
  }
}
