import "./about.css";
import MeAgain from "../../assets/image/port10.png";

const About = () => {
  return (
    <div className="about">
      <div className="abo">
        <div className="abo-left">
          <div className="abo-card bg"></div>
          <div className="abo-card fg">
            <img src={MeAgain} alt="" className="abo-img" />
          </div>
          <div className="social">
            <a href="https://wa.me/+2349076242114">
              <i class="bx bxl-whatsapp"></i>
            </a>
            <a href="https://twitter.com/__am_a_n_da___">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="https://github.com/Sheila-a">
              <i class="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/chioma-ugwuodo-940900217/">
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="https://medium.com/@ugwuodo20">
              <i class="bx bxl-medium"></i>
            </a>
          </div>
        </div>
        <div className="abo-right">
          <h1 className="abo-title">About Me</h1>
          <p className="abo-sub">So here's the thing....</p>
          <p className="abo-desc">
            {/* I was born and raised in Enugu, Nigeria. I'm a Front End Web
            Developer with my area of specialization in React. I develop
            standard Web Applications for high-profile clients. I do watching
            movies for hobbies; yunno, "What is dead may never die" kinda movies
            (If you know, you know). Whatever position I find myself in, I am
            determined to be pleasant and happy. Because I've discovered that
            our disposition, rather than our circumstances, determines the
            majority of our suffering or dissatisfaction. One of my all time
            favourite quote is */}
            I am an experienced React web developer proficient in JavaScript,
            HTML and some CSS frameworks such as Material UI. I was born and
            raised in Enugu, Nigeria, and prioritize maintaining a positive
            disposition in all circumstances. I have a keen eye for design and
            stay up-to-date with the latest web development trends. I enjoy
            collaborating with cross-functional teams to deliver innovative
            solutions for clients. Outside of work, I enjoy watching movies that
            inspire perseverance and resilience; "What is dead may never die"
            kinda movies (If you know, you know). I believe that cultivating a
            positive outlook can mitigate suffering and dissatisfaction, and
            therefore strive to approach every situation with a determinedly
            pleasant attitude. One of my all time favourite quote is
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
      <br />
      <hr className="visible" />
      <hr className="hidden" />
    </div>
  );
};

export default About;
