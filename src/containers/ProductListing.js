import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

function ProductListing() {
  const product = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("error" + err));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="ui grid container">
      <br />
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
