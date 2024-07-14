import { useState } from "react";
import "./index.scss";
import TrilhaIcon from "../../../assets/trilha-icon.svg";
import PainelIcon from "../../../assets/painel-icon.svg";
import MentoriaIcon from "../../../assets/mentoria-icon.svg";
import PlanejamentoIcon from "../../../assets/planjemento-icon.svg";
import EstatisticaIcon from "../../../assets/estatisticas-icon.svg";
import { useChangePageContent } from "../../../hooks/useChangePageContext";

export const MenusideBar = () => {
  const { toggleContent, toggleInPersonContent } = useChangePageContent();
  const [showMentoriasOptions, setShowMentoriasOptions] = useState(false);

  const MenuOptions = [
    {
      image: PainelIcon,
      title: "Painel",
    },
    {
      image: TrilhaIcon,
      title: "Trilhas",
    },
    {
      image: MentoriaIcon,
      title: "Mentorias",
    },
    {
      image: PlanejamentoIcon,
      title: "Planejamento",
    },
    {
      image: EstatisticaIcon,
      title: "Estatísticas",
    },
    {
      image: PainelIcon,
      title: "Simulador de Entrevista",
    },
    {
      image: PainelIcon,
      title: "Programa de Benefícios",
    },
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
