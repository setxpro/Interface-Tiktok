import React from 'react';
import PostCard from '../PostCard';

import * as C from './styles';

function Feed({ posts }) {
  return (
      <C.Container>
          {posts.map((post, indice) => (
              <PostCard
                key={indice}
                post={post}
              />
          ))}
      </C.Container>
  );
}



export default Feed;