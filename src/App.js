import React from "react";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import { Container, Row, Col } from "reactstrap";

function App() {
  let CategoryInfo = {title : "Category List", baskaBirOzellik : "baska"};
  let ProductInfo = {title: "Product List", digerBirOzellik : "diger"}
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList infos = {CategoryInfo}/>
          </Col>
          <Col xs="9">
            <ProductList  infos = {ProductInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
