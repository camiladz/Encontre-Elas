import './index.scss'

export const CompanyContent = () => {

    const studentInfo = [
        {
            name: "László Barbara",
            trilha: "Programação",
            horas: 20,
            nota: 9.8,
            frequencia: 3
        },
        {
            name: "Pintér Beatrix",
            trilha: "Programação",
            horas: 30,
            nota: 9,
            frequencia: 3
        },
        {
            name: "Gabrielle Chanel",
            trilha: "Programação",
            horas: 25,
            nota: 8,
            frequencia: 3
        },
        {
            name: "Mia Souza",
            trilha: "Programação",
            horas: 12,
            nota: 9.5,
            frequencia: 3
        },
        {
            name: "Luciana Santos",
            trilha: "Programação",
            horas: 29,
            nota: 9.4,
            frequencia: 3
        },
        {
            name: "Daniele Nogueira",
            trilha: "Programação",
            horas: 16,
            nota: 9.9,
            frequencia: 3
        },
        {
            name: "Fernanda Blaz",
            trilha: "Programação",
            horas: 17,
            nota: 8.7,
            frequencia: 3
        },
        {
            name: "Michelle Torres",
            trilha: "Programação",
            horas: 22,
            nota: 9.7,
            frequencia: 3
        },
        {
            name: "Livia Toledo",
            trilha: "Programação",
            horas: 25,
            nota: 9.1,
            frequencia: 3
        },
        {
            name: "Valentina Marques",
            trilha: "Programação",
            horas: 31,
            nota: 8.3,
            frequencia: 3
        },
        {
            name: "Ana Santos",
            trilha: "Programação",
            horas: 33,
            nota: 9,
            frequencia: 3
        }
    ]
  return (
    <div className='companyContent__student'>
      <div className="company__content--header">
        <span className='studentInfo__student'>Alunos</span>
        <span className='studentInfo__trail'>Trilha Atual</span>
        <span className='studentInfo__hours'>Horas Estudadas</span>
        <span className='studentInfo__result'>Resultados da avaliação</span>
        <span className='studentInfo__frequencyPerWeek'>Frequência</span>
      </div>
      <div className='studentInfo__content'>
        {studentInfo.map((info) => (
            <div className="studentInfo">
                <span className='studentInfo__name'>{info.name}</span>
                <span className='studentInfo__courseName'>{info.trilha}</span>
                <span className='studentInfo__hoursStudied'>{info.horas}h</span>
                <span className='studentInfo__grade'>{info.nota}</span>
                <span className='studentInfo__frequency'>{info.frequencia} por semana</span>
            </div>
        ))}
      </div>
    </div>
  );
};
