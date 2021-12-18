const CardContent = ({ info }) => {
  return (
    <div className="section">
      <div className="service">
        <div className="logos">
          {info.logo &&
            info.logo.map((img) => (
              <img
                className={!info.Predstavnik ? "filter-grey" : ""}
                src={img}
                alt="logo"
              />
            ))}
        </div>
        <div>
          <span className="service-links">{info["Onlajn servis"]}</span>
        </div>
        <div>
          <h3>KOMPANIJA</h3>
          <p>{info["Pravno lice"]}</p>
          <p className="company-hq">{info["Sedište pravnog lica"]}</p>
        </div>
      </div>

      <div className={info.Predstavnik ? "rep" : "no-rep"}>
        <h3>PREDSTAVNIK</h3>
        {info.Predstavnik ? (
          <>
            <a href="#">{info.Predstavnik}</a>
            <p className="rep-hq">{info["Adresa predstavnika"]}</p>
            <a href="" className="rep-email">
              {info["Mejl predstavnika"]}
            </a>
          </>
        ) : (
          <>
            <img src="logos/no-rep.png" alt="no content" />
            <p>Nema predstavnika</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CardContent;
