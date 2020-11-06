import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';


export default function Sound({data:{ soundSrc, author, date, platform }}) {

    return (
      <div>
        {platform}
        {author}
        {date}
        Sound
      </div>
      );
}
