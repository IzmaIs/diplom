import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const OneLineChart = ({ currentYear, data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" label={{ value: "Месяцы", position: "insideBottom", offset: 0 }} />
        <YAxis dataKey="sum" label={{ value: "Сумма", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Area type="monotone" dataKey="sum" name={`Выручка за ${currentYear}`} label="125251" stroke="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};