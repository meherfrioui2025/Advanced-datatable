import type { FC, ReactNode } from "react";

import type { DataTableConfig, DataTableData } from "../data-table";
import Header from "./header";
import Row from "./row";

interface TableProps {
  config: Array<DataTableConfig>;
  data: Array<DataTableData<ReactNode>>;
}

const Table: FC<TableProps> = ({ config, data }) => {
  return (
    <table className=" border border-gray-300 w-full">
      <Header config={config} />
      <Row data={data} config={config} />
    </table>
  );
};

export default Table;
