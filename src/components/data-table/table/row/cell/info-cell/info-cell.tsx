import type { FC, ReactNode } from "react";

interface InfoCellProps {
  value: ReactNode;
}
const InfoCell: FC<InfoCellProps> = ({ value }) => {
  return (
    <td
      className="border border-gray-300 px-4 py-2 text-sm text-gray-800 h-full"
      title={typeof value === "string" ? value?.toString() : ""}
      style={{ height: 20 }}
    >
      {value}
    </td>
  );
};

export default InfoCell;
