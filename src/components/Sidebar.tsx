import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  user: { jwt: string };
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, user }) => {
  const handleLogout = () => {
    localStorage.removeItem('loggedUser');
    toast.success('Logout successfully');
    setTimeout(() => {
        window.location.href = '/login';

    }, 1000);
}
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white p-5 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden`}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button
          className="text-gray-500 focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <nav aria-label="Sidebar">
        <ul className="space-y-4 text-sm">
          <li><Link className="text-gray-500 transition hover:text-gray-500/75" to="/">Home</Link></li>
          <li><Link className="text-gray-500 transition hover:text-gray-500/75" to="/todos">Your Tasks</Link></li>
          <li><Link className="text-gray-500 transition hover:text-gray-500/75" to="/add">Add Task</Link></li>
          <li><Link className="text-gray-500 transition hover:text-gray-500/75" to="/tasks">Tasks</Link></li>
          <li> 
            <button 
            onClick={handleLogout}
           className="text-gray-500 flex gap-2">
           Logout
           <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4C12.75 4.41421 12.4142 4.75 12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C12.4142 19.25 12.75 19.5858 12.75 20C12.75 20.4142 12.4142 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12C3.25 7.16751 7.16751 3.25 12 3.25Z" fill="#1C274C"></path> <path d="M16.4697 9.53033C16.1768 9.23744 16.1768 8.76256 16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L17.5303 15.5303C17.2374 15.8232 16.7626 15.8232 16.4697 15.5303C16.1768 15.2374 16.1768 14.7626 16.4697 14.4697L18.1893 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H18.1893L16.4697 9.53033Z" fill="#1C274C"></path> </g></svg>
            </button> 
            </li>
        </ul>
      </nav>

      {!user?.jwt && (
        <div className="mt-8 flex flex-col gap-4">
          <Link className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow" to="/login">
            Login
          </Link>
          <Link className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black" to="/register">
            Register
          </Link>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false}/>
    </div>
  );
};

export default Sidebar;
