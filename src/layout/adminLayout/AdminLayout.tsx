
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className='grid grid-cols-12 gap-5'>
            <Sidebar />
            <div className='col-span-10'>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;