import { ShoppingCartOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button } from 'antd'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CardContext } from '../Context/CardContext'
// import { auth } from '../Utils/firebase'

export default function Header() {
  const { cardItem } = useContext(CardContext)
  const [islogin , setislogin] = useState(false)
  // console.log('auth==>', auth);
  
  return (
   <>
   <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl"><span className='text-2xl font-semibold '>Rao Abdul Rehman Store</span></span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to={'/'} className="mr-5 hover:text-blue-400">Home</Link>
      <Link className="mr-5 hover:text-blue-400 ">About</Link>
      <Link className="mr-5 hover:text-blue-400 ">Contact Us</Link>
    </nav>
    
    <div className='p-4 flex justify-between w-1/6'>
    <Button>
      Log in
    </Button>
    <Button type="primary">
      Sign up
    </Button>
    </div>
    {
      islogin &&
      <Avatar /> 
    }
    <div className='flex items-end justify-end  my-2 p-2 hover:scale-105 transition-all '>
          <Link to={'/cart'}>        
          <Badge count={cardItem.length}>
            <ShoppingCartOutlined style={{fontSize:40}} />
          </Badge>
          </Link>
        </div>
  </div>
</header>

   </>
  )
}
