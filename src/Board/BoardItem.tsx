import React from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
    images?: File[];
  }
interface BoardItemProps {
  post: Post;
}

const BoardItem: React.FC<BoardItemProps> = function({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.images &&
        post.images.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt={`post${post.id}-img${index}`} />
        ))}
    </div>
  );
};

export default BoardItem;
