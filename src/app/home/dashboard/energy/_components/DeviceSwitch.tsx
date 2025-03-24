import React from "react";
import { Switch } from "@/components/ui/switch";

export default function DeviceSwitch() {
  const [enabled, setEnabled] = React.useState(true);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">
        {enabled ? "Dispositivo ligado" : "Dispositivo desligado"}
      </span>
      <Switch checked={enabled} onCheckedChange={setEnabled} />
    </div>
  );
}
