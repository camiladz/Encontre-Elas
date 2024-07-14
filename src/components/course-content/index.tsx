import { CourseCard } from "../../components/course-content/course-card/index";
import Course01 from "../../assets/card1.svg";
import Course02 from "../../assets/card2.svg";
import Course03 from "../../assets/card3.svg";
import Course04 from "../../assets/card4.svg";

export const CourseCardContent = () => {
    const courses = [
        {
          title: "Programação",
          flag: "Iniciante",
          progress: 20,
          image: Course01,
          description: "Explore plataformas como Python, Node.JS, PHP, Java, e . NET a fundo, além de muito conteúdo em outras linguagens como GoLang, ..."
        },
        {
          title: "Design",
          flag: "Intermediário",
          progress: 50,
          image: Course02,
          description: "Aprenda e pratique os principais conceitos e ferramentas de design visual para criar produtos de alta qualidade."
        },
        {
          title: "Negócios",
          flag: "Avançado",
          progress: 75,
          image: Course03,
          description: "Neste curso você conhecerá os princípios, fundamentos e práticas de empreendedorismo que auxiliam na preparação ..."
        },
        {
          title: "Desenvolvimento Web",
          flag: "Avançado",
          progress: 30,
          image: Course04,
          description: "O curso de Desenvolvimento Web é ideal para pessoas com habilidades analíticas, interesse em programação e tecnologias web ..."
        },
      ];

    return (
        <div className="course__content">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              flag={course.flag}
              progress={course.progress}
              image={course.image}
              description={course.description}
            />
          ))}
        </div>
    )
}