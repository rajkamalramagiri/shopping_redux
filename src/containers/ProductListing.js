import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
function ProductListing() {
  const product = useSelector((state) => state);
  console.log(product);
  return (
    <div className="ui grid container">
      <br />
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
