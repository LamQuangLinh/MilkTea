import ProductCard from "../../common/ProductCard/ProductCard";
import "./ProductSection.css";
import { products } from "../../../constants/products";

function ProductSection() {
  return (
    <div className="product-section">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          description={product.description}
          content={product.content}
          image={product.image}
          labelButton={product.labelButton}
        />
      ))}
    </div>
  );
}

export default ProductSection;
