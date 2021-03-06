import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 45px;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;
export const Avatar = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-right: 12px;
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;

    > a {
        font-weight: 600;
        font-size: 17px;

        &:hover {
            text-decoration: underline;
        }
    }

    > span {
        font-weight: 400;
        font-size: 14px;

        color: rgba(22, 24, 35, 0.5);
    }
`;

export const ContainerAvatarVerify = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
        width: 20px;
        height: 20px;
    }
`;