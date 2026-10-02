import React,{useEffect, useState} from 'react' 
import axios from 'axios'
import Post from './Post'
import {Calculator} from 'lucide-react'




function Posts() {

    const [blogs, setBlogs] = useState([])
    const [records, setRecords] = useState([])


    useEffect(()=>{
        async function fetchData(){
        
        try{

            const res = await  axios.get('http://localhost:3009/products')        
            setBlogs(res.data)
            setRecords(res.data)
        }

        catch(error){
            console.log(error.message)   
        }
    }

    fetchData()

    },[])



    function getInputData(event){
        setBlogs(records.filter( r => r.title.toLowerCase().includes(event.target.value.toLowerCase()) ))

    }




  return (

    <div className='posts'>
        <div className='search-container flex items-center justify-center my-[50px]'>
            <input type='text' placeholder=' search...' 
            className='search-input w-[300px] border-[2px] bg-[#808070] p-[4px] rounded-[30px] text-white'
            onChange={getInputData}>
            </input>
        </div>

        <div className='blog-icon flex justify-between my-[10px] mx-[100px] items-center border-b text-[#808060]'>
            <h3 className='text-[#808010]'>Blogs</h3>

             <Calculator size={25} />  {/*icon kond varan vendiyan*/}

        </div>

         <div className='h-[50px]'></div> {/*just space kittan vendiyan Ee div */}

        <div className='posts-container flex flex-wrap gap-[20px] justify-center p-[20px]'>
            {blogs.map((blog, index)=> (
                <Post blog={blog} key={index} />
            ))}
        </div>

        <div className='h-[100px]'></div> {/*just space kittan vendiyan Ee div */}

    </div>

  )
}

export default Posts