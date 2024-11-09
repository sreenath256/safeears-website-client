import React from 'react';
import Navbar from './Navbar';
import { ear2, ear1, ear3 } from "../../assets";

const ProdList = [
  {
    name: `SE-Black RIGHT`,
    price: `1299`,
    prodimage: ear1,
  },
  {
    name: `SE-Grey RIGHT`,
    price: `1299`,
    prodimage: ear3,

  },
  {
    name: `SE-Beige RIGHT`,
    price: `1299`,
    prodimage: ear2,

  },
]

const Products = () => {
  return (
    <div>
       <Navbar/>
        {/*  */}
        <div className='w-11/12 mx-auto py-10 flex flex-col gap-10'>
            {/* Add product */}
            <div>
                <h2 className='text-4xl font-semibold uppercase text-main'>Add Products</h2>
                <form className='pt-5 capitalize grid grid-cols-1 gap-5 xl:w-1/2'>
                    <div className='flex flex-col gap-1'>
                      <label>Product Images</label>
                      <input type="file" multiple class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-main
                        hover:file:bg-violet-100
                      "/>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label>Product name</label>
                      <input className='p-2 outline-1 outline-white outline rounded-sm focus:outline-1 focus:outline-main' type="text" />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label>Quantity</label>
                      <input className='p-2 outline-1 outline-white outline rounded-sm focus:outline-1 focus:outline-main' type="text" />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label>Colors</label>
                      <input className='p-2 outline-1 outline-white outline rounded-sm focus:outline-1 focus:outline-main' type="text" />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label>Price</label>
                      <input className='p-2 outline-1 outline-white outline rounded-sm focus:outline-1 focus:outline-main' type="text" />
                    </div>
                    <button className='bg-main hover:bg-yellow-600 duration-200 w-fit h-10 text-white px-5 text-base rounded-sm'>Add Products</button>
                </form>
            </div>
            <hr />
            {/* Product list */}
            <div className='flex flex-col gap-10 '>
                <h3 className='text-4xl font-semibold uppercase text-main'>All Products</h3>
                {ProdList?.map((prod,i)=>(
                  <>
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-5 border-b border-main pb-5 last:border-none' key={i}>
                      <h3>{prod.name}</h3>
                      <img className='bg-white h-20' src={prod.prodimage} alt="" />
                      <div className='flex gap-5 text-sm items-center text-black'>
                        <button className='bg-white hover:bg-gray-200 rounded-full px-3 py-1'>Edit</button>
                        <button className='bg-white hover:bg-gray-200 rounded-full px-3 py-1'>Delete</button>
                      </div>
                    </div>
                  </>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products