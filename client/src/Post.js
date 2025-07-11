import React from 'react';

const Post = ({ imageSrc, title, author, date, summary }) => {
  return (
    <div className="post" style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
      <div className="image">
        <img src={imageSrc} alt={title} style={{ maxWidth: '100%' }} />
      </div>

      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">{author}</a> | <time>{date}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
