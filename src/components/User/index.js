import React from 'react';

import * as C from './styles';

function User(user) {
  return (
    <C.Container>
      <C.Avatar src={user.avatar} alt="avatar"/>
      <C.Info>
        <a>{user.name}</a>
        <span>{user.userName}</span>
      </C.Info>
    </C.Container>
  );
}

export default User;