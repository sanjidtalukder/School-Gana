import Image from 'next/image';
import React from 'react';

const TableSearch = () => {
  return (
    <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-2xl shadow-sm border w-full max-w-sm">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 outline-none bg-transparent text-gray-700 placeholder:text-gray-400"
      />

      {/* Filter Icon */}
      <button className="p-1 hover:bg-gray-100 rounded-lg transition">
        <Image src="/filter.png" alt="Filter" width={18} height={18} />
      </button>
    </div>
  );
};

export default TableSearch;
