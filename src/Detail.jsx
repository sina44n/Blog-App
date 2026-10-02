
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function Detail() {

    const { id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {

        async function fetching() {
            try {

                const response = await axios.get('http://localhost:3009/products/' + id)
                setPost(response.data)

            } catch (error) {
                console.log(error.message)

            }
        }
        fetching()

    }, [id])


    if (!post) {
        return <h2>Loading...</h2>
    }


    return (

    
        
  <div className=" bg-gray-200 flex items-center justify-center p-[25px]">

    <div className="w-full max-w-[1000px] bg-white rounded-[12px] shadow-2xl overflow-hidden">

      <div className="flex flex-col md:flex-row">

        {/* Product Image */}
        <div className="w-full md:w-1/2 h-[450px] flex items-center justify-center bg-gray-100 p-[30px]">

          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-contain rounded-[10px]"
          />

        </div>


        {/* Product Details */}
        <div className="w-full md:w-1/2 p-[40px]">

          <p className="text-gray-500 text-[14px] uppercase mb-[10px]">
            {post.category}
          </p>

          <h1 className="text-[35px] font-bold text-gray-800 mb-[15px]">
            {post.title}
          </h1>

          <p className="text-gray-600 text-[16px] leading-[1.7] mb-[25px]">
            {post.description}
          </p>


          {/* Price */}
          <div className="mb-[20px]">

            <p className="text-gray-500 text-[14px]">
              Price
            </p>

            <h2 className="text-[30px] font-bold text-green-700">
              ${post.price}
            </h2>

          </div>


          {/* Product Information */}
          <div className="border-t border-gray-300 pt-[20px] ">

            <div className="flex justify-between mb-[15px]">
              <span className="font-semibold text-gray-700"> Brand </span>
              <span className="text-gray-600"> {post.brand} </span>
            </div>


            <div className="flex justify-between mb-[15px]">
              <span className="font-semibold text-gray-700"> Category </span>
              <span className="text-gray-600"> {post.category} </span>
            </div>


            <div className="flex justify-between">
              <span className="font-semibold text-gray-700"> Product ID </span>
              <span className="text-gray-600"> {post.id} </span>
            </div>

          </div>


          {/* Button */}
          <button
            onClick={() => window.history.back()}
            className="w-full mt-[30px] bg-[#808060] text-white py-[12px] rounded-[7px] cursor-pointer hover:bg-[#68684f] transition">
            ← Back to Products
          </button>


        </div>

      </div>

    </div>

  </div>
)
    
}

export default Detail