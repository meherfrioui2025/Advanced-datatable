import { useState, type FC, type ReactNode } from "react";

import Pagination from "./pagination";
import Button from "../button";
import Select from "../select";
import Input from "../input";
import Label from "../label";
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
  isLoading?: boolean;
  withPagination: boolean;
  withFilter: boolean;
}

const DataTable: FC<DataTableProps> = ({
  title,
  config,
  data,
  withPagination,
  withFilter,
  isLoading
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [goToPage, setGoToPage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (value: string) => {
    setPageSize(parseInt(value));
    setCurrentPage(1);
  };

  const filterDataBySearch = (
    data: Array<DataTableData<ReactNode>>,
    searchTerm: string,
    config: Array<DataTableConfig>
  ) => {
    if (!searchTerm) return data;

    const lowerSearchTerm = searchTerm.toLowerCase();
    return data.filter((item) =>
      config.some(({ key }) => {
        const value = item[key!];
        if (value == null) return false;
        return String(value).toLowerCase().includes(lowerSearchTerm);
      })
    );
  };

  const filtered = filterDataBySearch(data, searchTerm, config);
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentData = filtered.slice(startIndex, endIndex);
  return (
    <>
      <div className="border border-gray-300 shadow-2xl bg-white rounded-md m-2 p-2 flex flex-col">
        <div className="flex justify-between gap-5 items-center m-3">
          <div className="font-bold text-xl">{title}</div>
        </div>
        {withFilter ? (
          <div className="flex flex-col justify-between gap-4 md:flex-row m-2">
            <div className="relative flex-1 max-w-md flex items-center">
              <span className="mdi mdi-search-web absolute left-3 top-1/2 transform -translate-y-1/2 text-md text-gray-400" />
              <Input
                placeholder={`Search ${title} by ${config
                  .slice(0, 5)
                  .map((i) => i.label)
                  .join(", ")
                  .replace(/, ([^,]*)$/, " or $1")}${
                  config.length > 5 ? ", etc..." : ""
                }`}
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 text-sm"
              />
            </div>

            <div className="flex items-center gap-2">
              <Label
                htmlFor="pageSize"
                className="text-sm font-medium whitespace-nowrap"
              >
                Show:
              </Label>
              <Select
                value={pageSize.toString()}
                options={[
                  { label: "5", value: "5" },
                  { label: "10", value: "10" },
                  { label: "25", value: "25" },
                  { label: "50", value: "50" },
                  { label: "100", value: "100" },
                ]}
                onChange={handlePageSizeChange}
              />
            </div>
          </div>
        ) : null}
        <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
          <span>
            Showing {startIndex + 1} to {endIndex} of {totalItems} {title}
            {searchTerm && ` (filtered from ${data.length} total)`}
          </span>
          {searchTerm && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSearchChange("")}
              className="text-blue-600 hover:text-blue-800"
            >
              Clear search
            </Button>
          )}
        </div>

        <div className="overflow-scroll m-3 relative">
          <Table config={config} data={currentData} isLoading={isLoading}/>
        </div>
        {withPagination ? (
          <Pagination
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            currentPage={currentPage}
            goToPage={goToPage}
            setGoToPage={setGoToPage}
          />
        ) : null}
      </div>
    </>
  );
};

export default DataTable;
