import logo from "./images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.sharefoundation.info/sr/o-nama">
        <img src={logo} width="240" alt="logo" />
      </a>
    </div>
  );
};

export default Footer;
