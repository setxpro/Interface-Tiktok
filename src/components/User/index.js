import React from 'react';

import * as C from './styles';

function User(user) {
  return (
    <C.Container>
      <C.Avatar src={user.avatar} alt="avatar"/>
      <C.Info>
        <C.ContainerAvatarVerify>
          <a>{user.name}</a> {user.followers >=100000 ? <img src="https://cdn.discordapp.com/emojis/719656773400789108.webp?size=96&quality=lossless" alt='verify'/> : ''}
            
          </C.ContainerAvatarVerify>
        <span>{user.userName}</span>
      </C.Info>
    </C.Container>
  );
}

export default User;