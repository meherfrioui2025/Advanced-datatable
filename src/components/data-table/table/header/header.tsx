import type { FC } from "react";

import type { DataTableConfig } from "../../data-table";
import TableHeader from "./table-header";

interface HeaderProps {
  config: Array<DataTableConfig>;
}

const Header: FC<HeaderProps> = ({ config }) => {

  return (
    <thead className="w-full">
      <tr className="w-full">
        {config.length > 0 ? (
          config
            .filter((item) => Boolean(item.isVisible))
            .map((conf) => <TableHeader key={conf.label} label={conf.label} />)
        ) : (
          <th>You must provide a columns</th>
        )}
      </tr>
    </thead>
  );
};

export default Header;
