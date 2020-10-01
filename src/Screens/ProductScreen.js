import React from 'react';
import data from '../data'

function ProductScreen ({ match }) {
  const product = data.products.find(item => item._id === match.params.id);
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  )
}

export default ProductScreen;