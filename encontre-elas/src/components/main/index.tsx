import { CourseCard } from "../course-card";
import { Header } from "../header/index";
import Course01 from "../../assets/card1.svg";

import "./index.scss";

export const MainContent = () => {
  const courses = [
    {
      title: "Programação",
      flag: "Iniciante",
      progress: 20,
      image: Course01,
    },
    {
      title: "Design",
      flag: "Intermediário",
      progress: 50,
    },
    {
      title: "Negócios",
      flag: "Avançado",
      progress: 75,
    },
    {
      title: "Desenvolvimento Web",
      flag: "Avançado",
      progress: 30,
    },
  ];
  return (
    <div>
      <Header />
      <div className="main__content">
        <div className="main__content--header">
          <h1 className="content__title">Trilhas</h1>
          <div className="content__buttons">
            <button className="content__button">Todas</button>
            <button className="content__button">Ativas</button>
            <button className="content__button">Completas</button>
          </div>
        </div>
        <div className="course__content">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              flag={course.flag}
              progress={course.progress}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
