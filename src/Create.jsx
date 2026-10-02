


// import React from 'react'

// function Create() {
//   return (
//     <div className='form-container w-full min-h-[80vh] flex items-center justify-center'>
//       <form className=' w-[450px] flex flex-col pt-[30px] pr-[40px] pb-[40px] pl-[40px] rounded-md bg-[#808060] mt-[80px]'>

//         <h1 className='text-white text-3xl font-bold text-center mb-[20px]' style={{ fontFamily: 'Georgia, serif' }}>
//           Add a New Blog
//         </h1>

//         <h2 className='text-black text-lg mb-[6px]' style={{ fontFamily: 'Georgia, serif' }}>Title:</h2>
//         <input
//           className=' p-[10px] rounded-sm border border-gray-300 mb-[16px]'
//           type='text'
//           name='title'
//           placeholder='Write Title'
//         />

//         <h2 className='text-black text-lg mb-[6px]' style={{ fontFamily: 'Georgia, serif' }}>Description:</h2>
//         <input
//           className='w-full p-[10px] rounded-sm border border-gray-300 mb-[16px] '
//           type='text'
//           name='desc'
//           placeholder='Write Description'
//         />

//         <h2 className='text-black text-lg mb-[6px]' style={{ fontFamily: 'Georgia, serif' }}>Input File:</h2>
//         <input
//           className='w-full p-[6px] mb-[20px] text-white'
//           type='file'
//           name='inputFile'
//         />

//         <button
//           type='submit'
//           className='newblog-btn bg-white text-black hover:bg-black hover:text-white  font-semibold py-[10px] px-[15px] rounded-sm cursor-pointer text-base'
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Create




import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Create() {

  const navigate = useNavigate()

  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    brand: '',
    category: '',
    thumbnail: ''
  })


  function handleChange(e) {

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })

  }


  async function handleSubmit(e) {e.preventDefault()

     try {

      await axios.post(
        'http://localhost:3008/products',
        product
      )

      alert('Product added successfully!')

      navigate('/')

    } catch (error) {

      console.log(error.message)

    }
  }


  return (

    <div className='w-full min-h-[80vh] flex items-center justify-center'>

      <form
        onSubmit={handleSubmit}
        className='w-[450px] flex flex-col pt-[30px] pr-[40px] pb-[40px] pl-[40px] rounded-md bg-zinc-500 mt-[80px] mb-[100px]'
      >

        <h1 className='text-white text-3xl font-bold text-center mb-[20px]'>
          Add a New Product
        </h1>


        <label className='text-white text-lg mb-[6px]'> Title: </label>


        <input
          type='text'
          name='title'
          placeholder='Write Title'
          value={product.title}
          onChange={handleChange}
          className='p-[10px] rounded-sm border border-gray-300 mb-[16px]'
        />


        <label className='text-white text-lg mb-[6px]'>
          Description:
        </label>

        <textarea
          name='description'
          placeholder='Write Description'
          value={product.description}
          onChange={handleChange}
          className='w-full p-[10px] rounded-sm border border-gray-300 mb-[16px]'
        />


        <label className='text-white text-lg mb-[6px]'> Price: </label>



        <input
          type='number'
          name='price'
          placeholder='Enter Price'
          value={product.price}
          onChange={handleChange}
          className='p-[10px] rounded-sm border border-gray-300 mb-[16px]'
        />


        <label className='text-white text-lg mb-[6px]'> Brand: </label>


        <input
          type='text'
          name='brand'
          placeholder='Enter Brand'
          value={product.brand}
          onChange={handleChange}
          className='p-[10px] rounded-sm border border-gray-300 mb-[16px]'
        />


        <label className='text-white text-lg mb-[6px]'> Category: </label>


        <input
          type='text'
          name='category'
          placeholder='Enter Category'
          value={product.category}
          onChange={handleChange}
          className='p-[10px] rounded-sm border border-gray-300 mb-[16px]'
        />


        <label className='text-white text-lg mb-[6px]'> Image URL: </label>


        <input
          type='text'
          name='thumbnail'
          placeholder='Paste image URL'
          value={product.thumbnail}
          onChange={handleChange}
          className='p-[10px] rounded-sm border border-gray-300 mb-[20px]'
        />


        <button
          type='submit'
          className='bg-white text-black hover:bg-[#808060] hover:text-white font-semibold py-[10px] px-[15px] rounded-sm cursor-pointer'
        >
          Submit
        </button>

      </form>



    </div>
  )
}

export default Create