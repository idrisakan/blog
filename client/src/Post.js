import React from 'react'

const Post = () => {
  return (
    <div className="post">
    <div className="image">
      <img
        src="https://techcrunch.com/wp-content/uploads/2024/08/aviron-bike-fit-1.jpg?resize=1280,1035"
        alt=""
      />
    </div>

    <div className="texts">
      <h2>Gamified rower startup Aviron branches out into bikes</h2>
      <p className="info">
        <a className="author">David Paszko</a>
        <time >2024-08-21 14:20</time>
      </p>
      <p className='summary'>
        Call it a reverse Peloton. Toronto-based Aviron, best known for its
        connected rower, has released a stationary bike. The Fit Bike runs
      </p>
    </div>
  </div>
  )
}

export default Post
