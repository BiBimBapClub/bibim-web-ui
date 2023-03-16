// src/context/PostContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { StudyPost } from '../interfaces/StudyPost';
import { api } from '../services/api';

interface PostContextValue {
  posts: StudyPost[];
  setPosts: React.Dispatch<React.SetStateAction<StudyPost[]>>;
}

const PostContext = createContext<PostContextValue>({
  posts: [],
  setPosts: () => {},
});

export function usePostContext() {
  return useContext(PostContext);
}

interface PostProviderProps {
  children: React.ReactNode;
}

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<StudyPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await api.getPosts();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <PostContext.Provider value={{ posts, setPosts }}>{children}</PostContext.Provider>;
}
