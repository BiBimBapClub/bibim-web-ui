import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../Form/Form';
import { createPost } from '../../services/api';
import { PostType } from '../../services/types';

const BoardWrite: React.FC = function () { 
  const [postId, setPostId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const history = useHistory();

  const handlePostIdChange = (e: React.ChangeEvent<Object>) => {
    setPostId(e.target.toString);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postData: PostType = { postId, title, content };
    const post = await createPost(postData.id, image);
    history.push(`/board/${post.id}`);
  };

  return (
    <div>
      <h2>글쓰기</h2>
      <Form
        title={title}
        content={content}
        image={image}
        onPostIdChange={handlePostIdChange}
        onTitleChange={handleTitleChange}
        onContentChange={handleContentChange}
        onImageChange={handleImageChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default BoardWrite;
