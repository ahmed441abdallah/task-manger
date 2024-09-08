import { useState } from "react";
import Modal from "../components/Modal";
import NoTodo from "../components/NoTodo";
import useAuthFetch from "../Hooks/useAuthFetch";
import EditModalContent from "../components/EditModalContent";
import { ITask } from "../interfaces";
import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "../config/axios.config";

const TodoList = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [queryVersion, setQueryVersion] = useState(1);
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
    const [updatedTask, setUpdatedTask] = useState<ITask>({
        id:0,
        title: '',
        category: '',
        status: '',
        note: '',
        priority: ''
      })
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>) => {
        const {value,name} = e.target;
        setUpdatedTask({
          ...updatedTask,
          [name]: value
    
        })
      }
      const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
         const response =await axiosInstance.put(`/todos/${selectedTaskId}`,{
            data:{
              title: updatedTask.title,
              category: updatedTask.category,
              status: updatedTask.status,
              note: updatedTask.note,
              priority: updatedTask.priority
            }
          },{
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem('loggedUser') as string).jwt}`
            }
          })
          console.log("data",response.data);
          toast.success('Task updated successfully');
          setQueryVersion(queryVersion + 1); // important to refetch the data
          setIsEditModalOpen(false);
          
        } catch (error) {
          console.log(error);
          
        }
        
        
      }
   
    const toggleModal = (taskId: number | null) => {
        setSelectedTaskId(taskId); // Set the selected task ID
        setIsEditModalOpen(!isEditModalOpen);
    }
    const openDeleteModal = (id :number | null) => {
        setSelectedTaskId(id);
        setIsDeleteModalOpen(true);
        console.log("Deltedid",id);
        

    }
    const handleDelete = async() => {
        try {
            const response = await axiosInstance.delete(`/todos/${selectedTaskId}`,{
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('loggedUser') as string).jwt}`
                }
            })
            if(response.status === 200) {
                toast.success('Task deleted successfully');
                setQueryVersion(queryVersion + 1);
                setIsDeleteModalOpen(false);
            }
            
        } catch (error) {
             toast.error(`An error occurred${error}`);
            
        }
    }

    const userData =  localStorage.getItem('loggedUser');
    const {jwt} = JSON.parse(userData as string);
    // get task related to the user. 
    const {data, isPending} = useAuthFetch({key: ['user-todo',`${queryVersion}`],
         url: '/users/me?populate=todos',
          config: {headers: {Authorization: `Bearer ${jwt}`}},
        }
        );

    if (isPending) return 'Loading...';
    if (data.length == 0) return <NoTodo />;

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    Id
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Task name
                            </th>
                           
                            <th scope="col" className="px-6 py-3">
                                Note
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            
                            
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                            priority
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.todos.map((task: ITask,index:number) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={task.id}>
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <p>{index+1}</p>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {task.title.toUpperCase()}
                                    </th>
                                   
                                    <td className="px-6 py-4">
                                        {task.note}
                                    </td>
                                    <td className="px-6 py-4">
                                        {task.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`${task.status==='Completed'?'text-green-400':"text-red-500"}`}>
                                            {task.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span >
                                            {task.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 gap-4 flex">
                                        <button
                                        onClick={()=>openDeleteModal(task.id)}
                                         className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                                        <button 
                                            onClick={() => toggleModal(task.id)} // Pass the task ID to toggleModal
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            Edit
                                        </button>
                                    </td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* edit modal */} 
            <Modal isOpen={isEditModalOpen} closeModal={() => toggleModal(null)} title="Edit Task ✏️" >
                <EditModalContent
                handleSubmit={handleSubmit}
                setIsOpen={setIsEditModalOpen}
                handleInputChange={handleInputChange} /> {/* Pass the selectedTaskId to EditModalContent */}
            </Modal>
            {/* delete modal */}
            <Modal isOpen={isDeleteModalOpen} closeModal={()=>setIsDeleteModalOpen(false)}
            description="Are you sure you want to delete this task?"
            title="Delete Task 🤚" >
<div className="flex gap-2 justify-end">
<button
type="button"
 onClick={()=>setIsDeleteModalOpen(false)}className="inline-flex mt-4 items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">Cancel</button>
<button
type="submit"
 onClick={handleDelete}
 className="inline-flex mt-4 items-center gap-2 rounded-md bg-red-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-500 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">Delete</button>

</div>
            </Modal>
            <Toaster position="top-center" reverseOrder={false}/>
            </div>
    )
}

export default TodoList;
