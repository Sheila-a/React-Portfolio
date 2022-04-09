import "./about.css";

const About = () => {
  return (
    <div className="abo">
      <div className="abo-left">
        <div className="abo-card bg"></div>
        <div className="abo-card">
          <img
            src="https://img.freepik.com/free-psd/bi-fold-a5-flyer-mockup-open-perspective-view_144389-235.jpg?w=740&t=st=1649427845~exp=1649428445~hmac=820615406fd5d5b7ce329ca47606b1024eeae6d3f302d6355238abc013c825eb"
            alt=""
            className="abo-img"
          />
        </div>
      </div>
      <div className="abo-right">
        <h1 className="abo-title">About Me</h1>
        <p className="abo-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cumque
          fuga veritatis non!
        </p>
        <p className="abo-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          veniam dolorem beatae vel necessitatibus reiciendis consequuntur
          dolorum eaque quidem omnis corporis, nesciunt eius eligendi laborum
          similique possimus qui! Obcaecati a dicta dolores, laboriosam vel
          consequuntur maxime. Quis beatae
        </p>
        <div className="abo-award">
          <img src="" alt="" className="abo-award-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
