import axios from 'axios';
import { BoardType, BoardListType, PostType } from './types';

const BASE_URL = 'http://localhost:8080/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getBoardList = function () {
  return axiosInstance.get('/board');
};

export const getBoardDetail = function (id: number) {
  return axiosInstance.get(`/board/${id}`);
};

export const createBoard = function (data: any) {
  return axiosInstance.post('/board', data);
};

export const updateBoard = function (id: number, data: any) {
  return axiosInstance.put(`/board/${id}`, data);
};

export const deleteBoard = function (id: number) {
  return axiosInstance.delete(`/board/${id}`);
};
export const fetchBoardList = async (): Promise<BoardListType> => {
  const response = await axios.get(`${BASE_URL}/boards`);
  return response.data;
};

export const fetchBoard = async (id: number): Promise<BoardType> => {
  const response = await axios.get(`${BASE_URL}/boards/${id}`);
  return response.data;
};

export const createPost = async (
  boardId: number,
  post: PostType,
): Promise<PostType> => {
  const response = await axios.post(`${BASE_URL}/boards/${boardId}/posts`, post);
  return response.data;
};

export const updatePost = async (boardId: number,
  postId: number,
  post: PostType,
): Promise<PostType> => {
  const response = await axios.patch(`${BASE_URL}/boards/${boardId}/posts/${postId}`, post);
  return response.data;
};

export const deletePost = async (boardId: number, postId: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/boards/${boardId}/posts/${postId}`);
};
