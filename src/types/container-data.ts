export interface ContainerData {
  id: string;
  batteryLevel: number;
  volume: number;
  isTippedOver: boolean;
  latitude: number;
  longitude: number;
  createdAt: string;
  updatedAt?: string;
  deviceId: string;
}
