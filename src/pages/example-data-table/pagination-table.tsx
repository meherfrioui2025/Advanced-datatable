import { useEffect, useState, type ReactNode } from "react";

import type { DataTableData } from "../../components/data-table/data-table";
import DataTable from "../../components/data-table";

const PaginationTable = () => {
  const [data, setData] = useState<Array<DataTableData<ReactNode>>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const resJSON = await res.json();
      const updatedData: Array<DataTableData<ReactNode>> = resJSON.map(
        (item: DataTableData<ReactNode>) => {
          return {
            ...item,
            completed: item.completed ? "Oui" : "Non",
          };
        }
      );
      setData(updatedData);
    };
    fetchData();
  }, []);

  return (
    <DataTable
      title="Todo"
      withPagination={true}
      withFilter
      config={[
        { label: "User Id", key: "userId", isVisible: true },
        { label: "Id", key: "id", isVisible: true },
        { label: "Title", key: "title", isVisible: true },
        { label: "Completed", key: "completed", isVisible: true },
      ]}
      data={data}
      isLoading={false}
    />
  );
};

export default PaginationTable;
