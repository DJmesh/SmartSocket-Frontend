import React, { ElementType, ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface CardWithLineChartAndIconProps {
  data: Array<{ date: string; value: number }>;
  className?: string;
  cardTitle?: string;
  icon: ElementType;
  loading?: boolean;
  error?: any;
  children?: ReactNode;
}

interface DotProps extends React.SVGProps<SVGCircleElement> {
  cx: number;
  cy: number;
  value?: number; // Add the 'value' property to the interface definition
}

const CustomDot: React.FC<DotProps> = (props) => {
  const { cx, cy, value } = props;
  if (value) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill="#22c55e"
        stroke="#fff"
        strokeWidth={2}
      />
    );
  }
  return null;
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: any[];
  label: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#ffffff",
          padding: "10px",
          border: "1px solid #cccccc",
        }}
      >
        {/* <p className="text-black">{`Label: ${label}`}</p> */}
        <p className="text-black">{`Bateria: ${payload[0].value}`}%</p>
      </div>
    );
  }

  return null;
};

const CardWithLineChartAndIcon: React.FC<CardWithLineChartAndIconProps> = ({
  data,
  cardTitle,
  icon: Icon,
  className = "",
  loading,
  error,
}) => {
  const lastData = data.length > 0 ? data[data.length - 1] : null;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!lastData) return <div>No data available.</div>;

  return (
    <Card className={`col-span-4 border-2 ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-2xl font-medium">{cardTitle}</CardTitle>
        <div className="flex items-center justify-center gap-1">
          <Icon className="size-10" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="text-4xl font-bold">{`${lastData.value}%`}</p>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <Tooltip
              content={<CustomTooltip active={false} payload={[]} label={""} />}
            />
            <Area
              type="monotone"
              dataKey="value"
              fill="#22c55e"
              name="Bateria"
              stroke="#22c55e"
              fillOpacity={1}
              dot={<CustomDot cx={0} cy={0} />}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CardWithLineChartAndIcon;
