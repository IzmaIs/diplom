import {
  Cell,
  Legend,
  Pie,
  PieChart as OriginalPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {getRandomColor} from "../../helpers";
import {memo} from "react";

const colors = {
  A: "#00C49F",
  B: "#FFBB28",
  C: "#FF8042",
};

export const PieChartForAbcAnalysis = memo(({data, dataKey}) => {
  const isAccShare = dataKey === "accShare";
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
          label={({value}) => {
            if (isAccShare || dataKey === "share") {
              return `${value} %`;
            }
            return `${value} Руб.`;
          }}
        >
          {data.map((i, index) => (
            <Cell key={`cell-${index}`} fill={isAccShare ? colors[i.ABCgroup] : getRandomColor()} />
          ))}
        </Pie>
        <Legend />
        <Tooltip
          formatter={(value, name, {payload}) => {
            if (isAccShare) {
              return `${payload.accShare} % группа ${payload.ABCgroup}`;
            }
            return dataKey === "share" ? `${payload.share} %` : `${value} Руб.`;
          }}
        />
      </OriginalPieChart>
    </ResponsiveContainer>
  );
});
