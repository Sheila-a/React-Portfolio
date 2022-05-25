import "./footer.css";

const currentDate = new Date();
// const year = currentDate.getFullYear();

const Footer = () => {
  return (
    <div className="tog">
      <div class="bottom-container">
        <div className="bc">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/chioma-ugwuodo-940900217/"
            target="blank"
          >
            LinkedIn
          </a>
          <a
            className="footer-link"
            href="https://twitter.com/__am_a_n_da___"
            target="blank"
          >
            Twitter
          </a>
          <a
            className="footer-link"
            href="https://github.com/Sheila-a"
            target="blank"
          >
            Github
          </a>
        </div>
        <p className="footer-note">© {} Chioma Ugwuodo.</p>
      </div>
    </div>
  );
};

export default Footer;
