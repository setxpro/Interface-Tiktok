import React from 'react';
import Button from '../Button';
import User from '../User';
import RecommendCard from '../RecommendCard';

import * as C from './styles';
import { items, people } from '../../db';

function Suggestions() {
  return (
      <C.Container>
          <C.IconsContainer>
                <C.FacebookIcon/>
                <C.WhatsAppIcon/>
                <C.TwitterIcon/>
                <C.DribbbleIcon/>
          </C.IconsContainer>
          <C.BoxContainer>
            <C.BoxHeader><span>Contas Sugeridas</span></C.BoxHeader>
                <C.ItemContainer>
                    {people.map((person, index) => (
                        <C.Item>
                            <User key={index} name={person.name} avatar={person.avatar} userName={person.userName}/>
                            <C.ButtonContainer>
                                <Button outlined fontSize={14}>Seguir</Button>
                            </C.ButtonContainer>
                        </C.Item>
                    ))}
                </C.ItemContainer>
          </C.BoxContainer>
          <C.BoxContainer>
                <C.BoxHeader><span>Descobrir</span></C.BoxHeader>
                <C.ItemContainer>
                    {items.map((item, indice) => (
                        <C.Item>
                            <RecommendCard key={indice} recommend={item} />
                            <C.ArrowRightIcon/>
                        </C.Item>
                    ))}
                </C.ItemContainer>
          </C.BoxContainer>
          <C.DownloadImage src="https://www.vero.com.br/wp-content/uploads/2017/10/apple-app-store-icon.png"></C.DownloadImage>
          <C.DownloadImage src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png"></C.DownloadImage>
          <C.DownloadImage src="https://exelerus.com/mobiledev/amazon/img/background2.png"></C.DownloadImage>
      </C.Container>
  );
}

export default Suggestions;