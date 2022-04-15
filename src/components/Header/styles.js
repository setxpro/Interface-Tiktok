import styled from 'styled-components';
import { TiCloudStorage } from 'react-icons/ti';


export const Container = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #FFF;
    border-bottom: 1px solid rgba(34, 90, 89, 2.0);
    z-index: 1000;
`;
export const Content = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;
export const LogoContainer = styled.div`
    display: block;
`;
export const Logo = styled.img`
    width: 97px;
    margin-left: 4px;
    position: relative;
    top: -2px;
`;
export const LogoIcon = styled.img`
    width: 28px;
`;
export const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const Icon = styled(TiCloudStorage)`
    font-size: 50px;
    cursor: pointer;
    transition: all 1s ease;
    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }
`;
export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 30px;

    flex: 0 0 40px;
    position: relative;
    cursor: pointer;
    border-radius: 50%;
  
`;




