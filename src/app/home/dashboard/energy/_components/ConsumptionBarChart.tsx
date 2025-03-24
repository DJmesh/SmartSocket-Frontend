import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ConsumptionBarChartProps {
  title: string
}

const hourlyData = [
  { hour: "00:00", consumption: 20 },
  { hour: "01:00", consumption: 15 },
  { hour: "02:00", consumption: 10 },
  { hour: "03:00", consumption: 8 },
  { hour: "04:00", consumption: 12 },
  { hour: "05:00", consumption: 18 },
  { hour: "06:00", consumption: 25 },
  { hour: "07:00", consumption: 30 },
  { hour: "08:00", consumption: 35 },
  { hour: "09:00", consumption: 40 },
  { hour: "10:00", consumption: 42 },
  { hour: "11:00", consumption: 38 },
  { hour: "12:00", consumption: 45 },
  { hour: "13:00", consumption: 50 },
  { hour: "14:00", consumption: 48 },
  { hour: "15:00", consumption: 47 },
  { hour: "16:00", consumption: 43 },
  { hour: "17:00", consumption: 39 },
  { hour: "18:00", consumption: 36 },
  { hour: "19:00", consumption: 32 },
  { hour: "20:00", consumption: 28 },
  { hour: "21:00", consumption: 26 },
  { hour: "22:00", consumption: 22 },
  { hour: "23:00", consumption: 18 },
]

export default function ConsumptionBarChart({ title }: ConsumptionBarChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full flex justify-center">
          <ResponsiveContainer width="95%" aspect={2}>
            <BarChart data={hourlyData}>
              <XAxis dataKey="hour" tick={{ fill: "white" }} />
              <YAxis tick={{ fill: "white" }} />
              <Tooltip
                formatter={(value: number, name: string) => [`${value} kWh`, name]}
                contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#fff" }}
                cursor={false}
              />
              <Bar dataKey="consumption" fill="#facc15" name="Consumo">
                <LabelList dataKey="consumption" position="top" style={{ fill: "#facc15" }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
