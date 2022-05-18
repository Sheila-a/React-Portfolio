import "./intro.css";
// import Mee from "../../image/port6.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="we">
        <div className="we-left">
          <div className="we-left-wrapper">
            <h2 className="we-titleName">Hello, My name is</h2>
            <h1 className="we-name">Chioma Ugwuodo</h1>
            <div className="we-title">
              <div className="we-title-wrapper">
                <div className="we-title-item">Web Developer | React</div>
                <div className="we-title-item">Freelancer</div>
                <div className="we-title-item">Counsellor</div>
                <div className="we-title-item">Farmer</div>
                <div className="we-title-item">Strategist</div>
              </div>
            </div>
            <p className="we-desc">
              I develop Responsive Web Applications, modern websites, web
              services, online stores for customers. I am a farmer by course of
              study, a counsellor by gift and a strategist by intuition.
            </p>
          </div>
        </div>
        <div className="we-right">
          <div className="we-bg"></div>
          {/* <img src={Mee} alt="" className="we-img" /> */}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Intro;
