import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";

const TeacherListPage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex-1 m-2">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-800">All Teachers</h1>

        {/* Search */}
        <TableSearch />
      </div>

      {/* List Section */}
      <div className="mt-6">
        {/* TODO: Replace with Teacher List */}
        <Table></Table>
      </div>

      {/* Pagination Section */}
      <div className="mt-4 flex justify-end">
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default TeacherListPage;
