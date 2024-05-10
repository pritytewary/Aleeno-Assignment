import Dashboard from "./Dashboard";
import { getDashboardData } from "./getdashboard";

const DashboardPage = async () => {
  const { courses } = await getDashboardData();

  return <Dashboard courses={courses} />;
};

export default DashboardPage;
