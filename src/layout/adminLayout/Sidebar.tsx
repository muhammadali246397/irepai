import { cn } from '@/lib/utils';
import { LayoutDashboard } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='col-span-2 h-screen bg-light-gray p-4 sticky top-0 left-0'>
           <div className='flex flex-col gap-4'>

            <NavLink to='/admin/dashboard' className={({isActive}) => cn(
                'bg-gray p-3 flex items-center gap-2 rounded-md hover:bg-dark-gray hover:text-white transition-all ',
                {
                    'bg-dark-gray text-white':isActive
                }
            )}
            
            ><LayoutDashboard className='shrink-0' /> <span className='truncate'>Dashboard</span> </NavLink>


            <NavLink to='/admin/serviceList' className={({isActive}) => cn(
                'bg-gray p-3 flex items-center gap-2 rounded-md hover:bg-dark-gray hover:text-white transition-all ',
                {
                    'bg-dark-gray text-white':isActive
                }
            )}
            >Service List</NavLink>
            <NavLink className={({isActive}) => cn(
                'bg-gray p-3 flex items-center gap-2 rounded-md hover:bg-dark-gray hover:text-white transition-all ',
                {
                    'bg-dark-gray text-white':isActive
                }
            )} to='/admin/addService'>Add Services</NavLink>
           </div>
        </div>
    );
};

export default Sidebar;