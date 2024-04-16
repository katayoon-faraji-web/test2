
import React, { FC } from 'react';
import {useGetDataQuery} from '../hooks/useGetDataQuery';
import {itemType} from '../types/types/itemType';


const List:FC = ():React.ReactNode =>{
    const {data:allData ,isLoading} = useGetDataQuery("http://localhost:3000/posts");
    console.log(allData?.data);

    // const res = query?.data
    
   
    return(
        <div style={{width:'100%',background:'yellow',marginTop:'10px'}}>
            {allData?.data?.map((val:itemType)=>{
                return(
                    <div  style={{width:'100%',height:'60px'}}>{val.id} - {val.title} - {val.views}</div>
                )
            })}
        </div>
    )
 
    
}
export default List;