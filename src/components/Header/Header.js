import "./Header.css";
import React from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <h1>{t("title")}</h1>
      <h2>{t("heading")}</h2>
      <p>{t("paragraph_1")}</p>
      <p>{t("paragraph_2")}</p>
      <p>{t("paragraph_3")}</p>
    </div>
  );
};

export default Header;
