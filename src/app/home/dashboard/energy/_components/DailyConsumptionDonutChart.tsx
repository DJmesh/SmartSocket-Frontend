import React from "react";
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface DailyConsumptionDonutChartProps {
  title: string;
}

export default function DailyConsumptionDonutChart({ title }: DailyConsumptionDonutChartProps) {
  // Dados mockados: consumo do dia e total do mês
  const dayConsumption = 120; // kWh do dia
  const monthConsumption = 3000; // kWh do mês
  const remaining = monthConsumption - dayConsumption;
  const data = [
    { name: "Consumo do Dia", value: dayConsumption, fill: "#facc15" },
    { name: "Restante do Mês", value: remaining, fill: "#f97316" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardDescription>Comparação entre consumo diário e mensal</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full flex justify-center">
          <ResponsiveContainer width="80%" aspect={1}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              />
              <Tooltip
                formatter={(value: number, name: string) => [`${value} kWh`, name]}
                contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#fff" }}
                cursor={false}
              />
              <Legend verticalAlign="top" align="center" iconSize={12} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
