import React from "react";

// Define Subject type
type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

// Props type
interface SubjectTableProps {
  data: Subject[];
}

const SubjectTable: React.FC<SubjectTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full border border-gray-200 rounded-lg">
        {/* Table Head */}
        <thead className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Subject
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Teachers
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((subject, index) => (
            <tr
              key={subject.id}
              className={`hover:bg-blue-50 transition-colors ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="px-4 py-3 text-sm text-gray-700">{subject.id}</td>
              <td className="px-4 py-3 text-sm font-medium text-gray-800">
                {subject.name}
              </td>
              <td className="px-4 py-3 text-sm text-gray-600 truncate max-w-xs">
                <span title={subject.teachers.join(", ")}>
                  {subject.teachers.join(", ")}
                </span>
              </td>
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td
                colSpan={3}
                className="text-center py-6 text-gray-500 italic"
              >
                No subjects found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectTable;
