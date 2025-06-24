import type { FC, ReactNode } from "react";

import type { DataTableConfig, DataTableData } from "../../../data-table";
import InfoCell from "./info-cell";

interface CellProps {
  config: Array<DataTableConfig>;
  item: DataTableData<ReactNode>;
}

const Cell: FC<CellProps> = ({ config, item }) => {
  return (
    <tr className="hover:bg-gray-50 max-h-8 max-w-8">
      {config
        .filter((item) => item.isVisible)
        .map((conf, index) => (
          <InfoCell
            key={index}
            value={conf.render ? conf.render() : item[conf.key as string]}
          />
        ))}
    </tr>
  );
};

export default Cell;
