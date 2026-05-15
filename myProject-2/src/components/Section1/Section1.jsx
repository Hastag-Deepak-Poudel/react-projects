import React from 'react'
import Navbar from './Navbar'
import LeftPart from './LeftPart'
import RightPart from './RightPart'

const Section1 = (props) => {
  return (
    <div>
      <Navbar />
      <div className='flex h-fulljustify-between gap-10'>
      <LeftPart />
      <RightPart users={props.users} />
      </div>
    </div>
  )
}

export default Section1
