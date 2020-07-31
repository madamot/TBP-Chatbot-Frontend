import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import Button from '../Button/Button';

export default function ButtonList({ buttons, platform }) {

    return (
      <div className="list-items">
        {buttons.map(button => (
          <Button key={button.id} button={button} platform={platform} />
        ))}
      </div>
    );
}
