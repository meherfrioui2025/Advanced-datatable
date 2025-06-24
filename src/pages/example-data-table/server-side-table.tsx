import { useEffect, useState } from "react";
import DataTable from "../../components/data-table";

const ServerSideTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const resJSON = await res.json();
      setData(resJSON);
    };
    fetchData();
  }, []);
  return (
    <DataTable
      title="List of Users"
      withPagination={true}
      withFilter
      config={[
        { label: "UserId", key: "userId", isVisible: true },
        { label: "Id", key: "id", isVisible: true },
        { label: "Title", key: "title", isVisible: true },
        { label: "Email", key: "title", isVisible: true },
        { label: "Position", key: "title", isVisible: true },
        { label: "Completed", key: "title", isVisible: true },
        {
          label: "Body",
          key: "body",
          isVisible: true,
        },
      ]}
      data={data}
      isLoading
    />
  );
};

export default ServerSideTable;
