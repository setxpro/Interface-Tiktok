import axios from 'axios';
import { useEffect, useState } from 'react';
import * as C from './styles';

function Header() {

    const [dataGithub, setDataGithub] = useState();

    useEffect(() => {
        (async() => {
            const { data } = await axios.get('https://api.github.com/users/setxpro');
            setDataGithub(data.avatar_url);
        })()
    }, [])

    return (
        <C.Container>
            <C.Content>
                <C.LogoContainer>
                    <C.LogoIcon src="https://pngshare.com/wp-content/uploads/2021/05/Tik-Tok-Dancing-15.png"></C.LogoIcon>
                    <C.Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Tiktok_logo_text.svg/2560px-Tiktok_logo_text.svg.png"></C.Logo>
                </C.LogoContainer> 
                <C.OptionsContainer>
                    <C.Icon></C.Icon>
                    <C.Avatar src={dataGithub} alt="avatar"></C.Avatar>
                </C.OptionsContainer>
            </C.Content>
        </C.Container>
    )
}

export default Header;