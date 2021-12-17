import logo from "../../assets/images/logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="container">
      <a href="https://www.sharefoundation.info/sr/o-nama/">
        <img src={logo} width="240" alt="Logo" />
      </a>
    </div>
  );
};

export default Nav;
