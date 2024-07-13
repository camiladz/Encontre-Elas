import './index.scss';

export const MentoringCard = () => {
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
    <div>
      <div className="mentoringCard__header">
        <span>Data</span>
        <span>Local</span>
        <span>Assunto</span>
        <span>Mentora</span>
        <span>Pontos</span>
        <span>Status</span>
      </div>
      <div>
        {mentoringInfos.map((info) => (
            <div className='mentoringInfoContent'>
                <span className='mentoringDate'>{info.date}</span>
                <span className='mentoringLocal'>{info.local}</span>
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
