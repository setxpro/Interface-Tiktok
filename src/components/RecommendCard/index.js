import React from 'react';

import * as C from './styles';

function RecommendCard({ recommend }) {
  return (
    <C.Container>
      <C.Avatar src={recommend.avatar} alt="avatar"/>
      <C.Info>
        <a>{recommend.title}</a>
        <span>{recommend.views}</span>
      </C.Info>
    </C.Container>
  );
}

export default RecommendCard;