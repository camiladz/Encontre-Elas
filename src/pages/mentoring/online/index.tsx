import { MentoringBanner } from "../../../components/mentoring-content/mentoring-banner"
import { MentoringCard } from "../../../components/mentoring-content/mentoring-card";
import OnlineBanner from '../../../assets/mentoring-banner.svg'

export const OnlineMentoringPage = () => {

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
          local: "online",
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
          status: "Agendada",
        },
        {
          date: "25/07/2024",
          local: "online",
          assunto: "Preparar para Entrevista",
          mentora: "Joana Mello, Frontend no Senac",
          pontos: "90 Pontos",
          status: "Concluída",
        },
        {
            date: "28/07/2024",
            local: "online",
            assunto: "Preparar para Entrevista",
            mentora: "Joana Mello, Frontend no Senac",
            pontos: "96 Pontos",
            status: "Concluída",
          },
      ];

    return (
        <>
        <MentoringBanner BannerImage={OnlineBanner}/>
        <MentoringCard mentoringInfos={mentoringInfos} />
        </>
    )
}