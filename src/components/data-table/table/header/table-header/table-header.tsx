import type { FC } from "react";

interface TableHeaderProps {
  label: string;
}
const TableHeader: FC<TableHeaderProps> = ({ label }) => {
  return <th className="border border-gray-300 px-4 py-2 font-semibold">{label}</th>;
};

export default TableHeader;
