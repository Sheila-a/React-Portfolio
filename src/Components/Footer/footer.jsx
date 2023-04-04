import "./footer.css";

const currentDate = new Date();
const year = currentDate.getFullYear();
const Footer = () => {
  return (
    <div className="tog">
      <div class="bottom-container">
        <p className="footer-note">© {year} Chioma Ugwuodo.</p>
      </div>
    </div>
  );
};

export default Footer;
