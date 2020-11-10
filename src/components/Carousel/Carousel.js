import React from 'react';
import styled, { css } from 'styled-components';

import Button from '../Button/Button';

const Container = styled.div`
  display: flex;
  clear: both;
  flex-direction: row;
  overflow: auto;
  white-space: nowrap;
`;

const TeamsContainer = styled.div`
${({ platform }) =>
  platform === 'teams' &&
  css`
    padding: 10px;
    background: #eee;
    border: 1px solid #C4C4C4;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
  `}
`;

const Message = styled.div`
  display: inline-block;
  clear: both;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  float: left;
  font-size: 14px;
  max-width: 30%;
  min-width: 18rem;
  margin: 1px;
  font-size: 14px;
  border-radius: 30px;
  background: #fff;
  border: 1px solid #eee;
  border-bottom-left-radius: ${({ button }) => button ? "5px" : null};

  ${({ platform }) =>
    platform === 'teams' &&
    css`
      border-radius: 3px;
      padding: 0;
      overflow: hidden;
      position: relative;
      padding: 6px 12px 7px;
      background: #eee;
      color: #252423;
      margin-bottom: .6rem;
      min-width: 10.6rem;
    `}

  ${({ author, platform }) =>
    author === 'user' &&
    css`
      float: right;
      background: ${({ platform }) => platform === 'teams' ? "#e5e5f1" : "#0084ff"};
      color: ${({ platform }) => platform === 'teams' ? "#252423" : "#fff"};
    `}
`;

const Caption = styled.div`
  padding: 0px 12px 6px;

  ${({ platform }) =>
    platform === 'teams' &&
    css`
      padding: 0;
      order: 0;
    `}
`;

const Picture = styled.img`
  position: relative;
  overflow: hidden;
  max-width: 100%;
  border-radius: 30px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  ${({ platform }) =>
    platform === 'teams' &&
    css`
      border-radius: 0px;
      order: 1;
    `}
`;

const Meta = styled.div`
  display: ${({ platform }) => platform === 'teams' ? "flex" : "none"};
  flex-grow: 1;
  font-size: .8rem;
`;

const Left = styled.button`
  float: left;
  left: 0;
  position: absolute;
  top: 20%;
  opacity: 50%;
`;

const Right = styled.button`
  float: right;
  right: 0;
  position: absolute;
  top: 20%;
  opacity: 50%;
`;


export default function Carousel({ carousel, platform, carousel: { id, title, subtitle, imgSrc, date, author, button }}) {

  const left = () => {
     scrollLeft(document.getElementById('content'), -300, 1000);
  }

  const right = () => {
     scrollLeft(document.getElementById('content'), 300, 1000);
  }

  const scrollLeft = (element, change, duration) => {
      var start = element.scrollLeft,
          currentTime = 0,
          increment = 20;

          console.log(start)

      var animateScroll = function(){
          currentTime += increment;
          var val = Math.easeInOutQuad(currentTime, start, change, duration);
          element.scrollLeft = val;
          if(currentTime < duration) {
              setTimeout(animateScroll, increment);
          }
      };
      animateScroll();
  }

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
  	if (t < 1) return c/2*t*t + b;
  	t--;
  	return -c/2 * (t*(t-2) - 1) + b;
  };

    return (
      <>
        <Container id="content">
          {carousel.map(carousel => (
            <Message author={carousel.author} platform={platform}>
              <Meta platform={platform}>
                {carousel.author} {carousel.date}
              </Meta>
              <TeamsContainer platform={platform}>
                <Picture src={carousel.imgSrc} platform={platform} />
                <Caption id="info" platform={platform}>
                  {carousel.title}<br/>
                  {carousel.subtitle}
                </Caption>
              </TeamsContainer>
              {
                (carousel.button) ?
                  <Button key={carousel.button.id} platform={platform} buttons={carousel.button} />
                : null
              }
            </Message>
          ))}
          <Left id="left-button" type="button" onClick={left}>&#8592;</Left>
          <Right id="right-button" type="button" onClick={right}>&#8594;</Right>
        </Container>
      </>
    );
}
