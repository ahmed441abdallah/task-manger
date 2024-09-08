import { Link } from "react-router-dom";
import { Description, Field, Input, Label, Select, Textarea } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from "react";
import axiosInstance from "../config/axios.config";
import toast, { Toaster } from "react-hot-toast";
const AddTask = () => {    
    const [addedTask, setAddedTask] = useState({
        title: '',
        note: '',
        category: '',
        status: '',
        priority: '',
        user: JSON.parse(localStorage.getItem('loggedUser') as string).user.id
    })
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>|React.ChangeEvent<HTMLInputElement> 
        |React.ChangeEvent<HTMLSelectElement>
     ) => { 
    const {value,name} = event.target;
    setAddedTask({
        ...addedTask,
        [name]: value})
    
    }
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
           const response = await axiosInstance.post('/todos',{
            data: {
                title: addedTask.title,
                note: addedTask.note,
                category: addedTask.category,
                status: addedTask.status,
                priority: addedTask.priority,
                user: [addedTask.user]
            }
        },{
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('loggedUser') as string).jwt}`
            }
        })
        if(response.status === 200){ // check if the response is successful
          toast.success('Task added successfully');
          setTimeout(() => {
          window.location.href = '/todos';
          },1000)
        }
        } catch (error) {
            console.log(error);
          
        }
       
    }
    
  return (
    <div className="p-4 sm:py-8 sm:px-24">      
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-slate-100">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Add New Task 💪</h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
    Once you fill in the placeholders with the specific details, this content will be perfectly tailored to your to-do list website!
    </p>

    <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <p className="text-center text-lg font-medium">Task Details</p>
      <div>
        <div className="w-full max-w-md px-4">
        <Field>
        <Label className="text-sm/6 font-medium text-black">Task Title </Label>
        <Description className="text-sm/6 text-gray-500">Use your new  title so people will recognize it.</Description>
        <Input
        required
            onChange={handleInputChange}
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-gray-300 py-1.5 px-3 text-sm/6 text-black',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          name="title"
        />
      </Field>
        </div>
      <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-black">Task Note</Label>
        <Description className="text-sm/6 text-gray-500">This will be shown under the task title.</Description>
        <Textarea
        name="note"
        required
            onChange={handleInputChange}
          className={clsx(
            'mt-3 block w-full resize-none rounded-lg border-none bg-gray-300 py-1.5 px-3 text-sm/6 text-black',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          rows={3}
        />
      </Field>
    </div>
    <div className=" w-full mx-w-md px-4">
        <Field>
        <Label className="text-sm/6 font-medium text-black">Task Category 🎯</Label>
        <Description className="text-sm/6 text-gray-500">This will be visible to clients on the tasks.</Description>
        <div className="relative">
          <Select
            onChange={handleInputChange}
          name="category"
          required
            className={clsx(
              'mt-3 block w-full appearance-none rounded-lg border-none bg-gray-300 py-1.5 px-3 text-sm/6 text-black',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
              // Make the text of each option black on Windows
              '*:text-black'
            )}
          >
            <option value="Education">Education</option>
            <option value="Funny">Funny</option>
            <option value="Work">Work</option>
            <option value="Sports">Sports</option>
          </Select>
          <svg 
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 "
            fill="#000000" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M47.6,17.8L27.1,38.5c-0.6,0.6-1.6,0.6-2.2,0L4.4,17.8c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2 c0.6-0.6,1.6-0.6,2.2,0l16.1,16.3c0.6,0.6,1.6,0.6,2.2,0l16.1-16.2c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C48.1,16.3,48.1,17.2,47.6,17.8z"></path> </g>
            </svg>
        </div>
      </Field></div>
    <div className=" w-full mx-w-md px-4">
    <Field> 
            <Label className="text-sm/6 font-medium text-black">Task Status ⏳</Label>
            <Description className="text-sm/6 text-gray-500"> show task status and progress</Description>
            <div className="relative"> 
            <Select
            onChange={handleInputChange}
          name="status"
          required
            className={clsx(
              'mt-3 block w-full appearance-none rounded-lg border-none bg-gray-300 py-1.5 px-3 text-sm/6 text-black',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
              // Make the text of each option black on Windows
              '*:text-black'
            )}
          >
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>

          </Select>
          <svg 
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4  "
            fill="#000000" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M47.6,17.8L27.1,38.5c-0.6,0.6-1.6,0.6-2.2,0L4.4,17.8c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2 c0.6-0.6,1.6-0.6,2.2,0l16.1,16.3c0.6,0.6,1.6,0.6,2.2,0l16.1-16.2c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C48.1,16.3,48.1,17.2,47.6,17.8z"></path> </g>
            </svg>
            </div>
            </Field>
            <Field> 
            <Label className="text-sm/6 font-medium text-black">Task Priority </Label>
            <Description className="text-sm/6 text-gray-500"> show task Priority From Low To Hight</Description>
            <div className="relative"> 
            <Select
          name="priority"
          required
          onChange={handleInputChange}
            className={clsx(
              'mt-3 block w-full appearance-none rounded-lg border-none bg-gray-300 py-1.5 px-3 text-sm/6 text-black',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
              // Make the text of each option black on Windows
              '*:text-black'
            )}
          >
            <option disabled>  Priority</option>
            <option value="Low">Low</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>

          </Select>
          <svg 
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4  "
            fill="#000000" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M47.6,17.8L27.1,38.5c-0.6,0.6-1.6,0.6-2.2,0L4.4,17.8c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2 c0.6-0.6,1.6-0.6,2.2,0l16.1,16.3c0.6,0.6,1.6,0.6,2.2,0l16.1-16.2c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C48.1,16.3,48.1,17.2,47.6,17.8z"></path> </g>
            </svg>
            </div>

           
            </Field>

    </div>
      </div>
      <button
        type="submit"
        className="block w-1/2 m-auto rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Add Task
      </button>
      <p className="text-center text-sm text-gray-500">
        have Tasks?
        <Link className="underline ms-2" to="/todos">Task List</Link>
      </p>
    </form>
  </div>
</div>
<Toaster position="top-center" reverseOrder={false}/>
</div>
  )
}

export default AddTask;
