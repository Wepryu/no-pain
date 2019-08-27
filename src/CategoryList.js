import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
 
  render() {
    return (
      <div>
        <h2>{this.props.infos.title}</h2>
        <h1>{this.props.infos.baskaBirOzellik}</h1>
        <ListGroup>
          <ListGroupItem>Kırmızı</ListGroupItem>
          <ListGroupItem>Beyaz</ListGroupItem>
          <ListGroupItem>Siyah</ListGroupItem>
          <ListGroupItem>Kahverengi</ListGroupItem>
          <ListGroupItem>Mavi</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
