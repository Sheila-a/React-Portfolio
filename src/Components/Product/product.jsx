import "./product.css";

const Product = ({ img, link, git }) => {
  return (
    <div className="pdc">
      <div className="pdc-browser">
        <div className="pdc-circle"></div>
        <div className="pdc-circle"></div>
        <div className="pdc-circle"></div>
        <button className="pdc-btn">
          <a href={git}> View github repo</a>
        </button>
      </div>
      <a href={link} rel="noreferrer" target="_blank">
        <img src={img} alt="zrer" className="pdc-img" />
      </a>
    </div>
  );
};

export default Product;
