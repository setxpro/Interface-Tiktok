import React from 'react';

import * as C from './styles';

function User(props) {
  return (
    <C.Container>
      <C.Avatar src={props.avatar} alt="avatar"/>
      <C.Info>
        <a>{props.name}</a>
        <span>{props.userName}</span>
      </C.Info>
    </C.Container>
  );
}

export default User;