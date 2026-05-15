import React from 'react'

import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1778510093549-d20b562fad34?q=80&w=687&auto=format&fit=crop',
      intro:'This is a random text', 
      tag: 'Satisfied'
    },
    {
      img: "https://images.unsplash.com/photo-1778483154281-70a8fa019871?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      intro:"This is a second random text", 
      tag: "Undersatisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1776363981145-98984c6fd2e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"This is a third random text", 
      tag: "Very satisfied"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1681234561770-b17bf06d149b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"This is a third random text", 
      tag: "Very satisfied"
    }
  ]

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
