import { ContainerData } from "./container-data";

export interface PaginatedResponse {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  totalPages: number;
  items: ContainerData[];
}
