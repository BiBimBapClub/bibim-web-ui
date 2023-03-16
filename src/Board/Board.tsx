import React from 'react';
import BoardItem from './BoardItem';

interface Post {
  id: number;
  title: string;
  content: string;
  images?: File[];
}
interface BoardProps {
  posts: Post[];
}
const Board: React.FC<BoardProps> = function ({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <BoardItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Board;
