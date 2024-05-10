import courses from "../../../courses/course";

export const getcourseData = async (id) => {
  const course = courses.find((c) => c.id === Number(id));

  return course || null;
};
