import { useState } from "react";
import "./index.scss";
import PainelIcon from "../../../assets/painel-icon.svg";
import PackageIcon from '../../../assets/package-icon.svg';
import FinanceIcon from '../../../assets/finance-icon.svg';
import AnalyticsIcon from '../../../assets/analytics-icon.svg';
import { useChangePageContent } from "../../../hooks/useChangePageContext";

export const MenusideBar = () => {
  const { toggleContent, toggleInPersonContent } = useChangePageContent();
  const [showMentoriasOptions, setShowMentoriasOptions] = useState(false);

  const MenuOptions = [
    {
      image: PainelIcon,
      title: "Dashboard",
    },
    {
      image: PackageIcon,
      title: "Pacotes",
    },
    {
      image: FinanceIcon,
      title: "Financeiros",
    },
    {
      image: AnalyticsIcon,
      title: "Relatórios",
    }
  ];
  const handleToggleContent = () => {
    toggleContent();
  };

  const handleInPersonContent = () => {
    toggleInPersonContent();
  };
  const handlePainelClick = () => {
    toggleContent();
  };

  const handleMenuClick = (title: string) => {
    if (title === "Mentorias") {
      setShowMentoriasOptions(!showMentoriasOptions);
    } else {
      setShowMentoriasOptions(false);
      if (title === "Painel") {
        handlePainelClick();
      }
    }
  };


  return (
    <div className="menuSidebar">
      {MenuOptions.map((menu) => (
        <div key={menu.title} className="menu__item">
          <button
            className={`menu__option ${
              menu.title === "Mentorias" && showMentoriasOptions ? "active" : ""
            }}`}
            onClick={() => handleMenuClick(menu.title)}
          >
            <img src={menu.image} alt={`${menu.title} Icon`} />
            {menu.title}
          </button>
          {menu.title === "Mentorias" && showMentoriasOptions && (
            <div className="mentorias-options">
              <button
                className="menu__option mentoria__option"
                onClick={() => handleToggleContent()}
              >
                Presenciais
              </button>
              <button
                className="menu__option mentoria__option"
                onClick={() => handleInPersonContent()}
              >
                Online
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
