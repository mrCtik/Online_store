import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../ui/productCard";
import Comments from "../../ui/comments";
import { getProductById } from "../../../store/products";
import { useSelector } from "react-redux";

const ProductPage = ({ productId }) => {
    const product = useSelector(getProductById(productId));

    if (product) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <ProductCard product={product} />
                    </div>
                    <div className="col-md-8">
                        <Comments />
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading Product Page</h1>;
    }
};

ProductPage.propTypes = {
    productId: PropTypes.string.isRequired
};

export default ProductPage;
