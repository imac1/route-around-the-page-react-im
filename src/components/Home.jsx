import React from 'react';


const Home = () => {
    return (
        <div>
          <div className='flex flex-col p-8 bg-stone-100'>
            <h1 className="flex flex-row text-5xl w-2/3">
            A powerful solution to grow your startup. Fast!
            </h1>
            <h4 className='text-xl flex w-2/3 mt-4'>Organise, collaborate, and track progress seamlessly with our one-stop-shop startup growth tool.</h4>
            <div className="flex flex-row w-2/3 mt-4 gap-4">
                <button className='bg-sky-400 text-white rounded-md text-sm px-8 py-4 shadow-lg'>Get Started</button>
                <button className='bg-stone-300 text-black rounded-md text-sm px-8 py-4 shadow-lg flex items-center gap-2'><i class="ri-dv-line"></i>Book a demo</button>
            </div>
            <div className="row-container flex flex-row w-full mt-6">
                <div className="card flex flex-row max-w-xl border-2 rounded-lg w-full p-2">
                    {/* firs-column */}
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-3xl">Team Capodopera</h3>
                        <h4>Grow the number of clients and reach the 1000/day sales.</h4>
                        <div className="flex flex-row [&_img]:-mx-1">
                            <img src="https://pbs.twimg.com/profile_images/1668022151717220353/wI5MJYqO_400x400.jpg" alt="" className='w-10 h-10 rounded-full'/>
                            <img src="https://pbs.twimg.com/profile_images/1635526239674060805/84OQA-ht_400x400.jpg" alt="" className='w-10 h-10 rounded-full'/>
                            <img src="https://pbs.twimg.com/profile_images/1573296664818991104/qFtbKs4R_400x400.jpg" alt="" className='w-10 h-10 rounded-full'/>
                        </div>
                    </div>

                </div>

            </div>
          </div>
        </div>
    )
 }
 export default Home;