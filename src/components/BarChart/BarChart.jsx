import {
  Bar,
  BarChart as OriginalBarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {getRandomColor} from "../../helpers";
import {memo} from "react";

export const BarChart = memo(({data, name, caption, measurementValue = "%"}) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <OriginalBarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => `${value} ${measurementValue}`} />
        <Legend verticalAlign="top" height={50} formatter={() => caption} />
        <Bar dataKey="value" name={name} fill={getRandomColor()} />
      </OriginalBarChart>
    </ResponsiveContainer>
  );
});
