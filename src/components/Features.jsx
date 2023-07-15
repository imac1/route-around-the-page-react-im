import React from "react";

const Features = () => {
    return (
        <div>
          <div className='flex flex-col p-8 bg-stone-900 items-center'>
          <h2 className="flex flex-row text-4xl w-2/3 text-white text-center">
            See how it works and let's get started in less than 2 minutes
            </h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YUDTlS6Qzbs" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="mt-6"></iframe>
          </div>
        </div>
    )
}
export default Features