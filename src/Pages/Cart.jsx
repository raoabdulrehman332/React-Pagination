import React, { useContext, useState } from 'react'
import { CardContext } from '../Context/CardContext'
import { Button, Image } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { MinusOutlined } from '@ant-design/icons';
// import { Color } from 'antd/es/color-picker';

export default function Cart() {

  // const [Total , setTotal] = useState('')

  const { cardItem , isItem ,  addquntity ,removItem} = useContext(CardContext)
  console.log('cardItem===>', cardItem);
  // console.log('cardItem quantity===>', cardItem[1].quantity);
  
  
  // setTotal(cardItem.map(data => {
  //   data.quantity
  // }))
  const TotalAmount = cardItem.reduce((total , obj)=> total + obj.quantity * obj.price , 0)
  const TotalQuantity = cardItem.reduce((total , obj)=> total + obj.quantity  , 0)
  return (
    <>
    {
      isItem ? 
      <div className='flex gap-5 w-full '>
        <div className='flex-grow flex flex-col border p-4 justify-center items-center rounded hover:scale-105 transition-all hover:border-blue-400 '>
          <h2 className='text-xl font-semibold  text-blue-500'>Total Quantity</h2>
          <h2 className='text-3xl font-semibold text-gray-500'>{TotalQuantity}</h2>
        </div>
        <div className='flex-grow flex flex-col border p-4 justify-center items-center rounded hover:scale-105 transition-all hover:border-blue-400'>
          <h2 className='text-xl font-semibold text-blue-500'>Total Amount</h2>
          <h2 className='text-3xl font-semibold '><span className=' font-bold text-green-500'>$</span> <span className='text-gray-500'>{Math.floor(TotalAmount)}</span></h2>
        </div>
        <div className='cursor-pointer flex-grow flex flex-col border p-4 justify-center items-center rounded hover:scale-105 transition-all hover:border-blue-400'>
          <h2 className='text-xl font-semibold  text-blue-500'>Check Out</h2>
        </div>
      </div>
      :
      <h1 className='w-full font-semibold text-xl text-red-600 flex items-center justify-center'> card not added yet</h1>
    }
      {
        cardItem.map( data => 
        <div className='flex gap-1 w-full h-50 border shadow my-4 items-center rounded py-3 hover:scale-105 hover:border-blue-300 transition-all'>
          <div className='w-1/3 flex justify-center'>
          <Image preview={false} width={200} height={200} src={data.thumbnail}  /> 
          </div>
          <div className='flex flex-col w-full justify-center my-2 gap-1'>
          <h2 className="text-sm title-font text-gray-500 ">
          {data.brand}
        </h2>
        <h1 className="text-gray-900 text-lg title-font font-medium mb-1">
          {data.category}
        </h1>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {data.title}
        </h1>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          <span className=' font-bold text-green-500'>$</span><span className='text-gray-500'>{data.price}</span> 
        </h1>
        <div className='w-full '>
          <div className=' flex gap-2  my-2 py-2'>
          <Button className='bg-green-500'  onClick={()=>{
            addquntity(data , 'plus')
          }}
          title='Plus Quantity'>
            <PlusOutlined className='font-green-200' />
          </Button>
          <h1 className='text-xl font-semibold mx-2'>
          <span className='text-gray-500'>{data.quantity}</span>
          </h1>
          <Button className='bg-red-500'
          disabled={data.quantity <= 1}
          title={data.quantity <= 1 ? 'If You Want to Item Quantity Less then 1 Please Remove Item' : "Minus Quantity"}
          onClick={()=>{
            addquntity(data , 'minus')
          }} >
            <MinusOutlined />
          </Button>
          </div>
          <div className='w-full'>
            <Button className='px-10' danger
            onClick={()=> removItem(data.id)}>
              Remove Item 
            </Button>
          </div>
        </div>
          </div>
        </div>)
      }
    </>
  )
}
