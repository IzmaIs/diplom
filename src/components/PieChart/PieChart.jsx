import { Cell, Legend, Pie, PieChart as OriginalPieChart, ResponsiveContainer, Tooltip } from "recharts";
import { getRandomColor } from "../../helpers";

const colors = {
  A: "#00C49F",
  B: "#FFBB28",
  C: "#FF8042",
};

export const PieChart = ({ data, dataKey }) => {
  const isNewPercent = dataKey === "newPercent";
  return (
    <ResponsiveContainer width="100%" height={400}>
      <OriginalPieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey={dataKey}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          paddingAngle={5}
          label={({ value }) => {
            if (isNewPercent || dataKey === "percent") {
              return `${value} %`;
            }
            return `${value} Руб.`;
          }}
        >
          {data.map((i, index) => (
            <Cell
              key={`cell-${index}`}
              fill={isNewPercent ? colors[i.group] : getRandomColor()}

            />
          ))}
        </Pie>
        <Legend />
        <Tooltip formatter={(value, name, { payload }) => {
          if (isNewPercent) {
            return `${payload.newPercent} % группа ${payload.group}`;
          }
          return dataKey === "percent" ? `${payload.percent} %` : `${value} Руб.`;
        }} />
      </OriginalPieChart>
    </ResponsiveContainer>
  );
};