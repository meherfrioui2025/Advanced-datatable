import type { FC, ReactNode } from "react";

import type { DataTableConfig, DataTableData } from "../../data-table";
import Cell from "./cell";

interface RowProps {
  data: Array<DataTableData<ReactNode>>;
  config: Array<DataTableConfig>;
}
const Row: FC<RowProps> = ({ data, config }) => {
  return (
    <tbody className="">
      {data.length > 0 ? (
        data.map((item, index) => (
          <Cell key={index} item={item} config={config} />
        ))
      ) : (
        <td>No data Found!</td>
      )}
    </tbody>
  );
};

export default Row;
