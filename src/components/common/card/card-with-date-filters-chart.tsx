import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ElementType, ReactNode } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface CardWithDateFiltersChartProps {
  data: Array<{ date: string; value: number }>; 
  className?: string;
  cardTitle?: string;
  icon: ElementType;
  loading?: boolean;
  error?: any;
  children?: ReactNode;
  onTabChange?: (value: string) => void; 
}

const CustomTooltip = ({ active, payload, label }: { active: boolean; payload: any[]; label: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#ffffff', padding: '10px', border: '1px solid #cccccc' }}>
        {/* <p className="text-black">{`Label: ${label}`}</p> */}
        <p className="text-black">{`Volume: ${payload[0].value}`}%</p>
      </div>
    );
  }

  return null;
};

const CardWithDateFiltersChart: React.FC<CardWithDateFiltersChartProps> = ({
  data,
  icon: Icon, 
  className = "",
  onTabChange,
}) => {
  return (
    <Card className={`col-span-4 border-2 ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h2 className="text-2xl font-medium">Histórico de Volume (%)</h2>
        <Icon className="size-10" />
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="Weekly" onValueChange={onTabChange}>
          <TabsList className="flex justify-around p-2 w-80 h-14 mx-auto">
            <TabsTrigger
              value="Weekly"
              className="text-zinc-600 dark:text-zinc-200 text-2xl"
            >
              Semanal
            </TabsTrigger>
            <TabsTrigger
              value="Monthly"
              className="text-zinc-600 dark:text-zinc-200 text-2xl"
            >
              Mensal
            </TabsTrigger>
            <TabsTrigger
              value="Yearly"
              className="text-zinc-600 dark:text-zinc-200 text-2xl"
            >
              Anual
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Weekly">
            <ResponsiveContainer
              className={className}
              width="100%"
              height={200}
            >
              <BarChart data={data}>
                <XAxis
                  dataKey={(entry) => entry.date}
                  stroke="#888888"
                  fontSize={15}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={15}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(averageVolume) => `${averageVolume}%`}
                  domain={[0, 100]} // Define o máximo valor para 100%
                />
                <Tooltip content={<CustomTooltip active={false} payload={[]} label={""} />}/>
                <Bar dataKey="value" fill="#22c55e" name="Volume" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="Monthly">
            <ResponsiveContainer
              className={className}
              width="100%"
              height={200}
            >
              <BarChart data={data}>
                <XAxis
                  dataKey={(entry) => entry.date}
                  stroke="#888888"
                  fontSize={15}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={15}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(averageVolume) => `${averageVolume}%`}
                  domain={[0, 100]} // Define o máximo valor para 100%
                />
                <Tooltip content={<CustomTooltip active={false} payload={[]} label={""} />}/>
                <Bar dataKey="value" fill="#22c55e" name="Volume" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="Yearly">
            <ResponsiveContainer
              className={className}
              width="100%"
              height={200}
            >
              <BarChart data={data}>
                <XAxis
                  dataKey={(entry) => entry.date}
                  stroke="#888888"
                  fontSize={15}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={15}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(averageVolume) => `${averageVolume}%`}
                  domain={[0, 100]} // Define o máximo valor para 100%
                />
                <Tooltip content={<CustomTooltip active={false} payload={[]} label={""} />}/>
                <Bar dataKey="value" fill="#22c55e" name="Volume" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CardWithDateFiltersChart;
