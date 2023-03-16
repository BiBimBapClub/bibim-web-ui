import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

test('renders board component with posts', () => {
  const posts = [
    { id: 1, title: 'Post 1', content: 'Content 1' },
    { id: 2, title: 'Post 2', content: 'Content 2', images: [new File(['image1'], 'image1.png')] },
  ];
  const { getByText, getAllByAltText } = render(<Board posts={posts} />);
  expect(getByText('Post 1')).toBeInTheDocument();
  expect(getByText('Content 1')).toBeInTheDocument();
  expect(getByText('Post 2')).toBeInTheDocument();
  expect(getByText('Content 2')).toBeInTheDocument();
  expect(getAllByAltText('post2-img0')).toHaveLength(1);
});