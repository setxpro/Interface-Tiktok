import React, { useRef, useState } from 'react';
import Button from '../Button';

import * as C from './styles';

function PostCard({post}) {

  const videoRef = useRef();

  const [running, setRunning] = useState(false);

  const toggleAction = () => {
    if (videoRef?.current != null) {
        if (!running) videoRef.current.play();
        else videoRef.current.pause();

        setRunning(!running);
    }
  }

  return (
    <C.Container>
      <C.Header>
          <C.PersonContainer>
            <C.Avatar src={post?.author?.avatar}></C.Avatar>
                <C.Info>
                    <C.Author>
                        {post?.author?.userName}
                        <span>{post?.author?.name}</span>
                    </C.Author>
                    <C.Description>
                      <span>{post?.description}</span>
                      {post?.tags.map((tag, indice) => (
                        <C.Tag key={indice}>{tag.title}</C.Tag>
                      ))}
                    </C.Description>
                </C.Info>
          </C.PersonContainer>
          <C.ButtonContainer>
             <Button fontSize={14} outlined>Seguir</Button>
          </C.ButtonContainer>
      </C.Header> 

      <C.Content>
            <C.Song>
            <C.MusicIcon/>
              <a>{post?.songName}</a>
            </C.Song>
            <C.VideoContainer>
              <C.Video 
              ref={videoRef}
                  src={post?.videoUrl}
                  webkit-playsinline='true'
                  playsinline=''
                  loop='true'
                  preload='metadata'
                ></C.Video>
            <C.ActionsContainer onClick={toggleAction}>
                {running ? <C.PauseIcon/> : <C.PlayIcon/>}
            </C.ActionsContainer>
          </C.VideoContainer>
      </C.Content>
        <C.Action>
          <C.Actions>
            <C.HeartIcon/>
            <a>{post?.likes}</a>
          </C.Actions>
          <C.Actions>
          <C.CommentIcon/>
          <a>{post?.comments}</a>
          </C.Actions>
          <C.Actions>
            <C.ShareIcon/>
            <a>{post?.replices}</a>
          </C.Actions>
        </C.Action>
    </C.Container>
  );
}

export default PostCard;