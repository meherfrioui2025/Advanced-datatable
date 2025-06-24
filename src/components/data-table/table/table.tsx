import type { FC, ReactNode } from "react";

import type { DataTableConfig, DataTableData } from "../data-table";
import Header from "./header";
import Row from "./row";

interface TableProps {
  config: Array<DataTableConfig>;
  data: Array<DataTableData<ReactNode>>;
  isLoading?:boolean
}

const Table: FC<TableProps> = ({ config, data,isLoading }) => {
  return (
    <table className="border border-gray-300 table-auto w-full">
      <Header config={config} />
      <Row data={data} config={config} isLoading={isLoading} />
    </table>
  );
};

export default Table;
