import { Description, Field, Input, Label,Select } from '@headlessui/react'
import { Button } from '@headlessui/react'
import clsx from 'clsx';

interface EditModalContentProps {
  setIsOpen: (value: boolean) => void;
  taskId: number | null;
  handleSubmit: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; // Update the type of handleInputChange
}
const EditModalContent = ({setIsOpen,handleSubmit,handleInputChange}:EditModalContentProps) => {
 
  
  return (
    <form onSubmit={handleSubmit}>
    <Field>
        <Label className="text-sm/6 font-medium text-black">Task Title 👋</Label>
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
      <Field>
        <Label className="text-sm/6 font-medium text-black">Task Note 📓</Label>
        <Description className="text-sm/6 text-gray-500">Use your new  Note here.</Description>
        <Input
        required
          onChange={handleInputChange}
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-gray-300 py-1.5 px-3 text-sm/6 text-black',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          name="note"
        />
      </Field>
      <Field className='my-2'>
        <Label className="text-sm/6 font-medium text-black">Task Category 🎯</Label>
        <Description className="text-sm/6 text-gray-500">This will be visible to clients on the tasks.</Description>
        <div className="relative">
          <Select
          name="category"
          required
          onChange={handleInputChange}
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
      </Field>
            <Field> 
            <Label className="text-sm/6 font-medium text-black">Task Status ⏳</Label>
            <Description className="text-sm/6 text-gray-500"> show task status and progress</Description>
            <div className="relative"> 
            <Select
          name="status"
          required
          onChange={handleInputChange}
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
      <div className="flex gap-2 justify-end mt-4">
      <Button 
      type="button"
      onClick={() => setIsOpen(false)}
      className="inline-flex mt-4 items-center gap-2 rounded-md bg-red-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-500 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
      Cancel
    </Button>
      <Button 
      type="submit"
      className="inline-flex mt-4 items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
      Save changes
    </Button>
      </div>
    </form>
  )
}

export default EditModalContent;
