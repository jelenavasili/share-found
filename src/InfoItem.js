//import acer from "./logos/acer.png";

const InfoItem = ({ info }) => {
  return (
    <div className="cards section">
      <div className="service">
        <img src={info.logo} alt="logo" />
        <span>{info["Onlajn servis"]}</span>
        <h3>KOMPANIJA</h3>
        <p>{info["Pravno lice"]}</p>
        <p>{info["Sedište pravnog lica"]}</p>
      </div>
      <div className="rep">
        <h3>PREDSTAVNIK</h3>
        <p>{info.Predstavnik}</p>
        <p>{info["Adresa predstavnika"]}</p>
        <a>{info["Mejl predstavnika"]}</a>
      </div>
    </div>
  );
};

export default InfoItem;
