import LineGraph from "../Charts/LineGraph";
import PieChart from "../Charts/PieChart";

const DashboardFunctions = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-5 p-2 ">
        <PieChart />
        {/* <LineGraph /> */}
      </div>
    </div>
  );
};

export default DashboardFunctions;
