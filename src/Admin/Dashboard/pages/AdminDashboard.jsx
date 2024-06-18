import React from 'react'
import { AdminHeader } from '../../components/AdminHeader'

export const AdminDashboard = () => {
  return (
    <section className='h-[100vh] flex flex-col'>
      <header>
      <AdminHeader title='Dashboard' />
      </header>
      <main className='w-full h-fit flex-grow flex flex-col bg-gray-200 gap-4'>
          <div className="h-[17%] p-3 flex flex-col bg-white rounded-lg mx-3 mt-3 ">
            <h1>Overview</h1>
            <div className='flex justify-between items-center flex-grow'>
              <div className='w-[23%] flex place-items-end gap-3'>
                <div>
                <h4>Today&apos;s</h4>
                <h3>Courts reserved</h3>
                </div>
                <h2>23</h2>
              </div>
              <div className='w-[23%] flex place-items-end gap-3'>
                <div>
                <h4>Today&apos;s</h4>
                <h3>Courts reserved</h3>
                </div>
                <h2>23</h2>
              </div>
              <div className='w-[23%] flex place-items-end gap-3'>
                <div>
                <h4>Today&apos;s</h4>
                <h3>Courts reserved</h3>
                </div>
                <h2>23</h2>
              </div>
              <div className='w-[23%] flex place-items-end gap-3'>
                <div>
                <h4>Today&apos;s</h4>
                <h3>Courts reserved</h3>
                </div>
                <h2>23</h2>
              </div>
            </div>

          </div>

          <div className="h-[27%] bg-white rounded-lg mx-3 flex flex-col p-3">
            <h1>Court revenue</h1>
            <div className='flex flex-grow justify-between items-center gap-4'>

            <div className='w-[23%] border border-black rounded-lg'>
              <h3>Titulo h3</h3>
              <h2>Titulo h2</h2>
              <strong>Texto strong</strong>
            </div>

            <div className='w-[23%] border border-black rounded-lg'>
              <h3>Titulo h3</h3>
              <h2>Titulo h2</h2>
              <strong>Texto strong</strong>
            </div>

            <div className='w-[23%] border border-black rounded-lg'>
              <h3>Titulo h3</h3>
              <h2>Titulo h2</h2>
              <strong>Texto strong</strong>
            </div>

            <div className='w-[23%] border border-black rounded-lg'>
              <h3>Titulo h3</h3>
              <h2>Titulo h2</h2>
              <strong>Texto strong</strong>
            </div>

            </div>
          </div>

          <div className="h-[47%] flex bg-white rounded-lg mx-3">
          </div>
      </main>
    </section>
  )
}
