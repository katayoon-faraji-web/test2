import { useQuery } from "@tanstack/react-query"
import axios from "axios";


export const useGetDataQuery = (url:string) =>{
    const fetcher = async() =>{
        const res = await axios.get(url)
        return res;
    }

    const query = useQuery({
        queryKey:['posts'],
        queryFn:fetcher
    })
    return query;
}