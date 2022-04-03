import React, { VFC } from 'react'

export const Introduction: VFC = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">
            Movie
          </h2>
          <div className="max-w-md text-gray-600 lg:text-lg text-center">
            “This is a section of some simple filler text, also known as
            placeholder text.”
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
            <div className="w-12 md:w-40 h-12 md:h-40 bg-gray-100 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                loading="lazy"
                alt="Photo by Radu Florin"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">
                John McCulling
              </div>
              <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                CEO / Datadrift
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
