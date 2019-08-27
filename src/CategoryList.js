import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CategoryLst: [
        { CategoryId: 0, CategoryName: "Kırmızı" },
        { CategoryId: 1, CategoryName: "Beyaz" },
        { CategoryId: 2, CategoryName: "Mavi" }
      ]
    };
  }
  render() {
    return (
      <div>
        <h2>{this.props.infos.title}</h2>
        <h1>{this.props.infos.baskaBirOzellik}</h1>
        <ListGroup>
            {this.state.CategoryLst.map(prmCategory =>(
                <ListGroupItem key={prmCategory.CategoryId}>{prmCategory.CategoryName}</ListGroupItem>
            ))}
          
        </ListGroup>
      </div>
    );
  }
}
