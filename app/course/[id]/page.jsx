import { getcourseData } from "./getcourse";
import CourseDetails from "./CourseDetails";

export default async function Course({ params: { id } }) {
  const course = await getcourseData(id);
  if (!course) return <div>Not Found</div>;

  return <CourseDetails course={course} />;
}
