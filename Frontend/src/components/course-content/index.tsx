import { CourseCard } from "../../components/course-content/course-card/index";
import Course01 from "../../assets/card1.svg";

export const CourseCardContent = () => {
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
    )
}