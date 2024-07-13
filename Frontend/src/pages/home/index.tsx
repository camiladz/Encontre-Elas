import { CourseCardContent } from "../../components/course-content";
import { MentoringCard } from "../../components/mentoring-content/mentoring-card";
import "./index.scss";

export const Home = () => {
  
  return (
    <div className="main__container">
      <div className="main__content">
        <div className="main__content--header">
          <h1 className="content__title">Trilhas</h1>
          <div className="content__buttons">
            <button className="content__button">Todas</button>
            <button className="content__button">Ativas</button>
            <button className="content__button">Completas</button>
          </div>
        </div>
      <CourseCardContent />
      <MentoringCard />
      </div>
    </div>
  );
};
