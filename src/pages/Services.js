import React from 'react';
import serviceData from '../components/Data/serviceData';
import Footer from '../components/Footer';

const Service = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center p-4 bg-richblack-800 min-h-screen">
      {serviceData.map((service) => (
        <div
          key={service.id}
          className="w-full md:w-11/12 lg:w-3/4 xl:w-2/3 flex flex-col md:flex-row justify-center items-center m-4 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex-none w-full md:w-48 relative">
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
            />
          </div>
          <div className="flex-auto p-6">
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">{service.title}</h2>
              <div className="flex items-center mt-2 md:mt-0">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                  Learn More
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-blue-500 cursor-pointer hover:text-blue-600 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 00-5 5c0 2.5 2 5 5 5s5-2.5 5-5a5 5 0 00-5-5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-gray-700 mt-4">{service.description}</p>
          </div>
        </div>

      ))}

      
    </div>
    <Footer></Footer>
    </>
  );
};

export default Service;
