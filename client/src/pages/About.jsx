import React from 'react'

export default function About() {
  return (
    <div className="relative py-20 px-4 max-w-6xl mx-auto bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-20 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold mb-6 text-slate-800 text-center tracking-wide">
          About <span className="text-blue-600">Real Estate</span>
        </h1>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Real Estate is a premier agency dedicated to helping clients buy, sell, and rent properties in prime locations. Our experienced team is committed to delivering outstanding service, making the real estate journey seamless and enjoyable.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">Our Mission</h2>
            <p className="text-gray-700">
              We aim to assist our clients in reaching their real estate goals by offering expert advice, personalized services, and a deep understanding of the local market. Whether buying, selling, or renting, we're with you every step of the way.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">Why Choose Us?</h2>
            <p className="text-gray-700">
              With years of industry experience, our agents provide unparalleled market insights and customer service. We believe that real estate should be both exciting and rewarding, and we’re here to make it happen for you.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">Expert Team</h2>
            <p className="text-gray-700">
              Our team of dedicated agents boasts vast industry knowledge, ensuring that you receive the highest level of service. Your satisfaction is our priority, and we're committed to making your real estate experience exceptional.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
