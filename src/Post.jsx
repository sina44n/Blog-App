// import React from 'react'
// import './style.css'
// import {Link} from 'react-router-dom'




// function Post({blog}) {


//   return (


//     <Link to={`/read/${blog.id}`} className="text-black no-underline ">

//     <div className='blog'>
//         <img src={blog.thumbnail} className='blog-image'/>

//         <div className="blog-title">
//             <h2 className='blog-title-h2'>{blog.title}</h2>
//             <p>{blog.description}</p>

//         </div>

//     </div>

  

//     </Link>

    

//   )
// }

// export default Post



/////////////////////////////////////////////////////////////////////////




import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {Trash2} from 'lucide-react'

function Post({ blog }) {

  // const navigate = useNavigate()

  async function handleDelete(e) {

    // Stop the Link from opening /read/:id
    e.preventDefault()
    e.stopPropagation()

    try {

      await axios.delete(`http://localhost:3009/products/${blog.id}`)

      alert('Product deleted successfully')

      // Refresh the current page
      window.location.reload()

    } catch (error) {

      console.log(error.message)

    }
  }


  return (

    <Link
      to={`/read/${blog.id}`}
      className="text-black no-underline"
    >

      <div className='blog'>

        <img
          src={blog.thumbnail}
          className='blog-image'
          alt={blog.title}
        />

        <div className="blog-title">

          <h2 className='blog-title-h2'> {blog.title} </h2>
          <p> {blog.description} </p>

          <button onClick={handleDelete} className=' cursor-pointer mt-[10px]'>
            <Trash2 size={15} />
          </button>

        </div>

      </div>

    </Link>

  )
}

export default Post