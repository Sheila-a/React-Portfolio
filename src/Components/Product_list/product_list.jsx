import "./product_list.css";
import Product from "../Product/product";
import { products } from "../../data/data";
import Myself from "../../assets/image/create5.png";
import Mine from "../../assets/image/create6.png";

const ProductList = () => {
  return (
    <div className="prli">
      <div className="prli-text">
        <h1 className="prli-title">Create & Inspire</h1>
        <div>
          <img src={Myself} alt="" className="myself" />
          <img src={Mine} alt="" className="myself" />
        </div>
        <p className="prli-desc">
          <em>....It's display time....</em>
        </p>
      </div>
      <div className="pr-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            git={item.git}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
