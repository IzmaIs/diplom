import {
  Cell,
  Legend,
  Pie,
  PieChart as OriginalPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {memo} from "react";

const colors = {
  X: "#00C49F",
  Y: "#FFBB28",
  Z: "#FF8042",
};

export const PieChartForXyzAnalysis = memo(({data}) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <OriginalPieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey={"coefficientVariation"}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          paddingAngle={5}
          label={({value}) => `${value} %`}
        >
          {data.map((i, index) => (
            <Cell key={`cell-${index}`} fill={colors[i.XYZgroup]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip
          formatter={(value, name, {payload}) =>
            `${payload.coefficientVariation} % группа ${payload.XYZgroup}`
          }
        />
      </OriginalPieChart>
    </ResponsiveContainer>
  );
});
