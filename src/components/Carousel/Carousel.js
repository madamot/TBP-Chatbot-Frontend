import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 90%;
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
  min-width: 30%;
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


export default function Carousel({carousel, carousel: { id, title, subtitle, imgSrc, platform, date, author }}) {

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
            <Message author={carousel.author} platform={carousel.platform}>
              <Meta platform={carousel.platform}>
                {carousel.author} {carousel.date}
              </Meta>
              <TeamsContainer platform={carousel.platform}>
                <Picture src={carousel.imgSrc} platform={carousel.platform} />
                <Caption id="info" platform={carousel.platform}>
                  <p>{carousel.title}</p>
                  <p>{carousel.subtitle}</p>
                </Caption>
              </TeamsContainer>
            </Message>
          ))}
        </Container>
        <button id="left-button" type="button" onClick={left}>Slide left</button>
        <button id="right-button" type="button" onClick={right}>Slide right</button>
      </>
    );
}
