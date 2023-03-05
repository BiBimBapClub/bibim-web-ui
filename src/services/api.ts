import { StudyPost } from '../interfaces/StudyPost';

const API_BASE_URL = 'http://localhost:8080/api';

async function getPosts(): Promise<StudyPost[]> {
  const response = await fetch(`${API_BASE_URL}/posts`);
  const posts = await response.json();
  return posts;
}

async function createPost(post: StudyPost): Promise<StudyPost> {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  const createdPost = await response.json();
  return createdPost;
}

// eslint-disable-next-line import/prefer-default-export
export const api = { getPosts, createPost };
