import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getRandomColor } from "../../helpers";

export const OneLineChart = ({ name, data, measurementValue = "Руб." }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" label={{ value: "Месяцы", position: "insideBottom", offset: -5 }} />
        <YAxis dataKey="sum" label={{ value: "Сумма", angle: -90, position: "insideLeft" }} />
        <Tooltip formatter={(value) => `${value} ${measurementValue}`} />
        <Legend verticalAlign="top" height={30} />
        <Area type="monotone" dataKey="sum" name={name} label="125251" stroke={getRandomColor()}
              fill={getRandomColor()} />
      </AreaChart>
    </ResponsiveContainer>
  );
};