import courses from "../../courses/course";

export const getDashboardData = async () => {
  const enrolled = courses.filter((c) =>
    ["Open", "Closed"].includes(c.enrollmentStatus)
  );

  return { courses: enrolled };
};
