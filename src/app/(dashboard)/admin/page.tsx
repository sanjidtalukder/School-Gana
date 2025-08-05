import CountChart from '@/components/CountChart';
import UserCard from '../../../components/UserCard';
import AttendanceChart from '@/components/AttendanceChart';
import FinanceChart from '@/components/FinanceChart';
import EventCalender from '@/components/EventCalender';
import Annuncement from '@/components/Annuncement';

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-6">
      
      {/* Left Section */}
      <div className="w-full lg:w-2/3 space-y-6">
        
        {/* User Overview */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">User Overview</h2>
          <div className="flex flex-wrap gap-4">
            <UserCard type="student" />
            <UserCard type="teacher" />
            <UserCard type="parent" />
            <UserCard type="staff" />
          </div>
        </section>

        {/* Charts Section */}
        <section className="flex flex-col lg:flex-row gap-4">
          
          {/* Count Chart */}
          <div className="w-full lg:w-1/2 h-[450px]">
            <CountChart />
          </div>

          {/* Placeholder for another chart (optional) */}
          <div className="w-full lg:w-1/2 h-[450px] bg-white rounded-xl shadow-md flex items-center justify-center text-gray-500">
           
            <AttendanceChart></AttendanceChart>
          </div>

         
        </section>

        <section>

           {/* Bootom chart */}

          <div className='w-full  h-[500px]'>
          <FinanceChart></FinanceChart>
          </div>
        </section>
      </div>

      {/* Right Sidebar */}
      <aside className="w-full lg:w-1/3 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Quick Actions</h2>
        <div className="bg-white shadow-md rounded-xl p-4">
          <div className='w-full h-auto p-1'>
            <EventCalender></EventCalender>
          </div>
        </div>
        <div className='w-full h-auto p-1'>
          <Annuncement></Annuncement>
        </div>
      </aside>
    </div>
  );
};

export default AdminPage;
