import "./product_list.css";
import Product from "../Product/product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="prli">
      <div className="prli-text">
        <h1 className="prli-title">Create & Inspire</h1>
        <p className="prli-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          porro illo adipisci fugit quod! Fuga exercitationem assumenda,
          maiores.
        </p>
      </div>
      <div className="pr-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
