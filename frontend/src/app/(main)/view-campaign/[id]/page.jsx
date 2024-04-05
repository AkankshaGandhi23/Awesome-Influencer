import React from 'react'

const ViewCampaign = () => {
  return (
    <div>
        <>
        <div className=" max-w-sm w-full lg:max-w-full lg:flex my-10 ">
  <div
    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l ms-40 text-center overflow-hidden"
    style={{ backgroundImage: 'url("https://img.freepik.com/free-psd/shoes-sale-social-media-post-square-banner-template-design_505751-3120.jpg?size=626&ext=jpg&ga=GA1.1.1698489887.1708000569&semt=ais")' }}
    title="Nike Shoes"
  ></div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none me-10 lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <svg
          className="fill-current text-gray-500 w-3 h-3 mr-2 font-bold"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
        >
          
        </svg>
       <spam className='font-bold text-lg'>Nike</spam> 
      </p>

      <div className="mb-8">
        <span>Product: Shoes</span>        
      </div>

      <div className="text-gray-900 font-bold text-xl mb-2">
      "Step Up Your Game: Nike Shoes - Where Innovation Meets Style"


      </div>
      <p className="text-gray-700 text-base">
      Nike shoes: Cutting-edge design, premium materials,<br></br> and superior performance for athletes and fashion enthusiasts alike.
      </p>
    </div>

    <div className="text-gray-900 font-bold text-xl mb-2">
      Incentive: ₹5000
     </div>
  
     <div className="text-gray-900 font-bold text-xl mb-2">
      Last Date: 20 April 2024
     </div>
  

     </div>
</div>
</>
      </div>  
    
  )
}

export default ViewCampaign ;