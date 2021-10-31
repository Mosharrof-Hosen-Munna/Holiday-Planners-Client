import React from "react";
import { Container } from "react-bootstrap";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Day 1",
    Sell: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Day 2",
    Sell: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Day 3",
    Sell: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Day 4",
    Sell: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Day 5",
    Sell: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Da y6",
    Sell: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Day 7",
    Sell: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function StackedCart() {
  return (
    <Container>
      <AreaChart
        width={900}
        height={600}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Sell" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </Container>
  );
}
