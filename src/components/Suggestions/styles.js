import styled from 'styled-components';

import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsDribbble } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';

export const Container = styled.div`
    flex: 0 0 330px;
    width: 330px;
    margin-left: 24px;

    @media (max-width: 1200px) {
        display: none;
    }
`;
export const IconsContainer = styled.div`
    margin-bottom: 39px;
    display: flex;
    gap: 1rem;
`;
export const BoxContainer = styled.div`
    position: relative;
    border: 1px solid rgba(22, 24, 35, 0.12);
    border-radius: 8px;
    height: 380px;
    display: flex;
    flex-direction: column;
    margin-bottom: 55px;
`;
export const BoxHeader = styled.div`
    margin-bottom: 1rem;
    margin-top: 10px;
    margin-left: 1rem;
`;
export const ItemContainer = styled.div`
    height: calc(100% - 72px);
    overflow: auto;
    cursor: pointer;
    padding: 10px;
`;
export const Item = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;




export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;
export const InfoName = styled.a`
    font-weight: 600;
    font-size: 17px;
    color: rgba(22, 24, 35, 0.5);
`;
export const InfoUserName = styled.span`
    font-weight: 400;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`;
export const DownloadImage = styled.div`
    width: 170px;
    height: 50px;
    border-radius: 5px;
    margin-bottom: 12px;
`;
export const ButtonContainer = styled.div`
    width: 95px;
    height: 28px;
    font-weight: 600;
    font-size: 16px;
    margin-left: auto;
`;


export const FacebookIcon = styled(BsFacebook)`
    color: #44dd;
    font-size: 1.5rem;
`;
export const ArrowRightIcon = styled(IoIosArrowForward)`
    font-size: 22px;
    border-radius: 5px;
    margin-bottom: 12px;
`;
export const InstagramIcon = styled(BsInstagram)`
   color: purple;     
   font-size: 1.5rem;
`;
export const WhatsAppIcon = styled(BsWhatsapp)`
    color: #0f0;
    font-size: 1.5rem;
`;
export const TwitterIcon = styled(BsTwitter)`
    color: #0ff;
    font-size: 1.5rem;
`;
export const DribbbleIcon = styled(BsDribbble)`
    color: orange;
    font-size: 1.5rem;
`;
