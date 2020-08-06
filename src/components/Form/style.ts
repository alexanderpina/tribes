import styled from 'styled-components';
import { colors } from 'utils/colors';

const FieldComponent = styled.p`
  input {
    background: ${colors.black.light};
    border: none;
    border-bottom: 3px solid ${colors.primary.default};
    border-radius: 8px;
    color: ${colors.white};
    font-size: 14px;
    padding: 15px 0 15px 22px;
    width: 100%;
  }
`;

const FieldLabel = styled.label`
  color: ${colors.white};
  display: block;
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const MessageError = styled.span`
  color: ${colors.red.light};
  display: block;
  padding: 5px 0;
`;

const Error = styled.span`
  display: block;
`;

const WrapperField = styled.span`
  display: block;
  margin-bottom: 10px;
  position: relative;
`;

const Icon = styled.i`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 35px;
`;

export const Styles = {
  Icon,
  Error,
  FieldComponent,
  FieldLabel,
  MessageError,
  WrapperField
}