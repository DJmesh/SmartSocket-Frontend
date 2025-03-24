"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DeviceSwitch from "./_components/DeviceSwitch";

// Importando os componentes de gráfico de forma dinâmica (SSR desabilitado)
const ConsumptionBarChart = dynamic(
  () => import("./_components/ConsumptionBarChart"),
  { ssr: false }
);
const DailyConsumptionDonutChart = dynamic(
  () => import("./_components/DailyConsumptionDonutChart"),
  { ssr: false }
);
const HourlyVsDailyDonutChart = dynamic(
  () => import("./_components/HourlyVsDailyDonutChart"),
  { ssr: false }
);

export default function DashboardConsumo() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Dashboard de Consumo
        </h2>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Device: [00001-TESTE]</span>
            <DeviceSwitch />
          </div>
        </div>
      </div>

      {/* Cards de Consumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Consumo Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,500 kWh</div>
            <p className="text-xs text-muted-foreground">
              Atualizado em tempo real
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Consumo do Dia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120 kWh</div>
            <p className="text-xs text-muted-foreground">
              Atualizado em tempo real
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Consumo do Mês
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,000 kWh</div>
            <p className="text-xs text-muted-foreground">
              Atualizado em tempo real
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HourlyVsDailyDonutChart title="Comparação: Hora vs Dia" />
        <DailyConsumptionDonutChart title="Comparação: Dia vs Mês" />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <ConsumptionBarChart title="Consumo por Hora" />
      </div>
    </main>
  );
}
