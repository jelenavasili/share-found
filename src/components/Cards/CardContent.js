import React from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

const CardContent = ({ info }) => {
  const { t } = useTranslation();

  const emailWithLineBreak =
    info["Mejl predstavnika"] && info["Mejl predstavnika"].length > 30
      ? info["Mejl predstavnika"].replace("@", "<wbr>@")
      : info["Mejl predstavnika"];
  return (
    <div className="section">
      <div className="service">
        <div className="logos">
          {info.logo &&
            info.logo.map((img, key) => (
              <img
                className={!info.Predstavnik ? "filter-grey" : ""}
                src={img}
                key={key}
                alt="logo"
              />
            ))}
        </div>
        <div>
          <span className="service-links">{info["Onlajn servis"]}</span>
        </div>
        <div>
          <h3>{t("cardContent_h3")}</h3>
          <p>{info["Pravno lice"]}</p>
          <p className="company-hq">{info["Sedište pravnog lica"]}</p>
        </div>
      </div>

      <div className={info.Predstavnik ? "rep" : "no-rep"}>
        <h3>{t("cardContent_h3_below")}</h3>
        {info.Predstavnik ? (
          <>
            <a href="#">{info.Predstavnik}</a>
            <p className="rep-hq">{info["Adresa predstavnika"]}</p>
            <a
              href=""
              className="rep-email"
              dangerouslySetInnerHTML={{ __html: emailWithLineBreak }}
            ></a>
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
