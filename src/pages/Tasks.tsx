import { useState } from "react";

import Paginator from "../components/Paginator";
import { TextEffect } from "../components/TextEffect";
import useAuthFetch from "../Hooks/useAuthFetch";
interface ITask {
    id: number
    attributes: {
        title: string;
        note: string;
        img: string;
    }
}
const Tasks = () => {
    const [sort, setSort] = useState('ASC');
    const [page, setPage] = useState(1);
    const {data,isLoading,isFetching} = useAuthFetch({key: ['tasks',`${page}`,`${sort}`],url: `/tasks?pagination[pageSize]=6&pagination[page]=${page}&sort=createdAt:${sort}`})
    const total = data?.meta?.pagination?.total;
    const pageCount = data?.meta?.pagination?.pageCount;
    const tasks = data?.data;
    const onClickNext = () => {
        setPage(prev => prev + 1)

    }
    const onClickPrev = () => {
        setPage(prev => prev - 1)

    }
    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(e.target.value);
    }

  return (
    <div className="p-4 sm:p-20">
        <div className="flex justify-between">
        <TextEffect className="text-sm w-3/4 sm:text-2xl font-medium text-gray-900 ">List of tasks that help you to manage your time and work efficiently.</TextEffect> 
        <div >
  <select
    onChange={handleSort}
    name="sort"
    className="mt-1.5 p-2 sm:px-8 bg-slate-200 w-full rounded-lg border-gray-500 text-gray-900 sm:text-sm"
  >
    <option disabled>Sort By</option>
    <option value="ASC">Oldest</option>
    <option value="DESC">Latest</option>
   
  </select>
</div>
        </div>
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-3 gap-8 mt-6">
        {
            tasks?.map((task:ITask) => 
                <section  className="block" key={task.id}>
                <img
                  alt="task"
                  src={task.attributes.img}
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />
              
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{task.attributes.title}</h3>
                <p className="mt-2 max-w-sm text-gray-700">
                {task.attributes.note}
                </p>
              </section>
            )
        }
        </div> 
        <Paginator page={page} onClickNext={onClickNext} onClickPrev={onClickPrev} pageCount={pageCount} total={total} isLoading={isLoading|| isFetching} ></Paginator>
    </div>
  );
}

export default Tasks;
