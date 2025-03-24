"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Zap, ArrowRight } from "lucide-react"

// Lista mockada de dispositivos
const initialDevices = [
  {
    id: 1,
    name: "Ar Condicionado",
    isOn: true,
    lastHourConsumption: 1.25, // kWh
  },
  {
    id: 2,
    name: "Geladeira",
    isOn: false,
    lastHourConsumption: 0.8,
  },
  {
    id: 3,
    name: "Lâmpada Sala",
    isOn: true,
    lastHourConsumption: 0.05,
  },
  {
    id: 4,
    name: "Televisão",
    isOn: true,
    lastHourConsumption: 0.15,
  },
]

export default function DashboardPage() {
  const [devices, setDevices] = useState(initialDevices)

  const handleToggleDevice = (id: number, newState: boolean) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, isOn: newState } : device
      )
    )
  }

  return (
    <div className="p-4 md:p-8 flex flex-col gap-4">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard de Dispositivos
        </h1>
        <Zap className="h-6 w-6 text-primary" />
      </div>

      {/* Card com lista de dispositivos */}
      <Card>
        <CardHeader>
          <CardTitle>Meus Dispositivos</CardTitle>
          <CardDescription>
            Gerencie o status e o consumo dos dispositivos cadastrados
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left font-medium">Nome</th>
                <th className="py-2 text-left font-medium">Status</th>
                <th className="py-2 text-left font-medium">
                  Consumo (Última Hora)
                </th>
                <th className="py-2 text-right font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.id} className="border-b last:border-none">
                  <td className="py-2">{device.name}</td>
                  <td className="py-2">
                    <Switch
                      checked={device.isOn}
                      onCheckedChange={(checked) =>
                        handleToggleDevice(device.id, checked)
                      }
                    />
                  </td>
                  <td className="py-2">
                    {device.lastHourConsumption.toFixed(2)} kWh
                  </td>
                  <td className="py-2 text-right">
                    <Link
                      href="/home/dashboard/energy"
                      className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline"
                    >
                      <span>Ver Detalhes</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
