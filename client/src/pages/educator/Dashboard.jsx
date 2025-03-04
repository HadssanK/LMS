import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { assets, dummyDashboardData } from "../../assets/assets";
import Loading from "../../Components/student/Loading";

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };
  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5 items-center">
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.patients_icon} alt={"patients_icon"} />
            <div className="">
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.enrolledStudentsData.length}
              </p>
              <p className="text-base text-gray-500">Total Enrollment</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.appointments_icon} alt={"appointment"} />
            <div className="">
              <p className="text-2xl font-medium text-gray-600">
                {dashboardData.totalCourses}
              </p>
              <p className="text-base text-gray-500">Total Courses</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md">
            <img src={assets.earning_icon} alt={"earning"} />
            <div className="">
              <p className="text-2xl font-medium text-gray-600">
                {currency} {dashboardData.totalEarnings}
              </p>
              <p className="text-base text-gray-500">Total Earnings</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl w-full">
      <h2 className="pb-4 text-xl font-semibold text-gray-800 border-b border-gray-300">
        Latest Enrollments
      </h2>
      <div className="overflow-hidden rounded-lg bg-white border border-gray-300 shadow-md">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200 text-gray-700 text-sm font-semibold uppercase">
            <tr>
              <th className="px-4 py-3 text-center hidden sm:table-cell">#</th>
              <th className="px-4 py-3">Student Name</th>
              <th className="px-4 py-3">Course Title</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm divide-y divide-gray-300">
            {dashboardData.enrolledStudentsData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-all duration-200"
              >
                <td className="px-4 py-3 text-center hidden sm:table-cell">
                  {index + 1}
                </td>
                <td className="px-4 py-3 flex items-center space-x-3">
                  <img
                    src={item.student.imageUrl}
                    alt="student"
                    className="w-9 h-9 rounded-full border border-gray-300 shadow-sm"
                  />
                  <span className="truncate font-medium text-gray-800">
                    {item.student.name}
                  </span>
                </td>
                <td className="px-4 py-3 truncate font-medium text-gray-700">
                  {item.courseTitle}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
