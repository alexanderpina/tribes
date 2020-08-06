import styled, { css } from 'styled-components';
import { colors } from 'utils/colors';

type ButtonProps = {
  onlyLabel?: boolean;
}

const Button = styled.button<ButtonProps>`
  ${({ onlyLabel }) =>
    onlyLabel ? css`
      background: none;
      border: none;
      border-radius: 8px;
      color: ${colors.white};
      font-size: 14px;
      font-weight: 300;
      line-height: 17px;
      letter-spacing: 2px;
      padding: 0;
      text-align: center;
      text-transform: uppercase;
      width: auto;
    ` : css`
      background: ${colors.primary.default};
      border: none;
      border-radius: 8px;
      color: ${colors.white};
      font-size: 14px;
      font-weight: 600;
      line-height: 17px;
      letter-spacing: 2px;
      padding: 20px 0;
      text-align: center;
      text-transform: uppercase;
      width: 100%;
    `
  }
  
  &[disabled] {
    background: ${colors.black.light};
    color: ${colors.black.lightest}
  }
`

export const Styles = {
  Button
}