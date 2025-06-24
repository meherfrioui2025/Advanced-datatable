import { useEffect, useState } from "react";
import DataTable from "../../components/data-table";

const ComplexHeadersTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      const resJSON = await res.json();
      setData(resJSON);
    };
    fetchData();
  }, []);
  return (
    <DataTable
      title="List of Posts"
      withPagination={true}
      withFilter
      config={[
        { label: "Post Id", key: "postId", isVisible: true },
        { label: "Id", key: "id", isVisible: true },
        { label: "Name", key: "name", isVisible: true },
        { label: "Email", key: "email", isVisible: true },
        { label: "Body", key: "body", isVisible: true },
      ]}
      data={data}
      isLoading={false}
    />
  );
};

export default ComplexHeadersTable;
