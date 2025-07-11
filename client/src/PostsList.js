import React from 'react';
import Post from './Post';

const postsData = [
  {
    imageSrc: "https://techcrunch.com/wp-content/uploads/2024/08/aviron-bike-fit-1.jpg?resize=1280,1035",
    title: "Gamified rower startup Aviron branches out into bikes",
    author: "David Paszko",
    date: "2024-08-21 14:20",
    summary: "Call it a reverse Peloton. Toronto-based Aviron, best known for its connected rower, has released a stationary bike. The Fit Bike runs",
  },
  {
    imageSrc: "https://via.placeholder.com/400x200",
    title: "Another post title",
    author: "Jane Doe",
    date: "2025-07-11 10:00",
    summary: "Summary of the second post.",
  },
];

const PostsList = () => {
  return (
    <div>
      {postsData.map((post, index) => (
        <Post
          key={index}
          imageSrc={post.imageSrc}
          title={post.title}
          author={post.author}
          date={post.date}
          summary={post.summary}
        />
      ))}
    </div>
  );
};

export default PostsList;
