import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Test = () => {

    useEffect(()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            userId:'100',
            title:'asdfad',
            body:'ssssssssss'
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((e)=>{
            console.log('Something wrong');
        })
    },[])

    return (
        <div>
            
        </div>
    )
}

export default Test
