import CoursesData from "./Courses";
import { getcoursesData } from "./getcourses";

const HomePage = async () => {
  const courses = await getcoursesData();

  return <CoursesData courses={courses} />;
};

export default HomePage;
