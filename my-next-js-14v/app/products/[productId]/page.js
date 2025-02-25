import { notFound } from "next/navigation";

const ProductDetailsPage = ({params}) => {
    const {productId} = params;
    if (!false) {
        notFound();
    }
    return <h1>Product Details Page - {productId}</h1>
};
export default ProductDetailsPage