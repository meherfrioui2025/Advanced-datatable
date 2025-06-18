import type { FC, ReactNode } from "react";

import Table from "./table";

export type DataTableConfig = {
  label: string;
  key?: string;
  isVisible: boolean;
  render?: () => ReactNode;
};

export type DataTableData<T> = {
  [key: string]: T;
};

interface DataTableProps {
  title: string;
  config: Array<DataTableConfig>;
  data: Array<DataTableData<ReactNode>>;
}

const DataTable: FC<DataTableProps> = ({ title, config, data }) => {
  return (
    <div className="border border-gray-300 shadow-2xl bg-white rounded-md m-2 p-2">
      <div className="flex justify-between gap-5 items-center m-3">
        <div className="font-bold text-xl">{title}</div>
      </div>
      <div className="overflow-scroll m-3">
        <Table config={config} data={data} />
      </div>
    </div>
  );
};

export default DataTable;
