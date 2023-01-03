import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

import ProductsListPage from "../components/page/productsListPage";
// import { getCurrentProductId } from "../store/products";

const Products = () => {
    // const params = useParams();
    // const { productId, edit } = params;
    // const currentProductId = useSelector(getCurrentProductId());
    // console.log("params", params);

    // console.log("productId", productId);
    // console.log("edit", edit);

    // console.log("currentProductId", currentProductId);
    return (
        <>
            <ProductsListPage />
        </>
    );
};

export default Products;
