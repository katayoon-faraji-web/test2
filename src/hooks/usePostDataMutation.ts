import axios from "axios"
import { useMutation } from "@tanstack/react-query";
import { itemType } from "../types/types/itemType";
import {queryClient} from '../main';
import toast from 'react-hot-toast';

const usePostDataMutation = () =>{

    const fetcher =async(newItem:itemType) =>{
        const res = await axios.post("http://localhost:3000/posts",newItem)
        return res;
    }

    const mutate = useMutation({
        mutationKey:['posts'],
        mutationFn:fetcher,
        
        onSuccess: (res) => {
            queryClient.invalidateQueries({
              queryKey: ['posts'],
            })
            toast.success(res.message)
          },
    })
    return mutate
}
export default usePostDataMutation;