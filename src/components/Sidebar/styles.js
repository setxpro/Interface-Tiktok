import styled from 'styled-components';

import { AiFillHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';

export const Container = styled.div`
  width: 250px;
  padding-top: 26px;

  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;

`;
export const MenuItem = styled.div`
    cursor: pointer;
    color: #161823;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 12px;
    box-sizing: border-box;
    height: 60px;

    &:hover {
        background: rgba(22, 24, 35, 0.03);
    }

    > span {
        font-weight: ${(props) => (props.active ? '700' : '400')};
        margin-left: 13px;
        font-size: 24px;
        line-height: 60px;
        color: ${(props) => (props.active ? props.theme.colors.primary : '#000')}
    }
`;
export const Following = styled.div`
    width: 100%;
    padding: 20px 0;
    border-top: 0.5px solid rgba(22, 24, 35, 0.12);
    border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
`;
export const FollowingHeader = styled.div`
    height: 8px;
    padding-left: 1rem;
    padding-bottom: 28px;

    font-weight: 400;
    font-size: 1rem;
    line-height: 22px;
    color: rgba(22, 24, 35, 0.5);
`;
export const InfoContainer = styled.div`
    margin-top: 1rem;
    padding-left: 1rem;
    padding-bottom: 1.5rem;
    width: 15rem;
    box-sizing: border-box;
    color: rgba(22, 24, 35, 0.5);
    font-size: 12px;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
export const Links = styled.div`
    margin-bottom: ${(props) => props.margin ? '8px' : '0px'};
    a {
        cursor: pointer;
        display: inline-block;
        margin-right: 5px;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        color: rgba(22, 24, 35, 0.5) ;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;


// OBS.:

export const FollowingContainerItem = styled.div`
    height: 200px;
    overflow-y: auto;
    padding: 5px 0;
`;


// Icons

export const HomeIcon = styled(AiFillHome)`
    font-size: 1.5rem;
    color: ${(props) => (props.active ? props.theme.colors.primary : '#000')};
`;
export const UsersIcon = styled(FaUserFriends)`
    font-size: 1.5rem;
`;
