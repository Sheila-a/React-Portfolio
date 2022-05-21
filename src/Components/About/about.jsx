import "./about.css";
import MeAgain from "../../image/port7.png";

const About = () => {
  return (
    <div className="about">
      <div className="abo">
        <div className="abo-left">
          <div className="abo-card bg"></div>
          <div className="abo-card fg">
            <img src={MeAgain} alt="" className="abo-img" />
          </div>
        </div>
        <div className="abo-right">
          <h1 className="abo-title">About Me</h1>
          <p className="abo-sub">So here's the thing....</p>
          <p className="abo-desc">
            I was born and raised in Enugu, Nigeria. I'm a Front End Web
            Developer with my area of specialization in React. I develop
            standard Web Applications for high-profile clients. I do watching
            movies for hobbies; yunno, "What is dead may never die" kinda movies
            (If you know, you know). Whatever position I find myself in, I am
            determined to be pleasant and happy. Because I've discovered that
            our disposition, rather than our circumstances, determines the
            majority of our suffering or dissatisfaction. One of my all time
            favourite quote is
            <div className="quote">
              <em>
                "I need to celebrate life because I'm in a good spot, I work
                hard, and I am happy with who I am and happy with what I do for
                a living, and sometimes I just focus and overwhelm myself so
                much with the fights and getting better, that I just need to
                slow it down and enjoy life and enjoy training."
              </em>
            </div>
            <div className="quoter">-Dustin Poirier</div>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
