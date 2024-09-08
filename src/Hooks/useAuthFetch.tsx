import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/axios.config";
import { useAuthFetchProps } from "../interfaces";


const useAuthFetch = ({key,url,config}:useAuthFetchProps) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
        const response = await axiosInstance.get(url,config);
        return response.data;
    },
   
})
}

export default useAuthFetch
