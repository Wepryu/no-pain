import React from 'react';
import Navi from "./Navi"
import ProductList from './ProductList';
import CategoryList from './CategoryList';

function App() {
  return (
    <div>
      <Navi/>
      <ProductList/>
      <CategoryList></CategoryList>
    </div>
  );
}

export default App;
