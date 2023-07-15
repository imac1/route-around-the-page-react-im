import React from 'react'
 
 
 const AboutUs = () => {
    return (
        <div>
			<div className="flex p-8 bg-stone-100 items-center justify-center">
				<div className="wrapper max-w-xl flex items-end gap-6">
				<div class="small-card-1 flex flex-col bg-stone-200 rounded-lg  items-center space-y-6 p-6 ">
					<h1 class=" text-4xl">Simple</h1>
                    <p className='text-center'>Keep track of your contacts, gain valuable insights, analyse live data and performance metrics.</p>
					<div>
						<h3 class="font-bolder text-xl flex items-center ">Free<span class="text-xs flex"><span className='mt-1'>*</span><span className='mt-1'>No credit card required</span> </span></h3>
						<div className=' border-b-stone-300 border-b-2 h-1 mt-6'></div>
						
					</div>
					<ul class="text-sm [&_li]:flex [&_li]:items-center space-y-2">
						<li><span class="material-symbols-outlined">
check
</span>Real-time monitoring</li>
						<li><span class="material-symbols-outlined">
check
</span>Track key performance indicators</li>
						<li><span class="material-symbols-outlined">
check
</span>Schedule appointments</li>
<li><span class="material-symbols-outlined">
check
</span>Organize, delegate and keep track of tasks</li>
					</ul>

					<button class=" border border-sky-600 p-2 text-sky-600 hover:text-white hover:bg-sky-500 rounded-md w-2/3">
						Start now
					</button>
				</div>
				<div class="small-card-2  flex flex-col w-2/3 p-4 space-y-12 max-sm:p-2 bg-stone-900 text-white rounded-lg p-12 items-center">
					<h1 class="font-bold text-xl">Pro</h1>
					<div>
						<h3 class="font-bolder text-xl">19$ / month</h3>
						<p class="text-sm">10.000 monthly visitors</p>
					</div>
					<ul class=" text-sm [&_li]:flex [&_li]:items-center">
						<li><span class="material-symbols-outlined">
check
</span>Unlimited reports</li>
						<li><span class="material-symbols-outlined">
check
</span>15 days trial</li>
						<li><span class="material-symbols-outlined">
check
</span>Data storage for 3 years</li>
					</ul>
					<button class="bg-sky-500 p-2 border-sky-500 rounded-md text-white hover:text-sky-500 hover:bg-stone-100 w-2/3">
						Try it
					</button>
				</div>

				</div>
			
			</div>
		</div>
    )
 }
 export default AboutUs
 