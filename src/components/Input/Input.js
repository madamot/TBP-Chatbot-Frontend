import React from 'react';
import styled, { css } from 'styled-components';


export default function Input() {

    return (
      <form>
        <label>
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}
