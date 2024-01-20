import {Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {getRandomColor} from "../../helpers";
import {memo} from "react";

export const BarChart = memo(({data, name, caption, measurementValue = "%", line = false}) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ComposedChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barCategoryGap={0}
        barGap={0}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => `${value} ${measurementValue}`} />
        <Legend verticalAlign="top" height={50} formatter={() => caption} />
        <Bar maxBarSize={100} barSize={100} activeBar={false} dataKey="value" name={name} fill={getRandomColor()} />
        {line && <Line type="monotone" dataKey="value" tooltipType={"none"} legendType={"none"} stroke={"#000000"} />}
      </ComposedChart>
    </ResponsiveContainer>
  );
});
