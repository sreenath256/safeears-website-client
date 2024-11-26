import React from 'react'

const Dashboard = () => {
  return (
    <section className='h-full w-full'>
        <h1 className='text-2xl font-semibold'>Dashbaord</h1>
        <p className=''>Welcome to the SafeEars Admin Panel!</p>
        {/* demo */}
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mt-10 gap-5 text-black font-medium'>
          <div className='bg-main  h-40 grid place-items-center rounded-2xl capitalize text-center text-xl shadow-lg'>
            total Products : 100
          </div>
          <div className='bg-main h-40 grid place-items-center rounded-2xl capitalize text-center text-xl shadow-lg'>
            total orders : 100
          </div>
        </div>
    </section>
  )
}

export default Dashboard