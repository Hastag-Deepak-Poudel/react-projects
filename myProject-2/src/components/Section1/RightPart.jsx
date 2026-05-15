import React from 'react'

const RightPart = (props) => {
  return (
    <div className='h-170 w-2/3 me-10 flex gap-10 overflow-x-auto' id='myscroll'>

      {props.users.map((elem, index) => (
        <div
          key={index}
          className="relative h-full w-90 rounded-4xl overflow-hidden shrink-0">

          <img
            className='w-full h-full object-cover'
            src={elem.img}
            alt=""
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/30">

            {/* shape */}
            <div className='absolute top-8 left-8 h-10 w-10 bg-amber-50 rounded-3xl z-10 flex justify-center items-center font-bold'>
              {index + 1}
            </div>

            {/* text */}
            <p className='absolute bottom-30 left-8 w-[80%] text-white z-10 px-2 py-10'>
              {elem.intro}
            </p>

            {/* button */}
            <button className="absolute left-10 bottom-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded-2xl">
              Button
            </button>

          </div>

        </div>
      ))}

    </div>
  )
}

export default RightPart
