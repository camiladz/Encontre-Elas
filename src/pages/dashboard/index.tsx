import { CourseCardContent } from "../../components/course-content";
import { MentoringCard } from "../../components/mentoring-content/mentoring-card";
import { useChangePageContent } from "../../hooks/useChangePageContext";
import { InPersonMentoringPage } from "../mentoring/in-person";
import { OnlineMentoringPage } from "../mentoring/online";
import "./index.scss";

export const Dashboard = () => {
  const { showContent, showInPersonMentoringContent } = useChangePageContent();

  const mentoringInfos = [
    {
      date: "13/07/2024",
      local: "Online",
      assunto: "Preparar para Entrevista",
      mentora: "Joana Mello, Frontend no Senac",
      pontos: "50 Pontos",
      status: "Em andamento",
    },
    {
      date: "16/07/2024",
      local: "Café Rio, Av. Rio Branco, Rio de Janeiro, nº 125",
      assunto: "Preparar para Entrevista",
      mentora: "Joana Mello, Frontend no Senac",
      pontos: "30 Pontos",
      status: "Agendada",
    },
    {
      date: "20/07/2024",
      local: "Online",
      assunto: "Preparar para Entrevista",
      mentora: "Joana Mello, Frontend no Senac",
      pontos: "60 Pontos",
      status: "Cancelada",
    },
    {
      date: "25/07/2024",
      local: "Café Rio, Av. Rio Branco, Rio de Janeiro, nº 125",
      assunto: "Preparar para Entrevista",
      mentora: "Joana Mello, Frontend no Senac",
      pontos: "90 Pontos",
      status: "Concluída",
    },
  ];
  return (
    <div className="main__container">
      <div className="main__content">
        <div className="main__content--header">
          <h1 className="content__title">Painel</h1>
          <div className="content__buttons">
            <button className="content__button">Todas</button>
            <button className="content__button">Ativas</button>
            <button className="content__button">Completas</button>
          </div>
        </div>
        {showContent && (
          <>
            <InPersonMentoringPage />
          </>
        )}
        {showInPersonMentoringContent && (
          <>
            <OnlineMentoringPage />
          </>
        )}
        {!showContent && !showInPersonMentoringContent && (
          <>
            <CourseCardContent />
            <MentoringCard mentoringInfos={mentoringInfos} />
          </>
        )}
      </div>
    </div>
  );
};
