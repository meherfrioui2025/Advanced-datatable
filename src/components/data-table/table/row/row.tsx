import type { FC, ReactNode } from "react";

import type { DataTableConfig, DataTableData } from "../../data-table";
import Loader from "../../../loader";
import Cell from "./cell";

interface RowProps {
  data: Array<DataTableData<ReactNode>>;
  config: Array<DataTableConfig>;
  isLoading?: boolean;
}
const Row: FC<RowProps> = ({ data, config, isLoading }) => {
  return (
    <tbody className="">
      {data.length > 0 ? (
        data.map((item, index) => (
          <Cell key={index} item={item} config={config} />
        ))
      ) : (
        <tr>
          <td className="py-2 px-6">
            {isLoading ? <Loader size="lg" /> : "No data Found!"}
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default Row;
