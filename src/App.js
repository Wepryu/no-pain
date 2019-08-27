import React from "react";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title="Categorrrryy List"/>
          </Col>
          <Col xs="9">
            <ProductList title="Productttt List" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
