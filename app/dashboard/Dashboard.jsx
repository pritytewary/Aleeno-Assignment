import Section from "../../components/layout/Section";
import CourseCard from "@/components/courses/card";

const Dashboard = ({ courses }) => {
  return (
    <Section>
      <div className=" w-full ">
        <div className="flex flex-col text-white gap-2 items-center justify-center h-[40dvh]  ">
          <h1 className="text-5xl font-extrabold font-poppins">Enrolled</h1>
          <p className="text-base font-semibold text-gray-400">
            Your enrolled courses
          </p>
          <button className="font-extrabold">_________________</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 bg-gradient-to-br from-gray-900 to-gray-950 ">
          {courses.map((course, index) => (
            <CourseCard course={course} index={index} key={course.id} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Dashboard;
