// import { Button  } from 'antd/es/radio'
import { Button, Flex, Image } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { Spin } from "antd";
import { Pagination } from "antd";
import { AntDesignOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from "antd";
import { Link } from 'react-router-dom';
import { CardContext } from '../Context/CardContext';

export default function Products() {

  const {cardItem , addCardItem , isItem} = useContext(CardContext)
// console.log("cardItem===>", cardItem);

    const [Product , setProduct] = useState([])
    const [Limit , setLimit] = useState(20)
    const [Skip , setskip] = useState(0)
    const [Total , setTotal] = useState(0)
    const [loding , setLoding] = useState(false)

    useEffect(()=>{
      setLoding(true)
      
      fetch(`https://dummyjson.com/products?limit=${Limit}&skip=${Skip}`)
      .then(res => res.json())
      .then(data => {
        // console.log("res==>", data);
        setProduct(data.products)
        setTotal(data.total)
        setLoding(false)
      } )
    },[Limit , Skip])

    console.log('Product==> ', Product);
    

// <-----------Pagination on Scroll-------------->
    // useEffect(()=>{
    //   window.addEventListener('scroll', (e)=>{
    //     if(Math.round(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight){
    //       setLimit(Limit + 5)
    //     }     
    //   })
    // },[Limit])

    // console.log("product lenght", Limit);
    
  return (
    <>

        {/* <div className='flex items-end justify-end  my-2 p-2 max-w-full'>
          <Link to={'/cart'}>        
          <Badge count={cardItem.length}>
            <ShoppingCartOutlined style={{fontSize:40}} />
          </Badge>
          </Link>
        </div> */}
    {
      loding 
      ? 
      <>
          <div className='flex items-center justify-center w-full h-96'>
          <Spin  size='large' />  
          </div>
      </>
    :
   
      <div className='grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1  my-10 '>
       {Product.map(data =>
          <div key={data.id} className='border shadow flex flex-col items-center m-2 rounded hover:scale-105 hover:border-blue-300 transition-all'>
            <Image width={200} preview={false}  src={data.thumbnail} alt="img" /> 
            <div className='p-2 flex flex-col justify-between w-full'>
              <h1 className='font-semibold'>
              Title: {data.title}
              </h1>
            <div className='w-full flex items-start'>
            <span class="flex items-center"><svg fill="yellow" stroke="yellow" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg fill="yellow" stroke="yellow" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg fill="yellow" stroke="yellow" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg fill="yellow" stroke="yellow" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><svg fill="none" stroke="yellow" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><span class="text-gray-600 ml-3">{data.reviews[2].rating} Reviews</span></span>
            </div>
              <h1 className='font-semibold'>
                Price: ${data.price}
              </h1>
            </div>
            

            <div className='p-2 m-2 flex justify-evenly w-full'>
              <Link to={`/product/${data.id}`}>
              <Button
              className="flex ml-auto font-semibold text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded  from-inherit"
              icon={<AntDesignOutlined />}> 
               Viwe Card
               </Button>
              
              </Link>
            </div>

          </div>
          
        )
      }
     
      </div>
    }
   <div className='w-full flex  justify-center'>
     <Pagination defaultCurrent={1} total={Total} pageSize={Limit} onChange={(num)=>  {setskip((num - 1) * Limit) }}
      onShowSizeChange={(current,size)=>{setLimit(size)}} />
   </div>
     </>

)
  }
