import React from 'react';
import styled, { css } from 'styled-components';

export default function Image({message:{ imgSrc }}) {

  console.log(imgSrc);
    return (
      <div>
        {/* <p>{img}</p> */}
        <img src={imgSrc} />
      </div>
    );
}
