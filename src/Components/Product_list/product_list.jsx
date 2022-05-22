import "./product_list.css";
import Product from "../Product/product";
import { products } from "../../data";
import Myself from "../../image/create4.png";

const ProductList = () => {
  return (
    <div className="prli">
      <div className="prli-text">
        <h1 className="prli-title">Create & Inspire</h1>
        <div>
          <img src={Myself} alt="" className="myself" />
        </div>
        <p className="prli-desc">
          <em>....It's display time....</em>
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
