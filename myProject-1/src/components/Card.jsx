import React from 'react'

const Card = (props) => {
  return (
    <div className="parent">
      <div className="top">
        <img src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg" alt={`${props.company}-logo`} />
          <button type="button">
            Save
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQgLlXjNtqbrFvWy8_mtjJgGMZTUoD-1lww&s"  />
          </button>
      </div>
      <div className="center">
        <h4>{props.company}<small>5 days ago</small></h4>
        <h3>{props.design}</h3>
        <div className="tags">
          <h5>Part-Time</h5>
          <h5>Senior Level</h5>
        </div>
      </div>
      <div className="bottom">
        <div className="price">
          <h3>{props.salary}</h3>
          <small>{props.location}</small>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  )
}

export default Card
