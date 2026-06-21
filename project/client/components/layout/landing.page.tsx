// import React from 'react'

// const LandingPage = () => {
//   return (
//     <main>
//       <img src={""}/>
//     </main>
//   )
// }

// export default LandingPage

import React from 'react';

const LandingPage = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl">
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src="https://picsum.photos/seed/headphones/400/500"
          alt="Premium wireless headphones"
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Sale
        </span>
      </div>
      <div className="p-5">
        <h5 className="text-xl font-bold tracking-tight text-gray-900">
          Premium Wireless Headphones
        </h5>
        <div className="flex items-center mt-2.5 mb-4">
          <span className="text-yellow-400 text-sm tracking-wide">★★★★★</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-gray-900">$199</span>
            <span className="text-sm text-gray-500 line-through ms-2">$249</span>
          </div>
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;