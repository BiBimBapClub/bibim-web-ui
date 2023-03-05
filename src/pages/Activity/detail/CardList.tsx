import React from 'react';
// import { Post } from '../../../interfaces/Post';
import { usePostContext } from '../../../context/StudyPostContext';
import ContentBox from '../../../components/common/ContentBox';

export default function CardList() {
  const { posts } = usePostContext();

  if (!posts.length) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <ContentBox
          onClick={() => { console.log(1); }}
          title="종만북 알고리즘 스터디"
          imgsrc="../../components/common/image/bibim_logo.png"
          week="1주차"
          leader="조윤혁"
          year="2022"
          language={['python', 'C++', 'JAVA']}
        >
          <li key={post.id}>
            <h3>{post.groupName}</h3>
            <p>{post.gitURL}</p>
            <p>{post.blogURL}</p>
            <small>{`팀리더: ${post.leader} 팀원: ${post.members}`}</small>
            <small>{post.tags}</small>
          </li>
        </ContentBox>
      ))}
    </ul>
  );
}
