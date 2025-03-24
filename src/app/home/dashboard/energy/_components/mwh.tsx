import * as React from "react";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieChart, Pie, ResponsiveContainer, Legend, Label } from "recharts";

const data = [
  {
    name: "Consumo",
    value: 87.11,
    fill: "#facc15",
  },
  {
    name: "Geração",
    value: 12.89,
    fill: "#0cb785",
  },
];

interface Mwh {
  title: string;
  insideLabel?: string;
}

export default function Mwh(props: Mwh) {
  const consumption = 87.11; // kWh
  const generation = 12.89; // kWh

  const consumptionPercent = (consumption / (consumption + generation)) * 100;
  const generationPercent = (generation / (consumption + generation)) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{props.title}</CardTitle>
        <CardDescription>Consumo / Geração de Energia</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Gráfico de pizza */}
        <ResponsiveContainer width={300} height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              label
            >
              {props.insideLabel && (
                <Label
                  value={props.insideLabel}
                  position="center"
                  className="text-3xl font-medium fill-white"
                />
              )}
            </Pie>
            <Legend
              verticalAlign="top"
              align="center"
              iconSize={12}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-8">
          {/* Consumo */}
          <div>
            <div className="flex flex-col">
              <span className="text-yellow-500 font-medium text-xl mb-1">
                Consumo
              </span>
              <span className="font-medium text-3xl">
                87.11 <small>MWh</small>
              </span>
            </div>
            <div className="flex items-center">
              <Progress
                value={consumptionPercent}
                className="w-4/6 h-1.5"
                indicatorColor="bg-yellow-500"
              />
              <span className="w-2/6 text-yellow-500 text-xl ml-2">
                {consumptionPercent.toFixed(2)}%
              </span>
            </div>
          </div>

          {/* Geração */}
          <div>
            <div className="flex flex-col">
              <span className="text-green-500 font-medium text-xl mb-1">
                Geração
              </span>
              <span className="font-medium text-3xl">
                12.89 <small>MWh</small>
              </span>
            </div>
            <div className="flex items-center">
              <Progress
                value={generationPercent}
                className="w-4/6 h-1.5"
                indicatorColor="bg-green-500"
              />
              <span className="w-2/6 text-green-500 text-xl ml-2">
                {generationPercent.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
