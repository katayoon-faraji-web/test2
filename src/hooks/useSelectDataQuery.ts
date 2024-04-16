import { useQuery } from "@tanstack/react-query"
import axios from "axios";


export const useSelectDataQuery = () =>{
    const fetcher = async() =>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        return res;
    }

    const query = useQuery({
        queryKey:['todos'],
        queryFn:fetcher
    })
    return query;
}