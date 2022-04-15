import axios from 'axios';
import { useEffect, useState } from 'react';
import User from '../User';
import * as C from './styles';

function Sidebar() {

    const [name, setUserName] = useState('');
    const [login, setUserLogin] = useState('');
    const [avatar, setUserAvatar] = useState('');

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://api.github.com/users/timer')
            setUserName(data.name);
            setUserLogin(data.login);
            setUserAvatar(data.avatar_url);
        })()
    }, [])

    return (
        <C.Container>
            <C.MenuItem active>
                <C.HomeIcon active/> <span>Para você</span>
            </C.MenuItem>
            <C.MenuItem>
                <C.UsersIcon/><span>Seguindo</span>
            </C.MenuItem>
            <C.Following>
                <C.FollowingHeader>Suas principais contas</C.FollowingHeader>
                <C.FollowingContainerItem>
                    <User 
                        name={name}
                        userName={login}
                        avatar={avatar}
                    />
                    <User 
                        name={name}
                        userName={login}
                        avatar={avatar}
                    />
                    <User 
                        name={name}
                        userName={login}
                        avatar={avatar}
                    />
                    <User 
                        name={name}
                        userName={login}
                        avatar={avatar}
                    />
                    <User 
                        name={name}
                        userName={login}
                        avatar={avatar}
                    />
                    <User 
                        name={name}
                        userName={login}
                        avatar={avatar}
                    />
                    <User 
                        name={name}
                        userName={login}
                        avatar={avatar}
                    />
                    <User 
                        name={name}
                        userName={login}
                        avatar={avatar}
                    />
                    <User 
                        name={name}
                        userName={login}
                        avatar={avatar}
                    />
                </C.FollowingContainerItem>
            </C.Following>
            <C.InfoContainer> 
                <C.Links margin>
                    <a href=''>Início</a>
                    <a href=''>Sobre</a>
                    <a href=''>Sala de imprensa</a>
                    <a href=''>Carreira</a>
                    <a href=''>ByteDance</a>
                </C.Links>
                <C.Links>
                    <a href="">Ajuda</a>
                    <a href="">Segurança</a>
                </C.Links>
                <C.Links >
                    <a href="">Diretrizes da comunidade</a>
                    <a href="">Termos</a>
                </C.Links>
                <C.Links margin>
                    <a href="">Privacidade</a>
                </C.Links>
                <C.Links margin>
                © 2022 TikTok
                </C.Links>
            </C.InfoContainer>
        </C.Container>
    )
}

export default Sidebar;