import Image from "next/image";

interface UserCardProps {
  type: string;
}

const UserCard = ({ type }: UserCardProps) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[150px] shadow-md text-gray-800">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600 bg-white rounded-xl p-1">2025/07/30</span>
        <Image src="/more.png" alt="More options" width={20} height={20} />
      </div>

      {/* Statistic */}
      <div className="mb-1">
        <h2 className="text-2xl font-bold">1,234</h2>
        <p className="text-sm text-gray-500 mt-1">Total {type}s</p>
      </div>

      {/* Label */}
      {/* <p className="text-2xl font-medium  capitalize mt-2">Total {type}</p> */}
    </div>
  );
};

export default UserCard;
