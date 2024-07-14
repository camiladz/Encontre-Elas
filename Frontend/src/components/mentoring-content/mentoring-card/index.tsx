import "./index.scss";

type MentoringInfo = {
  date: string;
  local: string;
  assunto: string;
  mentora: string;
  pontos: string;
  status: string;
};

type Props = {
  mentoringInfos: MentoringInfo[];
};

export const MentoringCard = ({ mentoringInfos }: Props) => {
  return (
    <div className="mentoringCard">
      <div className="mentoringCard__header">
        <span className="mentoringCard_date">Data</span>
        <span className="mentoringCard_local">Local</span>
        <span className="mentoringCard_subject">Assunto</span>
        <span className="mentoringCard_mentor">Mentora</span>
        <span className="mentoringCard_points">Pontos</span>
        <span className="mentoringCard_status">Status</span>
      </div>
      <div className="mentoringInfoContent">
        {mentoringInfos.map((info, index) => (
          <div className="mentoringInfos" key={index}>
            <span className="mentoringDate">{info.date}</span>
            <span className="mentoringLocal">{info.local}</span>
            <span>{info.assunto}</span>
            <span>{info.mentora}</span>
            <span>{info.pontos}</span>
            <span>{info.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
