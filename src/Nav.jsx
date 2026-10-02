import React from 'react'
import {Link} from 'react-router-dom'



function Nav() {


  return (

    <div className='nav w-[100wh] flex justify-between items-center bg-[#808060] h-[60px] pl-[80px] text-white'>
        <h2 className='nav-brand text-white text-[25px] font-bold'>Sina44n</h2>
        <ul className='menu flex list-none justify-center items-center mr-[170px] gap-[15px]'>
            <li> <Link to='/' className='menu-btn text-white border-none py-[6px] px-[12px]  cursor-pointer hover:bg-[#808010] rounded-[50px] no-underline'> Home</Link></li>
            <li> <Link to='/newblog' className='menu-btn text-white border-none py-[6px] px-[12px]  cursor-pointer hover:bg-[#808010] rounded-[50px] no-underline'> New Blog</Link></li>
        </ul>
    </div>

  )
}

export default Nav